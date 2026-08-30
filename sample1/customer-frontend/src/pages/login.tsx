import { PublicPage } from "@/components/public-page";
import { CustomerLogin } from "@/features/member/customer-login";

export default function LoginPage() {
  return (
    <PublicPage>
      <section className="bg-[radial-gradient(circle_at_top_right,#ffb46c_0,transparent_33%),linear-gradient(135deg,#2d2042,#6d3df5)] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-xs font-black tracking-[.2em] text-[#ffbd78] uppercase">
              Member login
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">
              兩間分店，
              <br />
              一個會員帳戶。
            </h1>
            <p className="mt-5 max-w-md leading-7 text-white/70">
              登入後查看積分、優惠券與每一次釣蝦紀錄。
            </p>
          </div>
          <CustomerLogin />
        </div>
      </section>
    </PublicPage>
  );
}
