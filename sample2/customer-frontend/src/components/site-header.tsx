import { TicketCheck, UserRound } from "lucide-react";
import { useLocation } from "react-router-dom";

import { Link } from "@/components/app-link";

const links = [
  { href: "/venues", label: "分店" },
  { href: "/promotions", label: "活動" },
  { href: "/videos", label: "影片" },
];

export function SiteHeader() {
  const pathname = useLocation().pathname;
  return (
    <header className="ticket-header">
      <div className="ticket-header-inner">
        <Link href="/" className="ticket-brand" aria-label="釣蝦王首頁">
          <span className="ticket-logo">
            <img src="/brand/shrimp-fishing-logo.jpg" alt="" />
          </span>
          <span className="ticket-wordmark">
            <strong>釣蝦王</strong>
            <span>SHRIMP FISHING / HONG KONG</span>
          </span>
        </Link>
        <nav className="ticket-desktop-nav" aria-label="主要導覽">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`ticket-nav-link ${pathname === link.href ? "is-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/member" className="ticket-member-link">
          {pathname.startsWith("/member") ? <TicketCheck className="size-4" /> : <UserRound className="size-4" />}
          <span className="hidden sm:inline">會員通行證</span>
        </Link>
      </div>
    </header>
  );
}
