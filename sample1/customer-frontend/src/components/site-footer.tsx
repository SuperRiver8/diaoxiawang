import { Link } from "@/components/app-link";

export function SiteFooter() {
  return (
    <footer className="bg-[#2d2042] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr] lg:px-12">
        <div>
          <p className="text-xl font-black tracking-[0.12em]">釣蝦王</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
            香港室內釣蝦體驗，會員積分與優惠券兩間分店通用。
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#ffbd78] uppercase">探索</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <Link href="/venues" className="hover:text-white">分店</Link>
            <Link href="/promotions" className="hover:text-white">活動</Link>
            <Link href="/videos" className="hover:text-white">影片</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#ffbd78] uppercase">會員</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
            <Link href="/login" className="hover:text-white">會員登入</Link>
            <Link href="/register" className="hover:text-white">電郵註冊</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35">
        © 2026 釣蝦王 · 此網站為純前端演示版本
      </div>
    </footer>
  );
}
