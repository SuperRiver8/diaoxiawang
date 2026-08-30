"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Gift,
  LogOut,
  RotateCcw,
  Sparkles,
  TicketPercent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSyncExternalStore } from "react";

import { Link } from "@/components/app-link";
import { memberCoupons, pointTransactions } from "@/lib/demo-data";
import { useCustomerDemoStore } from "@/stores/customer-demo-store";

export function MemberDashboard() {
  const hydrated = useSyncExternalStore(
    (onStoreChange) =>
      useCustomerDemoStore.persist.onFinishHydration(onStoreChange),
    () => useCustomerDemoStore.persist.hasHydrated(),
    () => false,
  );
  const { authenticated, memberName, email, points, logout, reset } =
    useCustomerDemoStore();
  const navigate = useNavigate();
  if (!hydrated)
    return <div className="min-h-80 animate-pulse rounded-3xl bg-[#eee8f6]" />;
  if (!authenticated)
    return (
      <div className="rounded-[1.75rem] bg-white p-7 text-center shadow-sm">
        <h2 className="text-2xl font-black">登入後查看你的會員旅程</h2>
        <p className="mt-3 text-sm text-[#776d82]">
          積分、到訪紀錄與兩店通用優惠券都在這裡。
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-[#6d3df5] px-6 font-bold text-white"
        >
          前往登入
        </Link>
      </div>
    );
  const leave = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#6d3df5,#8b5cff_55%,#ff7a1a)] p-6 text-white shadow-[0_24px_60px_rgba(109,61,245,.25)] sm:p-8">
        <div className="absolute -top-12 -right-10 size-44 rounded-full border-[28px] border-white/10" />
        <p className="text-sm text-white/70">歡迎回來，{memberName}</p>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-white/65 uppercase">
              Available points
            </p>
            <p className="mt-1 text-5xl font-black tracking-[-.05em]">
              {points.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-white/65">兩間釣蝦王分店通用</p>
          </div>
          <span className="grid size-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
            <Sparkles />
          </span>
        </div>
        <p className="mt-7 border-t border-white/15 pt-4 text-xs text-white/60">
          {email} · 金蝦會員
        </p>
      </section>
      <div className="grid grid-cols-2 gap-3">
        <Link href="/member/points" className="rounded-2xl bg-[#fff0e3] p-5">
          <ArrowUpRight className="size-5 text-[#ff7a1a]" />
          <p className="mt-6 font-black">積分紀錄</p>
          <p className="mt-1 text-xs text-[#7a695e]">查看全部收支</p>
        </Link>
        <Link href="/member/coupons" className="rounded-2xl bg-[#eee8ff] p-5">
          <TicketPercent className="size-5 text-[#6d3df5]" />
          <p className="mt-6 font-black">我的優惠券</p>
          <p className="mt-1 text-xs text-[#716582]">
            {memberCoupons.filter((item) => item.status === "available").length}{" "}
            張可以使用
          </p>
        </Link>
      </div>
      <section className="rounded-[1.6rem] bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-black">最近積分活動</h2>
          <Link
            href="/member/points"
            className="text-xs font-bold text-[#6d3df5]"
          >
            查看全部
          </Link>
        </div>
        <div className="mt-3 divide-y">
          {pointTransactions.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-4">
              <span
                className={`grid size-10 place-items-center rounded-xl ${item.points > 0 ? "bg-[#eee8ff] text-[#6d3df5]" : "bg-[#fff0e3] text-[#ff7a1a]"}`}
              >
                {item.points > 0 ? (
                  <ArrowDownLeft className="size-4" />
                ) : (
                  <Gift className="size-4" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{item.label}</p>
                <p className="mt-1 truncate text-xs text-[#8a8092]">
                  {item.date} · {item.venue}
                </p>
              </div>
              <span
                className={`text-sm font-black ${item.points > 0 ? "text-[#6d3df5]" : "text-[#ff7a1a]"}`}
              >
                {item.points > 0 ? "+" : ""}
                {item.points}
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => reset()}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border bg-white text-sm font-bold"
        >
          <RotateCcw className="size-4" />
          重置演示資料
        </button>
        <button
          type="button"
          onClick={leave}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2c2040] text-sm font-bold text-white"
        >
          <LogOut className="size-4" />
          退出登入
        </button>
      </div>
    </div>
  );
}
