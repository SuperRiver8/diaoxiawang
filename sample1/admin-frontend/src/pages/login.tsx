import { AdminLogin } from "@/features/auth/admin-login";
export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1.1fr_.9fr]">
      <section className="relative hidden overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#ff9c4d_0,transparent_25%),linear-gradient(135deg,#2d2042,#6d3df5)] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="text-sm font-black tracking-[.18em]">
          釣蝦王 SHRIMP FISHING
        </div>
        <div>
          <p className="text-xs font-bold tracking-[.2em] text-[#ffbd78] uppercase">
            Operations demo
          </p>
          <h1 className="mt-4 max-w-xl text-5xl leading-[1.05] font-black tracking-[-.05em]">
            兩間分店，
            <br />
            一個營運中心。
          </h1>
          <p className="mt-5 max-w-lg leading-7 text-white/65">
            會員、積分、優惠券、內容與推廣郵件，全部以純前端資料演示。
          </p>
        </div>
        <p className="text-xs text-white/40">
          觀塘店 · 荔枝角店 · 會員權益兩店通用
        </p>
      </section>
      <section className="grid place-items-center bg-[#f8f6fb] px-5 py-12">
        <div className="w-full max-w-md rounded-[1.6rem] border bg-white p-7 shadow-[0_24px_70px_rgba(45,32,66,.12)]">
          <div className="relative size-16 overflow-hidden rounded-2xl border bg-white shadow-sm">
            <img
              src="/brand/shrimp-fishing-logo.jpg"
              alt="釣蝦王 Shrimp Fishing"
              className="h-full w-full scale-[1.45] object-cover object-[50%_43%]"
            />
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[-.04em]">
            管理員登入
          </h2>
          <p className="mt-2 text-sm text-[#796e84]">登入前端演示營運中心</p>
          <AdminLogin />
        </div>
      </section>
    </main>
  );
}
