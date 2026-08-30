export type VenueId = "all" | "kwun-tong" | "lai-chi-kok";
export type Member = {
  id: string;
  name: string;
  email: string;
  phone: string;
  points: number;
  tier: "金蝦" | "銀蝦" | "新會員";
  status: "active" | "inactive";
  joinedAt: string;
};
export type PointTransaction = {
  id: string;
  memberId: string;
  memberName: string;
  venue: VenueId;
  points: number;
  reason: string;
  createdAt: string;
};
type CouponBase = {
  id: string;
  title: string;
  validFrom: string;
  validUntil: string;
  venueScope: VenueId;
  recipientIds: string[];
  status: "active" | "expired" | "redeemed";
};
export type Coupon = CouponBase &
  (
    | { kind: "cash"; discountAmount: number }
    | { kind: "threshold"; minimumSpend: number; discountAmount: number }
  );
export type Promotion = {
  id: string;
  title: string;
  category: string;
  content: string;
  imageName: string;
  imageUrl: string;
  icon: "gift" | "sparkles" | "megaphone";
  status: "published" | "draft";
  updatedAt: string;
};
export type Video = {
  id: string;
  title: string;
  status: "published" | "draft";
  duration: string;
  updatedAt: string;
  coverTone: "purple" | "orange";
  fileName: string;
  fileSizeMb: number;
  pinned: boolean;
};
export type Campaign = {
  id: string;
  subject: string;
  audience: string;
  sentAt: string;
  recipientCount: number;
  recipientIds: string[];
  body: string;
};
