import { CalendarDays, Gift, Sparkles } from "lucide-react";
import { PageIntro, PublicPage } from "@/components/public-page";
import { promotions } from "@/lib/demo-data";

export default function PromotionsPage() {
  return (
    <PublicPage>
      <PageIntro eyebrow="What's on" title={"每次到訪，\n都有一張新票。"} description="會員限定優惠、期間活動與兩店最新消息，一頁掌握。" />
      <section className="ticket-section">
        <div className="promo-ticket-grid">
          {promotions.map((item, index) => (
            <article key={item.id} className="promo-ticket">
              <div className="promo-ticket-main">
                <p className="ticket-eyebrow">{item.category}</p>
                <h2>{item.title}</h2>
                <p className="mt-3">{item.description}</p>
                <p className="mt-5 flex items-center gap-2 !text-[#ffb15c]"><CalendarDays className="size-4" />{item.period}</p>
              </div>
              <div className="promo-ticket-stub">
                {index === 0 ? <Gift /> : <Sparkles />}
                <strong>MEMBER<br />PASS 0{index + 1}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PublicPage>
  );
}
