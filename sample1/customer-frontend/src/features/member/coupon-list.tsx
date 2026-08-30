"use client";
import { useState } from "react";
import { CalendarDays, Check, TicketPercent } from "lucide-react";
import { memberCoupons } from "@/lib/demo-data";

const labels = { available: "可使用", used: "已使用", expired: "已過期" };
export function CouponList() {
  const [filter, setFilter] = useState<"available" | "used" | "expired">(
    "available",
  );
  return (
    <div>
      <div className="mb-5 grid grid-cols-3 rounded-2xl bg-[#eee8f6] p-1">
        {(["available", "used", "expired"] as const).map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`min-h-11 rounded-xl text-sm font-bold ${filter === item ? "bg-white text-[#6d3df5] shadow-sm" : "text-[#756a80]"}`}
          >
            {labels[item]}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {memberCoupons
          .filter((item) => item.status === filter)
          .map((coupon) => (
            <article
              key={coupon.id}
              className={`relative overflow-hidden rounded-[1.6rem] border bg-white p-5 ${filter !== "available" ? "opacity-60" : ""}`}
            >
              <div className="absolute top-0 bottom-0 left-0 w-2 bg-[linear-gradient(#6d3df5,#ff7a1a)]" />
              <div className="flex items-start gap-4 pl-2">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eee8ff] text-[#6d3df5]">
                  <TicketPercent />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#ff7a1a]">
                        {coupon.kind === "cash"
                          ? "現金優惠券"
                          : `滿 HK$${coupon.minimumSpend} 可用`}
                      </p>
                      <h2 className="mt-1 text-lg font-black">
                        {coupon.title}
                      </h2>
                    </div>
                    <p className="shrink-0 text-2xl font-black text-[#6d3df5]">
                      -${coupon.discountAmount}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-[#776d82]">
                    {coupon.description}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-xs text-[#91879b]">
                    <CalendarDays className="size-4" />
                    有效至 {coupon.validUntil}
                  </p>
                  {filter === "available" && (
                    <button className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2d2042] text-sm font-bold text-white">
                      <Check className="size-4" />
                      到店出示使用
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
