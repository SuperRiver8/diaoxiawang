import { Clock3, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { PageIntro, PublicPage } from "@/components/public-page";
import { venues } from "@/lib/demo-data";

export default function VenuesPage() {
  return (
    <PublicPage>
      <PageIntro eyebrow="Our venues" title={"觀塘、荔枝角，\n兩張城市入場票。"} description="會員、積分與優惠券兩店通用。以下公開門店資料須在正式上線前由客戶再次確認。" />
      <section className="ticket-section">
        <div className="venue-ticket-grid">
          {venues.map((venue, index) => (
            <article key={venue.id} className="venue-ticket">
              <div className="venue-ticket-head">
                <div><p className="ticket-eyebrow !text-white/65">ZONE / {venue.area}</p><h2 className="mt-2 text-2xl font-black">{venue.name}</h2></div>
                <span className="font-mono text-5xl font-black text-white/20">0{index + 1}</span>
              </div>
              <div className="venue-ticket-body">
                <p className="venue-ticket-row"><MapPin />{venue.address}</p>
                <p className="venue-ticket-row"><Clock3 />{venue.hours}</p>
                <p className="venue-ticket-row"><Navigation />{venue.transport}</p>
                <div className="venue-ticket-actions">
                  <a href={`tel:${venue.contact.replace(/\s/g, "")}`} className="ticket-action-primary"><Phone className="size-4" />{venue.contact}</a>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`} target="_blank" rel="noreferrer" className="ticket-action-secondary"><Navigation className="size-4" />交通方式</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-3 border border-[#ff6b1a]/35 bg-[#ff6b1a]/10 p-4 text-sm leading-6 text-[#ffd1b5]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#ff8c4a]" />收費與營業資料來自客戶提供參考及公開資料；正式發布前須由客戶確認，最新收費請直接向門店查詢。
        </p>
      </section>
    </PublicPage>
  );
}
