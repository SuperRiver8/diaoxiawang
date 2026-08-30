import { UserRound } from "lucide-react";

import { Link } from "@/components/app-link";
import { cn } from "@/lib/utils";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const links = [
    { href: "/venues", label: "分店" },
    { href: "/promotions", label: "活動" },
    { href: "/videos", label: "影片" },
  ];
  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-30 border-b border-white/10 text-white",
        overlay
          ? "absolute bg-gradient-to-b from-[#2d2042]/90 to-transparent"
          : "relative bg-[#2d2042]",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3"
          aria-label="釣蝦王首頁"
        >
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-lg">
            <img
              src="/brand/shrimp-fishing-logo.jpg"
              alt=""
              className="h-full w-full scale-[1.55] object-cover object-[50%_43%]"
            />
          </span>
          <span>
            <strong className="block text-base leading-none tracking-[.1em]">
              釣蝦王
            </strong>
            <span className="mt-1 block text-[9px] font-bold tracking-[.18em] text-white/55">
              SHRIMP FISHING
            </span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm font-bold md:flex"
          aria-label="主要導覽"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/member"
          aria-label="會員中心"
          className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 md:flex md:w-auto md:gap-2 md:rounded-xl md:px-4 md:text-sm md:font-bold"
        >
          <UserRound className="size-5" />
          <span className="hidden md:inline">會員中心</span>
        </Link>
      </div>
    </header>
  );
}
