import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PublicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="concept-two min-h-screen pb-20 md:pb-0">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-inner">
        <p className="ticket-eyebrow">{eyebrow} / ENTRY PASS</p>
        <h1 className="whitespace-pre-line">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
