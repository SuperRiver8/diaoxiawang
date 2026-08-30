import { Gift, Home, MapPin, PlaySquare, UserRound } from "lucide-react";
import { useLocation } from "react-router-dom";

import { Link } from "@/components/app-link";

const items = [
  { href: "/", label: "首頁", icon: Home },
  { href: "/venues", label: "分店", icon: MapPin },
  { href: "/promotions", label: "活動", icon: Gift },
  { href: "/videos", label: "影片", icon: PlaySquare },
  { href: "/member", label: "會員", icon: UserRound },
];

export function MobileBottomNav() {
  const pathname = useLocation().pathname;
  return (
    <nav aria-label="流動版主要導覽" className="ticket-mobile-nav">
      {items.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={`ticket-mobile-link ${active ? "is-active" : ""}`}>
            <Icon className="size-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
