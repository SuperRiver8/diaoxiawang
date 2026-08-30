"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  seedCampaigns,
  seedCoupons,
  seedMembers,
  seedPromotions,
  seedTransactions,
  seedVideos,
} from "@/lib/seed-data";
import type {
  Campaign,
  Coupon,
  Member,
  PointTransaction,
  Promotion,
  VenueId,
  Video,
} from "@/lib/types";

type NewMember = Pick<Member, "name" | "email" | "phone">;
type NewPromotion = Pick<
  Promotion,
  "title" | "category" | "content" | "imageName" | "imageUrl" | "icon"
>;
type NewVideo = Pick<Video, "title" | "fileName" | "fileSizeMb">;
type CouponWithoutIdentity<T extends Coupon> = Omit<T, "id" | "status">;
type NewCoupon = Coupon extends infer Item
  ? Item extends Coupon
    ? CouponWithoutIdentity<Item>
    : never
  : never;
type AdminState = {
  authenticated: boolean;
  members: Member[];
  transactions: PointTransaction[];
  coupons: Coupon[];
  promotions: Promotion[];
  videos: Video[];
  campaigns: Campaign[];
  login: () => void;
  logout: () => void;
  addMember: (member: NewMember) => void;
  grantPoints: (
    memberIds: string[],
    points: number,
    reason: string,
    venue: VenueId,
  ) => void;
  addCoupon: (coupon: NewCoupon) => void;
  addPromotion: (promotion: NewPromotion) => void;
  updatePromotion: (id: string, changes: NewPromotion) => void;
  togglePromotion: (id: string) => void;
  addVideo: (video: NewVideo) => void;
  updateVideo: (
    id: string,
    changes: Pick<Video, "title" | "coverTone">,
  ) => void;
  toggleVideo: (id: string) => void;
  toggleVideoPinned: (id: string) => void;
  sendCampaign: (subject: string, recipientIds: string[], body: string) => void;
  reset: () => void;
};
const data = {
  members: seedMembers,
  transactions: seedTransactions,
  coupons: seedCoupons,
  promotions: seedPromotions,
  videos: seedVideos,
  campaigns: seedCampaigns,
};
export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      authenticated: false,
      ...data,
      login: () => set({ authenticated: true }),
      logout: () => set({ authenticated: false }),
      addMember: (member) =>
        set((state) => ({
          members: [
            {
              id: `m-${Date.now()}`,
              ...member,
              points: 0,
              tier: "新會員",
              status: "active",
              joinedAt: new Date().toISOString().slice(0, 10),
            },
            ...state.members,
          ],
        })),
      grantPoints: (memberIds, points, reason, venue) => {
        const selectedMembers = get().members.filter((item) =>
          memberIds.includes(item.id),
        );
        if (!selectedMembers.length) return;
        set((state) => ({
          members: state.members.map((item) =>
            memberIds.includes(item.id)
              ? { ...item, points: Math.max(0, item.points + points) }
              : item,
          ),
          transactions: [
            ...selectedMembers.map((member, index) => ({
              id: `pt-${Date.now()}-${index}`,
              memberId: member.id,
              memberName: member.name,
              venue,
              points,
              reason,
              createdAt: new Date().toLocaleString("zh-HK", { hour12: false }),
            })),
            ...state.transactions,
          ],
        }));
      },
      addCoupon: (coupon) =>
        set((state) => ({
          coupons: [
            { ...coupon, id: `cp-${Date.now()}`, status: "active" },
            ...state.coupons,
          ],
        })),
      addPromotion: (promotion) =>
        set((state) => ({
          promotions: [
            {
              id: `pr-${Date.now()}`,
              ...promotion,
              status: "draft",
              updatedAt: new Date().toISOString().slice(0, 10),
            },
            ...state.promotions,
          ],
        })),
      togglePromotion: (id) =>
        set((state) => ({
          promotions: state.promotions.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: item.status === "published" ? "draft" : "published",
                  updatedAt: new Date().toISOString().slice(0, 10),
                }
              : item,
          ),
        })),
      updatePromotion: (id, changes) =>
        set((state) => ({
          promotions: state.promotions.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...changes,
                  updatedAt: new Date().toISOString().slice(0, 10),
                }
              : item,
          ),
        })),
      addVideo: (video) =>
        set((state) => ({
          videos: [
            {
              id: `vd-${Date.now()}`,
              ...video,
              status: "draft",
              duration: "--:--",
              updatedAt: new Date().toISOString().slice(0, 10),
              coverTone: "purple",
              pinned: false,
            },
            ...state.videos,
          ],
        })),
      updateVideo: (id, changes) =>
        set((state) => ({
          videos: state.videos.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...changes,
                  updatedAt: new Date().toISOString().slice(0, 10),
                }
              : item,
          ),
        })),
      toggleVideo: (id) =>
        set((state) => ({
          videos: state.videos.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: item.status === "published" ? "draft" : "published",
                  updatedAt: new Date().toISOString().slice(0, 10),
                }
              : item,
          ),
        })),
      toggleVideoPinned: (id) =>
        set((state) => ({
          videos: state.videos.map((item) => ({
            ...item,
            pinned: item.id === id ? !item.pinned : false,
          })),
        })),
      sendCampaign: (subject, recipientIds, body) =>
        set((state) => {
          const activeIds = state.members
            .filter((item) => item.status === "active")
            .map((item) => item.id);
          const includesAllActive =
            activeIds.length === recipientIds.length &&
            activeIds.every((id) => recipientIds.includes(id));
          return {
            campaigns: [
              {
                id: `em-${Date.now()}`,
                subject,
                audience: includesAllActive
                  ? "所有活躍會員"
                  : `${recipientIds.length} 位指定會員`,
                sentAt: new Date().toLocaleString("zh-HK", { hour12: false }),
                recipientCount: recipientIds.length,
                recipientIds,
                body,
              },
              ...state.campaigns,
            ],
          };
        }),
      reset: () => set({ authenticated: true, ...data }),
    }),
    { name: "shrimp-admin-demo-v1" },
  ),
);
