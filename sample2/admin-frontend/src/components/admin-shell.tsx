import {
  BarChart3, Gift, LogOut, Mail, Menu, PlaySquare, RotateCcw,
  UsersRound, WalletCards, X, Zap,
} from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAdminStore } from "@/stores/admin-store";

const nav = [
  { href: "/dashboard", label: "營運總覽", icon: BarChart3 },
  { href: "/members", label: "會員管理", icon: UsersRound },
  { href: "/points", label: "積分管理", icon: WalletCards },
  { href: "/coupons", label: "優惠券", icon: Gift },
  { href: "/promotions", label: "宣傳內容", icon: Zap },
  { href: "/videos", label: "影片管理", icon: PlaySquare },
  { href: "/campaigns", label: "電郵推廣", icon: Mail },
];

export function AdminShell({ title, description, children, action }: {
  title: string; description: string; children: React.ReactNode; action?: React.ReactNode;
}) {
  const hydrated = useSyncExternalStore(
    (onStoreChange) => useAdminStore.persist.onFinishHydration(onStoreChange),
    () => useAdminStore.persist.hasHydrated(),
    () => false,
  );
  const [open, setOpen] = useState(false);
  const { authenticated, logout, reset } = useAdminStore();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  useEffect(() => { if (hydrated && !authenticated) navigate("/login", { replace: true }); }, [hydrated, authenticated, navigate]);
  if (!hydrated || !authenticated) return <div className="admin-concept grid min-h-screen place-items-center text-sm text-[#aa98bd]">正在載入營運控制台…</div>;
  const leave = () => { logout(); navigate("/login"); };
  return (
    <div className="admin-concept ops-layout">
      <aside className={`ops-rail ${open ? "is-open" : ""}`}>
        <div className="flex items-center justify-between lg:justify-center">
          <Link to="/dashboard" className="ops-brand" aria-label="釣蝦王營運總覽">
            <span className="ops-logo"><img src="/brand/shrimp-fishing-logo.jpg" alt="" /></span>
            <span className="ops-brand-copy"><strong>釣蝦王</strong><small>OPS CONTROL / 02</small></span>
          </Link>
          <button onClick={() => setOpen(false)} className="ops-menu-button lg:hidden" aria-label="關閉選單"><X /></button>
        </div>
        <nav className="ops-nav" aria-label="管理功能">
          {nav.map(({ href, label, icon: Icon }) => (
            <Link key={href} to={href} onClick={() => setOpen(false)} className={`ops-nav-link ${pathname === href ? "is-active" : ""}`}>
              <Icon /> <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="ops-rail-footer">
          <button onClick={() => reset()} className="ops-rail-action"><RotateCcw className="size-4" /><span>重置資料</span></button>
          <button onClick={leave} className="ops-rail-action !text-[#ff9c68]"><LogOut className="size-4" /><span>退出登入</span></button>
        </div>
      </aside>
      {open && <button className="ops-mobile-mask lg:hidden" onClick={() => setOpen(false)} aria-label="關閉選單遮罩" />}
      <main className="ops-main">
        <header className="ops-header">
          <button onClick={() => setOpen(true)} className="ops-menu-button" aria-label="開啟選單"><Menu /></button>
          <div className="ops-title"><p>SHRIMP OPS / LIVE MODULE</p><h1>{title}</h1><p>{description}</p></div>
          <span className="ops-live">DEMO ONLINE</span>
          {action}
        </header>
        <nav className="ops-tabs" aria-label="快速模組導覽">
          {nav.map(({ href, label }) => (
            <Link key={href} to={href} className={`ops-tab ${pathname === href ? "is-active" : ""}`}>{label}</Link>
          ))}
        </nav>
        <div className="ops-content">{children}</div>
      </main>
    </div>
  );
}
