import { PublicPage } from "@/components/public-page";
import { CustomerRegister } from "@/features/member/customer-register";

export default function RegisterPage() {
  return (
    <PublicPage>
      <section className="member-gate">
        <div className="member-gate-inner">
          <div><p className="ticket-eyebrow">JOIN THE CLUB / 02</p><h1>由第一竿開始，<br /><span className="text-[#ff6b1a]">儲起每次驚喜。</span></h1><p className="mt-5 max-w-md leading-7 text-white/65">只需電郵即可建立演示會員帳戶，兩店積分及優惠券通用。</p></div>
          <CustomerRegister />
        </div>
      </section>
    </PublicPage>
  );
}
