import { AdminLogin } from "@/features/auth/admin-login";

export default function LoginPage() {
  return (
    <main className="admin-concept admin-login">
      <section className="admin-login-art">
        <div className="admin-pass">
          <div className="text-sm font-black tracking-[.18em]">釣蝦王 / SHRIMP FISHING</div>
          <div>
            <p className="text-xs font-black tracking-[.2em] text-[#ffc092]">OPERATIONS ACCESS PASS</p>
            <p className="admin-pass-number">02</p>
            <h1>兩店營運，<br />一個控制台。</h1>
            <p className="mt-6 max-w-lg leading-7 text-white/65">會員、積分、優惠券、內容與推廣郵件，以純前端資料完整演示。</p>
          </div>
          <p className="font-mono text-xs text-white/45">KWUN TONG · LAI CHI KOK · LOCAL DEMO</p>
        </div>
      </section>
      <section className="admin-login-form-zone">
        <div className="admin-login-card">
          <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-5">
            <div className="ops-logo"><img src="/brand/shrimp-fishing-logo.jpg" alt="釣蝦王 Shrimp Fishing" /></div>
            <span className="font-mono text-xs font-black text-[#ff8d4f]">PASS / ADMIN</span>
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[-.04em]">管理員登入</h2>
          <p className="mt-2 text-sm text-[#aa98bd]">進入方案二霓虹營運控制台</p>
          <AdminLogin />
        </div>
      </section>
    </main>
  );
}
