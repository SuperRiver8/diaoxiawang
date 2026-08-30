import { PublicPage } from "@/components/public-page";
import { CustomerRegister } from "@/features/member/customer-register";

export default function RegisterPage() {
  return (
    <PublicPage>
      <section className="bg-[radial-gradient(circle_at_top_left,#ff9b4a_0,transparent_30%),linear-gradient(135deg,#352052,#6d3df5)] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_440px]">
          <div>
            <p className="text-xs font-black tracking-[.2em] text-[#ffbd78] uppercase">
              Join the club
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">
              由第一竿開始，
              <br />
              儲起每次驚喜。
            </h1>
            <p className="mt-5 max-w-md leading-7 text-white/70">
              只需電郵即可建立演示會員帳戶，兩店積分及優惠券通用。
            </p>
          </div>
          <CustomerRegister />
        </div>
      </section>
    </PublicPage>
  );
}
