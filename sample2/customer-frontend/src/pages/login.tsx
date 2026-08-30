import { PublicPage } from "@/components/public-page";
import { CustomerLogin } from "@/features/member/customer-login";

export default function LoginPage() {
  return (
    <PublicPage>
      <section className="member-gate">
        <div className="member-gate-inner">
          <div><p className="ticket-eyebrow">MEMBER ACCESS / 01</p><h1>兩間分店，<br /><span className="text-[#ff6b1a]">一張會員證。</span></h1><p className="mt-5 max-w-md leading-7 text-white/65">登入後查看積分、優惠券與每一次釣蝦紀錄。</p></div>
          <CustomerLogin />
        </div>
      </section>
    </PublicPage>
  );
}
