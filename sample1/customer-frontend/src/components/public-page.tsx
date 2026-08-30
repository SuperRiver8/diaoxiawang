import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

export function PublicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen pb-20 md:pb-0">
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
    <section className="bg-[linear-gradient(135deg,#33214f,#6d3df5)] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#ffbd78] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-black tracking-[-0.03em] whitespace-pre-line sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
          {description}
        </p>
      </div>
    </section>
  );
}
