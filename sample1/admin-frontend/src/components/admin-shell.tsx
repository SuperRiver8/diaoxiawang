"use client";

import {
  BarChart3,
  Gift,
  LogOut,
  Mail,
  Menu,
  PlaySquare,
  RotateCcw,
  UsersRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
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

export function AdminShell({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  action?: React.ReactNode;
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
  useEffect(() => {
    if (hydrated && !authenticated) navigate("/login", { replace: true });
  }, [hydrated, authenticated, navigate]);
  if (!hydrated || !authenticated)
    return (
      <div className="grid min-h-screen place-items-center text-sm text-[#7a7084]">
        正在載入管理中心…
      </div>
    );
  const leave = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[250px_1fr]">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[270px] bg-[#2d2042] p-5 text-white transition-transform lg:static lg:w-auto lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-3">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white shadow-sm">
                <img
                  src="/brand/shrimp-fishing-logo.jpg"
                  alt=""
                  className="h-full w-full scale-[1.55] object-cover object-[50%_43%]"
                />
              </span>
              <span>
                <strong className="block tracking-[.1em]">釣蝦王</strong>
                <small className="text-white/45">營運管理中心</small>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center lg:hidden"
              aria-label="關閉選單"
            >
              <X />
            </button>
          </div>
          <nav className="mt-9 space-y-1">
            {nav.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold transition ${pathname === href ? "bg-[#6d3df5] text-white" : "text-white/55 hover:bg-white/8 hover:text-white"}`}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
            <button
              onClick={() => reset()}
              className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-bold text-white/55 hover:bg-white/8 hover:text-white"
            >
              <RotateCcw className="size-4" />
              重置演示資料
            </button>
            <button
              onClick={leave}
              className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-bold text-[#ffae72] hover:bg-white/8"
            >
              <LogOut className="size-4" />
              退出登入
            </button>
          </div>
        </div>
      </aside>
      {open && (
        <button
          className="fixed inset-0 z-30 bg-black/35 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="關閉選單遮罩"
        />
      )}
      <main className="min-w-0">
        <header className="sticky top-0 z-20 flex min-h-[76px] items-center gap-4 border-b bg-[#f8f6fb]/90 px-5 backdrop-blur sm:px-8">
          <button
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-xl border bg-white lg:hidden"
            aria-label="開啟選單"
          >
            <Menu />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-black tracking-[-.02em]">
              {title}
            </h1>
            <p className="truncate text-xs text-[#7a7084]">{description}</p>
          </div>
          {action}
        </header>
        <div className="p-5 sm:p-8">{children}</div>
      </main>
    </div>
  );
}
