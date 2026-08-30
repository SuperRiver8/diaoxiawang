import { Gift, Home, MapPin, PlaySquare, UserRound } from "lucide-react";

import { Link } from "@/components/app-link";

const items = [
  { href: "/" as const, label: "首頁", icon: Home },
  { href: "/venues" as const, label: "分店", icon: MapPin },
  { href: "/promotions" as const, label: "活動", icon: Gift },
  { href: "/videos" as const, label: "影片", icon: PlaySquare },
  { href: "/member" as const, label: "會員", icon: UserRound },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="流動版主要導覽"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2d2042]/10 bg-[#fffaf5]/95 px-2 pt-2 pb-[max(.45rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(45,32,66,.09)] backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-5">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold text-[#685d73] transition active:bg-[#eee8ff] active:text-[#6d3df5]"
          >
            <Icon className="size-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
