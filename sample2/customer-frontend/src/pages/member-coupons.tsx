import { PublicPage } from "@/components/public-page";
import { CouponList } from "@/features/member/coupon-list";

export default function CouponsPage() {
  return (
    <PublicPage>
      <section className="member-zone">
        <p className="ticket-eyebrow">
          My coupons
        </p>
        <h1>
          我的優惠券
        </h1>
        <p className="mt-3 mb-7 text-sm text-[#776d82]">
          優惠券為前端演示資料，兩間分店通用。
        </p>
        <CouponList />
      </section>
    </PublicPage>
  );
}
