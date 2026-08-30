"use client";

import {
  BarChart3,
  CheckCircle2,
  FileVideo,
  Gift,
  ImageIcon,
  Mail,
  Megaphone,
  Pencil,
  Pin,
  PlaySquare,
  Plus,
  Search,
  Send,
  Sparkles,
  UploadCloud,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { MemberPicker } from "@/components/member-picker";
import { RichTextEditor } from "@/components/rich-text-editor";
import type { Member, Promotion, VenueId, Video } from "@/lib/types";
import { useAdminStore } from "@/stores/admin-store";

const venueLabels: Record<VenueId, string> = {
  all: "兩店通用",
  "kwun-tong": "觀塘店",
  "lai-chi-kok": "荔枝角店",
};
const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="admin-label">{label}</span>
    {children}
  </label>
);
const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) => (
  <div className="fixed inset-0 z-50 grid place-items-center bg-[#21162f]/55 p-4 backdrop-blur-sm">
    <div className="max-h-[92vh] w-full max-w-lg overflow-auto rounded-[1.4rem] bg-white p-6 shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black">{title}</h2>
        <button
          onClick={onClose}
          className="grid size-10 place-items-center rounded-xl bg-[#f1edf5]"
          aria-label="關閉"
        >
          <X className="size-5" />
        </button>
      </div>
      {children}
    </div>
  </div>
);
const EmptySuccess = ({ text }: { text: string }) => (
  <p
    role="status"
    className="flex items-center gap-2 rounded-xl bg-[#edf8f0] p-3 text-sm font-bold text-[#34734a]"
  >
    <CheckCircle2 className="size-4" />
    {text}
  </p>
);
const MemberDrawer = ({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 bg-[#21162f]/45 backdrop-blur-sm">
    <button
      className="absolute inset-0"
      onClick={onClose}
      aria-label="關閉會員詳情"
    />
    <aside className="absolute inset-y-0 right-0 w-full max-w-md overflow-auto bg-white p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-[#6d3df5]">會員詳情</p>
          <h2 className="mt-1 text-2xl font-black">{member.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="grid size-10 place-items-center rounded-xl bg-[#f1edf5]"
          aria-label="關閉"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="mt-7 rounded-2xl bg-[linear-gradient(135deg,#6d3df5,#ff7a1a)] p-5 text-white">
        <p className="text-xs text-white/65">目前積分</p>
        <p className="mt-2 text-4xl font-black">
          {member.points.toLocaleString()}
        </p>
        <p className="mt-3 text-sm text-white/70">{member.tier} · 兩店通用</p>
      </div>
      <dl className="mt-6 divide-y text-sm">
        {[
          ["電郵", member.email],
          ["電話", member.phone || "未提供"],
          ["加入日期", member.joinedAt],
          ["會員狀態", member.status === "active" ? "活躍" : "停用"],
        ].map(([label, value]) => (
          <div key={label} className="grid grid-cols-[90px_1fr] gap-3 py-4">
            <dt className="text-[#8a8093]">{label}</dt>
            <dd className="font-bold">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  </div>
);

export function DashboardSurface() {
  const { members, transactions, coupons, videos, campaigns } = useAdminStore();
  const stats = [
    {
      label: "會員總數",
      value: members.length,
      note: `${members.filter((m) => m.status === "active").length} 位活躍`,
      icon: UsersRound,
      tone: "bg-[#eee8ff] text-[#6d3df5]",
    },
    {
      label: "本月積分發放",
      value: transactions
        .filter((t) => t.points > 0)
        .reduce((sum, t) => sum + t.points, 0)
        .toLocaleString(),
      note: "兩店合計",
      icon: WalletCards,
      tone: "bg-[#fff0e3] text-[#ff7a1a]",
    },
    {
      label: "有效優惠券",
      value: coupons.filter((c) => c.status === "active").length,
      note: "可供會員使用",
      icon: Gift,
      tone: "bg-[#f8e8f7] text-[#a63f9a]",
    },
    {
      label: "已發布影片",
      value: videos.filter((v) => v.status === "published").length,
      note: `${campaigns.length} 次郵件推廣`,
      icon: PlaySquare,
      tone: "bg-[#e8f5f1] text-[#27816b]",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, note, icon: Icon, tone }) => (
          <article key={label} className="admin-card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-[#7b7085]">{label}</p>
                <p className="mt-3 text-3xl font-black tracking-[-.04em]">
                  {value}
                </p>
                <p className="mt-2 text-xs text-[#9a91a2]">{note}</p>
              </div>
              <span
                className={`grid size-11 place-items-center rounded-2xl ${tone}`}
              >
                <Icon className="size-5" />
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
        <section className="admin-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-black">最近積分活動</h2>
            <BarChart3 className="size-5 text-[#6d3df5]" />
          </div>
          <div className="mt-4 divide-y">
            {transactions.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-4">
                <span
                  className={`grid size-10 place-items-center rounded-xl font-black ${item.points > 0 ? "bg-[#eee8ff] text-[#6d3df5]" : "bg-[#fff0e3] text-[#ff7a1a]"}`}
                >
                  {item.points > 0 ? "+" : "−"}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">
                    {item.memberName} · {item.reason}
                  </p>
                  <p className="mt-1 text-xs text-[#91879a]">
                    {venueLabels[item.venue]} · {item.createdAt}
                  </p>
                </div>
                <p
                  className={`font-black ${item.points > 0 ? "text-[#6d3df5]" : "text-[#ff7a1a]"}`}
                >
                  {item.points > 0 ? "+" : ""}
                  {item.points}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="admin-card overflow-hidden">
          <div className="bg-[linear-gradient(135deg,#6d3df5,#ff7a1a)] p-6 text-white">
            <p className="text-xs font-bold text-white/65">兩店營運</p>
            <h2 className="mt-2 text-2xl font-black">會員權益同步概念</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              此演示版兩端資料各自保存；正式系統需接入 API 才能即時同步。
            </p>
          </div>
          <div className="space-y-3 p-5 text-sm">
            <p className="flex justify-between">
              <span className="text-[#7b7085]">觀塘店</span>
              <strong>公開資料待確認</strong>
            </p>
            <p className="flex justify-between">
              <span className="text-[#7b7085]">荔枝角店</span>
              <strong>營業中</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export function MembersSurface() {
  const { members, addMember } = useAdminStore();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const filtered = useMemo(
    () =>
      [...members]
        .sort((a, b) => b.joinedAt.localeCompare(a.joinedAt))
        .filter((m) =>
          `${m.name}${m.email}${m.phone}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        ),
    [members, query],
  );
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    addMember({ name, email, phone });
    setOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setSuccess(true);
  };
  return (
    <div className="space-y-5">
      {success && <EmptySuccess text="已在本地演示資料中建立會員" />}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3.5 left-3 size-4 text-[#91879a]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="admin-input admin-input-with-icon"
            placeholder="搜尋姓名、電郵或電話"
          />
        </div>
        <button className="admin-button" onClick={() => setOpen(true)}>
          <Plus className="size-4" />
          手動建立會員
        </button>
      </div>
      <div className="space-y-3 md:hidden">
        {filtered.map((member) => (
          <article key={member.id} className="admin-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-black">{member.name}</h2>
                <p className="mt-1 truncate text-xs text-[#91879a]">
                  {member.email}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${member.status === "active" ? "bg-[#e9f7ee] text-[#348052]" : "bg-[#f2eff4] text-[#83788b]"}`}
              >
                {member.status === "active" ? "活躍" : "停用"}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#f7f4f9] p-3 text-center">
              <div>
                <p className="text-[10px] text-[#91879a]">會員等級</p>
                <p className="mt-1 text-xs font-black text-[#6d3df5]">
                  {member.tier}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#91879a]">積分</p>
                <p className="mt-1 text-xs font-black">
                  {member.points.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#91879a]">電話</p>
                <p className="mt-1 truncate text-xs font-black">
                  {member.phone || "—"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedMember(member)}
              className="mt-3 min-h-11 w-full rounded-xl border text-sm font-bold text-[#6d3df5]"
            >
              查看會員詳情
            </button>
          </article>
        ))}
      </div>
      <div className="admin-card hidden overflow-x-auto md:block">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-[#f3f0f7] text-xs text-[#776c81]">
            <tr>
              {["會員", "電話", "等級", "積分", "加入日期", "狀態", "操作"].map(
                (x) => (
                  <th key={x} className="px-5 py-4">
                    {x}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((m) => (
              <tr key={m.id}>
                <td className="px-5 py-4">
                  <strong>{m.name}</strong>
                  <p className="mt-1 text-xs text-[#91879a]">{m.email}</p>
                </td>
                <td className="px-5 py-4">{m.phone || "—"}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#eee8ff] px-2.5 py-1 text-xs font-bold text-[#6d3df5]">
                    {m.tier}
                  </span>
                </td>
                <td className="px-5 py-4 font-black">
                  {m.points.toLocaleString()}
                </td>
                <td className="px-5 py-4 text-[#776c81]">{m.joinedAt}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${m.status === "active" ? "bg-[#e9f7ee] text-[#348052]" : "bg-[#f2eff4] text-[#83788b]"}`}
                  >
                    {m.status === "active" ? "活躍" : "停用"}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(m)}
                    className="min-h-10 whitespace-nowrap rounded-xl border px-3 text-xs font-bold text-[#6d3df5]"
                  >
                    查看詳情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="手動建立會員" onClose={() => setOpen(false)}>
          <form onSubmit={submit} className="space-y-4">
            <Field label="會員姓名">
              <input
                className="admin-input"
                placeholder="例如：陳小蝦"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <Field label="電郵地址">
              <input
                className="admin-input"
                type="email"
                placeholder="例如：member@example.hk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
            <Field label="電話（可選）">
              <input
                className="admin-input"
                placeholder="例如：9123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>
            <p className="rounded-xl bg-[#fff2e5] p-3 text-xs leading-5 text-[#71462b]">
              新會員初始積分為 0，可在積分管理頁另行發放。
            </p>
            <button className="admin-button w-full">建立會員</button>
          </form>
        </Modal>
      )}
      {selectedMember && (
        <MemberDrawer
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

export function PointsSurface() {
  const { members, transactions, grantPoints } = useAdminStore();
  const [memberIds, setMemberIds] = useState<string[]>(
    members[0] ? [members[0].id] : [],
  );
  const [venue, setVenue] = useState<VenueId>("all");
  const [amount, setAmount] = useState("100");
  const [reason, setReason] = useState("到店消費積分");
  const [success, setSuccess] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const points = Number(amount);
    if (!memberIds.length || !points) return;
    grantPoints(memberIds, points, reason, venue);
    setSuccess(true);
  };
  return (
    <div className="grid gap-5 xl:grid-cols-[420px_1fr]">
      <section className="admin-card p-5">
        <h2 className="text-lg font-black">發放／扣除積分</h2>
        <p className="mt-1 text-xs text-[#887d91]">
          輸入負數可扣除積分，餘額不會低於 0。
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <MemberPicker
            members={members}
            selectedIds={memberIds}
            onChange={setMemberIds}
            label="選擇會員"
          />
          <Field label="適用分店">
            <select
              className="admin-input"
              value={venue}
              onChange={(e) => setVenue(e.target.value as VenueId)}
            >
              {Object.entries(venueLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="積分數量">
            <input
              className="admin-input"
              type="number"
              placeholder="例如：100；扣減請輸入負數"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Field>
          <Field label="操作原因">
            <input
              className="admin-input"
              placeholder="例如：到店消費積分"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </Field>
          <button className="admin-button w-full" disabled={!memberIds.length}>
            <WalletCards className="size-4" />
            確認積分操作
          </button>
          {success && (
            <EmptySuccess
              text={`已為 ${memberIds.length} 位會員更新積分及流水`}
            />
          )}
        </form>
      </section>
      <section className="admin-card overflow-hidden">
        <div className="border-b p-5">
          <h2 className="font-black">積分流水</h2>
        </div>
        <div className="divide-y">
          {transactions.slice(0, 8).map((t) => (
            <div key={t.id} className="flex items-center gap-3 p-5">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">
                  {t.memberName} · {t.reason}
                </p>
                <p className="mt-1 text-xs text-[#91879a]">
                  {venueLabels[t.venue]} · {t.createdAt}
                </p>
              </div>
              <p
                className={`font-black ${t.points > 0 ? "text-[#6d3df5]" : "text-[#ff7a1a]"}`}
              >
                {t.points > 0 ? "+" : ""}
                {t.points}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function CouponsSurface() {
  const { members, coupons, addCoupon } = useAdminStore();
  const [kind, setKind] = useState<"cash" | "threshold">("cash");
  const [title, setTitle] = useState("會員現金券");
  const [discount, setDiscount] = useState("50");
  const [minimum, setMinimum] = useState("300");
  const [validFrom, setValidFrom] = useState("2026-08-29");
  const [validUntil, setValidUntil] = useState("2026-12-31");
  const [venue, setVenue] = useState<VenueId>("all");
  const [recipientIds, setRecipientIds] = useState<string[]>(() =>
    members
      .filter((member) => member.status === "active")
      .map((member) => member.id),
  );
  const [success, setSuccess] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = {
      title,
      discountAmount: Number(discount),
      validFrom,
      validUntil,
      venueScope: venue,
      recipientIds,
    };
    if (kind === "cash") addCoupon({ ...base, kind: "cash" });
    else
      addCoupon({ ...base, kind: "threshold", minimumSpend: Number(minimum) });
    setSuccess(true);
  };
  return (
    <div className="grid gap-5 xl:grid-cols-[440px_1fr]">
      <section className="admin-card p-5">
        <h2 className="text-lg font-black">建立線上優惠券</h2>
        <div className="mt-5 grid grid-cols-2 rounded-xl bg-[#f1edf5] p-1">
          <button
            onClick={() => setKind("cash")}
            className={`min-h-11 rounded-lg text-sm font-bold ${kind === "cash" ? "bg-white text-[#6d3df5] shadow-sm" : "text-[#796e83]"}`}
          >
            固定金額券
          </button>
          <button
            onClick={() => setKind("threshold")}
            className={`min-h-11 rounded-lg text-sm font-bold ${kind === "threshold" ? "bg-white text-[#6d3df5] shadow-sm" : "text-[#796e83]"}`}
          >
            滿額抵扣券
          </button>
        </div>
        <form onSubmit={submit} className="mt-5 space-y-4">
          <Field label="優惠券名稱">
            <input
              className="admin-input"
              placeholder="例如：會員 HK$50 現金券"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            {kind === "threshold" && (
              <Field label="最低消費 HK$">
                <input
                  className="admin-input"
                  type="number"
                  placeholder="例如：300"
                  value={minimum}
                  onChange={(e) => setMinimum(e.target.value)}
                />
              </Field>
            )}
            <Field label="減免金額 HK$">
              <input
                className="admin-input"
                type="number"
                placeholder="例如：50"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                required
              />
            </Field>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="開始日期">
              <input
                className="admin-input"
                type="date"
                value={validFrom}
                onChange={(e) => setValidFrom(e.target.value)}
              />
            </Field>
            <Field label="有效期至">
              <input
                className="admin-input"
                type="date"
                value={validUntil}
                onChange={(e) => setValidUntil(e.target.value)}
              />
            </Field>
          </div>
          <Field label="適用分店">
            <select
              className="admin-input"
              value={venue}
              onChange={(e) => setVenue(e.target.value as VenueId)}
            >
              {Object.entries(venueLabels).map(([id, label]) => (
                <option value={id} key={id}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
          <MemberPicker
            members={members}
            selectedIds={recipientIds}
            onChange={setRecipientIds}
          />
          <button
            className="admin-button w-full"
            disabled={!recipientIds.length}
          >
            <Gift className="size-4" />
            建立並發放
          </button>
          {success && <EmptySuccess text="優惠券已加入前端演示資料" />}
        </form>
      </section>
      <section className="space-y-3">
        {coupons.map((c) => (
          <article key={c.id} className="admin-card p-5">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eee8ff] text-[#6d3df5]">
                <Gift />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-[#ff7a1a]">
                      {c.kind === "cash"
                        ? "固定金額券"
                        : `滿 HK$${c.minimumSpend} 抵扣`}
                    </p>
                    <h2 className="mt-1 font-black">{c.title}</h2>
                  </div>
                  <p className="text-2xl font-black text-[#6d3df5]">
                    -${c.discountAmount}
                  </p>
                </div>
                <div className="mt-4 grid gap-1 text-xs text-[#887e91] sm:grid-cols-2">
                  <p>{venueLabels[c.venueScope]}</p>
                  <p>
                    {c.validFrom} 至 {c.validUntil}
                  </p>
                  <p>
                    {c.recipientIds.length
                      ? `${c.recipientIds.length} 位指定會員`
                      : "所有活躍會員"}
                  </p>
                  <p className="font-bold text-[#348052]">
                    {c.status === "active" ? "有效" : "已結束"}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export function PromotionsSurface() {
  const { promotions, togglePromotion, addPromotion, updatePromotion } =
    useAdminStore();
  const emptyDraft = {
    title: "",
    category: "會員限定",
    content: "",
    imageName: "",
    imageUrl: "/brand/venue-preview.jpg",
    icon: "gift" as Promotion["icon"],
  };
  const [query, setQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState(emptyDraft);
  const [imageError, setImageError] = useState("");
  const filteredPromotions = useMemo(
    () =>
      promotions.filter((item) =>
        `${item.title}${item.category}${item.content ?? ""}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [promotions, query],
  );
  const openCreate = () => {
    setEditingId(null);
    setDraft(emptyDraft);
    setImageError("");
    setDialogOpen(true);
  };
  const openEdit = (promotion: Promotion) => {
    setEditingId(promotion.id);
    setDraft({
      title: promotion.title,
      category: promotion.category,
      content: promotion.content ?? "",
      imageName: promotion.imageName ?? "",
      imageUrl: promotion.imageUrl ?? "/brand/venue-preview.jpg",
      icon: promotion.icon ?? "gift",
    });
    setImageError("");
    setDialogOpen(true);
  };
  const iconMap = { gift: Gift, sparkles: Sparkles, megaphone: Megaphone };
  return (
    <div className="space-y-5">
      <div className="admin-card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#91879a]" />
          <input
            className="admin-input admin-input-with-icon"
            placeholder="搜尋標題、內容或分類"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <button
          type="button"
          className="admin-button shrink-0"
          onClick={openCreate}
        >
          <Plus className="size-4" />
          新增宣傳活動
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filteredPromotions.map((promotion) => {
          const PromotionIcon = iconMap[promotion.icon ?? "gift"];
          return (
            <article key={promotion.id} className="admin-card overflow-hidden">
              <div className="relative aspect-[16/8] overflow-hidden bg-[#2d2042]">
                <img
                  src={promotion.imageUrl || "/brand/venue-preview.jpg"}
                  alt=""
                  className="h-full w-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2042]/85 to-transparent" />
                <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-2xl bg-white text-[#6d3df5] shadow-lg">
                  <PromotionIcon className="size-5" />
                </span>
                <span
                  className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold ${promotion.status === "published" ? "bg-[#e9f7ee] text-[#347b50]" : "bg-white/90 text-[#74697f]"}`}
                >
                  {promotion.status === "published" ? "已發布" : "草稿"}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-[#ff7a1a]">
                  {promotion.category}
                </p>
                <h2 className="mt-2 text-lg font-black">{promotion.title}</h2>
                <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-[#786e81]">
                  {promotion.content || "尚未填寫宣傳內容"}
                </p>
                <p className="mt-3 text-xs text-[#91879a]">
                  圖片：{promotion.imageName || "預設場館圖片"} · 更新{" "}
                  {promotion.updatedAt}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openEdit(promotion)}
                    className="min-h-10 rounded-xl border px-3 text-xs font-bold text-[#6d3df5]"
                  >
                    編輯內容
                  </button>
                  <button
                    type="button"
                    onClick={() => togglePromotion(promotion.id)}
                    className={`min-h-10 rounded-xl px-3 text-xs font-bold ${promotion.status === "published" ? "bg-[#fff0e3] text-[#cf5f13]" : "bg-[#eee8ff] text-[#6d3df5]"}`}
                  >
                    {promotion.status === "published" ? "下架" : "發布"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {dialogOpen && (
        <Modal
          title={editingId ? "編輯宣傳活動" : "新增宣傳活動"}
          onClose={() => setDialogOpen(false)}
        >
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              if (!draft.title || !draft.content || imageError) return;
              if (editingId) updatePromotion(editingId, draft);
              else addPromotion(draft);
              setDialogOpen(false);
            }}
          >
            <Field label="宣傳標題">
              <input
                className="admin-input"
                placeholder="例如：中秋會員釣蝦夜"
                value={draft.title}
                onChange={(event) =>
                  setDraft({ ...draft, title: event.target.value })
                }
                required
              />
            </Field>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="活動分類">
                <select
                  className="admin-input"
                  value={draft.category}
                  onChange={(event) =>
                    setDraft({ ...draft, category: event.target.value })
                  }
                >
                  <option>會員限定</option>
                  <option>期間限定</option>
                  <option>場內消息</option>
                </select>
              </Field>
              <Field label="顯示圖示">
                <select
                  className="admin-input"
                  value={draft.icon}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      icon: event.target.value as Promotion["icon"],
                    })
                  }
                >
                  <option value="gift">禮物</option>
                  <option value="sparkles">閃亮</option>
                  <option value="megaphone">公告</option>
                </select>
              </Field>
            </div>
            <Field label="宣傳內容">
              <textarea
                className="admin-input min-h-32 resize-y"
                placeholder="輸入活動內容、參加方法及注意事項"
                value={draft.content}
                onChange={(event) =>
                  setDraft({ ...draft, content: event.target.value })
                }
                required
              />
            </Field>
            <div>
              <span className="admin-label">
                宣傳圖片（JPG／PNG，最多 3MB）
              </span>
              <label className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed bg-[#faf8fc] px-4 text-center text-xs text-[#7f7488] hover:border-[#6d3df5]/40">
                <ImageIcon className="mb-2 size-5 text-[#6d3df5]" />
                {draft.imageName || "選擇圖片作模擬上載"}
                <input
                  className="sr-only"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    if (file.size > 3 * 1024 * 1024) {
                      setImageError("圖片不可超過 3MB");
                      return;
                    }
                    setImageError("");
                    setDraft({
                      ...draft,
                      imageName: file.name,
                      imageUrl: "/brand/venue-preview.jpg",
                    });
                  }}
                />
              </label>
            </div>
            {imageError && (
              <p className="text-xs font-bold text-red-600">{imageError}</p>
            )}
            <button className="admin-button w-full">
              {editingId ? "儲存修改" : "建立宣傳草稿"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export function VideosSurface() {
  const { videos, addVideo, updateVideo, toggleVideo, toggleVideoPinned } =
    useAdminStore();
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState("");
  const [editing, setEditing] = useState<Video | null>(null);
  const maxVideoSizeMb = 200;
  return (
    <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
      <section className="admin-card p-5">
        <span className="grid size-12 place-items-center rounded-2xl bg-[#eee8ff] text-[#6d3df5]">
          <UploadCloud />
        </span>
        <h2 className="mt-5 text-lg font-black">模擬上載影片</h2>
        <p className="mt-2 text-sm leading-6 text-[#83788c]">
          選擇影片後會檢查格式與大小；演示版只記錄檔案資料，不會真正上載。
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title && videoFile && !uploadError) {
              addVideo({
                title,
                fileName: videoFile.name,
                fileSizeMb: Number((videoFile.size / 1024 / 1024).toFixed(1)),
              });
              setTitle("");
              setVideoFile(null);
            }
          }}
          className="mt-5 space-y-3"
        >
          <Field label="影片標題">
            <input
              className="admin-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例如：觀塘店場內直擊"
            />
          </Field>
          <div>
            <span className="admin-label">
              影片檔案（MP4／WebM，最多 {maxVideoSizeMb}MB）
            </span>
            <label className="grid min-h-28 cursor-pointer place-items-center rounded-xl border border-dashed bg-[#faf8fc] px-4 text-center text-xs text-[#91879a] hover:border-[#6d3df5]/40">
              <span>
                <FileVideo className="mx-auto mb-2 size-7 text-[#6d3df5]" />
                {videoFile
                  ? `${videoFile.name} · ${(videoFile.size / 1024 / 1024).toFixed(1)}MB`
                  : "點擊選擇影片檔案"}
              </span>
              <input
                className="sr-only"
                type="file"
                accept="video/mp4,video/webm"
                aria-label="影片檔案"
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;
                  setVideoFile(file);
                  if (!file) return;
                  if (file.size > maxVideoSizeMb * 1024 * 1024)
                    setUploadError(`影片大小不可超過 ${maxVideoSizeMb}MB`);
                  else if (!file.type.match(/^video\/(mp4|webm)$/))
                    setUploadError("只接受 MP4 或 WebM 影片");
                  else setUploadError("");
                }}
              />
            </label>
          </div>
          {uploadError && (
            <p className="text-xs font-bold text-red-600">{uploadError}</p>
          )}
          <button
            className="admin-button w-full"
            disabled={!title || !videoFile || Boolean(uploadError)}
          >
            模擬上載並新增草稿
          </button>
        </form>
      </section>
      <section className="grid content-start gap-4 sm:grid-cols-2">
        {[...videos]
          .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)))
          .map((v) => (
            <article className="admin-card overflow-hidden" key={v.id}>
              <div
                className={`relative grid aspect-video place-items-center text-white/70 ${v.coverTone === "orange" ? "bg-[linear-gradient(135deg,#5a2e24,#ff7a1a)]" : "bg-[linear-gradient(135deg,#2d2042,#6d3df5)]"}`}
              >
                <PlaySquare className="size-10" />
                {v.pinned && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-black text-[#6d3df5]">
                    <Pin className="size-3" />
                    置頂
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-black">{v.title}</h2>
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-bold ${v.status === "published" ? "bg-[#e9f7ee] text-[#347b50]" : "bg-[#f1edf5] text-[#74697f]"}`}
                  >
                    {v.status === "published" ? "已發布" : "草稿"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#91879a]">
                  {v.fileName || "演示影片"} · {v.fileSizeMb ?? 0}MB ·{" "}
                  {v.updatedAt}
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEditing(v)}
                    className="flex min-h-10 items-center justify-center gap-1 rounded-xl border text-xs font-bold text-[#6d3df5]"
                  >
                    <Pencil className="size-3.5" />
                    編輯
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleVideoPinned(v.id)}
                    className={`flex min-h-10 items-center justify-center gap-1 rounded-xl text-xs font-bold ${v.pinned ? "bg-[#eee8ff] text-[#6d3df5]" : "border text-[#786e81]"}`}
                  >
                    <Pin className="size-3.5" />
                    {v.pinned ? "取消置頂" : "置頂"}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleVideo(v.id)}
                    className="min-h-10 rounded-xl bg-[#f1edf5] text-xs font-bold"
                  >
                    {v.status === "published" ? "轉為草稿" : "發布影片"}
                  </button>
                </div>
              </div>
            </article>
          ))}
      </section>
      {editing && (
        <Modal title="編輯影片與封面" onClose={() => setEditing(null)}>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              updateVideo(editing.id, {
                title: editing.title,
                coverTone: editing.coverTone,
              });
              setEditing(null);
            }}
          >
            <Field label="影片標題">
              <input
                className="admin-input"
                placeholder="輸入影片標題"
                value={editing.title}
                onChange={(event) =>
                  setEditing({ ...editing, title: event.target.value })
                }
                required
              />
            </Field>
            <Field label="模擬封面配色">
              <select
                className="admin-input"
                value={editing.coverTone}
                onChange={(event) =>
                  setEditing({
                    ...editing,
                    coverTone: event.target.value as Video["coverTone"],
                  })
                }
              >
                <option value="purple">品牌紫</option>
                <option value="orange">活力橙</option>
              </select>
            </Field>
            <button className="admin-button w-full">儲存影片修改</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export function CampaignsSurface() {
  const { members, campaigns, sendCampaign } = useAdminStore();
  const [subject, setSubject] = useState("週末釣蝦會員賞");
  const [recipientIds, setRecipientIds] = useState<string[]>(() =>
    members
      .filter((member) => member.status === "active")
      .map((member) => member.id),
  );
  const [body, setBody] = useState(
    "<h2>今個週末，一齊來釣蝦！</h2><p>帶埋朋友來釣蝦王，一齊享受城市釣蝦樂趣。</p><ul><li>會員積分兩店通用</li><li>最新優惠請留意會員中心</li></ul>",
  );
  const [success, setSuccess] = useState(false);
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_.8fr]">
      <section className="admin-card p-5">
        <h2 className="text-lg font-black">建立宣傳郵件</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!recipientIds.length) return;
            sendCampaign(subject, recipientIds, body);
            setSuccess(true);
          }}
          className="mt-5 space-y-4"
        >
          <Field label="郵件主題">
            <input
              className="admin-input"
              placeholder="例如：週末釣蝦會員賞"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Field>
          <MemberPicker
            members={members}
            selectedIds={recipientIds}
            onChange={setRecipientIds}
          />
          <div>
            <span className="admin-label">郵件內容</span>
            <RichTextEditor value={body} onChange={setBody} />
          </div>
          <button
            className="admin-button w-full"
            disabled={!recipientIds.length || !subject || !body}
          >
            <Send className="size-4" />
            模擬發送郵件
          </button>
          {success && (
            <EmptySuccess text="已生成模擬發送記錄，沒有發出真實郵件" />
          )}
        </form>
      </section>
      <div className="space-y-5">
        <section className="overflow-hidden rounded-[1.4rem] border bg-white">
          <div className="bg-[linear-gradient(135deg,#6d3df5,#ff7a1a)] p-6 text-white">
            <p className="text-xs text-white/65">釣蝦王會員通訊</p>
            <h2 className="mt-2 text-2xl font-black">{subject}</h2>
          </div>
          <div
            className="rich-editor p-6 text-sm leading-7 text-[#6f6479]"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </section>
        <section className="admin-card p-5">
          <h2 className="font-black">發送記錄</h2>
          <div className="mt-3 divide-y">
            {campaigns.slice(0, 5).map((c) => (
              <div key={c.id} className="flex items-center gap-3 py-4">
                <span className="grid size-10 place-items-center rounded-xl bg-[#fff0e3] text-[#ff7a1a]">
                  <Mail className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{c.subject}</p>
                  <p className="mt-1 text-xs text-[#91879a]">
                    {c.audience} · {c.recipientCount}人
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
