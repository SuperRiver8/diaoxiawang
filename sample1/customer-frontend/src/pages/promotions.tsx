import { CalendarDays, Gift, Sparkles } from "lucide-react";
import { PageIntro, PublicPage } from "@/components/public-page";
import { promotions } from "@/lib/demo-data";

export default function PromotionsPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="What's on"
        title={"每次到訪，\n都有新鮮事。"}
        description="會員限定優惠、期間活動與兩店最新消息，一頁掌握。"
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {promotions.map((item, index) => (
            <article
              key={item.id}
              className={`flex min-h-72 flex-col rounded-[1.8rem] bg-gradient-to-br p-6 ${item.tone}`}
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white/15">
                {index === 0 ? <Gift /> : <Sparkles />}
              </span>
              <div className="mt-auto">
                <p className="text-xs font-bold tracking-[.14em] text-current/65 uppercase">
                  {item.category}
                </p>
                <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 opacity-75">
                  {item.description}
                </p>
                <p className="mt-5 flex items-center gap-2 text-xs font-bold opacity-65">
                  <CalendarDays className="size-4" />
                  {item.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
