import { Clock3, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { PageIntro, PublicPage } from "@/components/public-page";
import { venues } from "@/lib/demo-data";

export default function VenuesPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Our venues"
        title={"觀塘、荔枝角，\n兩店同一份樂趣。"}
        description="會員、積分與優惠券兩店通用。以下公開門店資料須在正式上線前由客戶再次確認。"
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {venues.map((venue, index) => (
            <article
              key={venue.id}
              className="overflow-hidden rounded-[1.8rem] border border-[#302046]/10 bg-white shadow-sm"
            >
              <div
                className={`flex h-36 items-end justify-between p-6 text-white ${index === 0 ? "bg-[linear-gradient(135deg,#6d3df5,#936dff)]" : "bg-[linear-gradient(135deg,#ff7a1a,#ffb05f)]"}`}
              >
                <div>
                  <p className="text-xs font-bold tracking-[.16em] text-white/65 uppercase">
                    {venue.area}
                  </p>
                  <h2 className="mt-1 text-2xl font-black">{venue.name}</h2>
                </div>
                <span className="text-6xl font-black opacity-20">
                  0{index + 1}
                </span>
              </div>
              <div className="space-y-4 p-6">
                <p className="flex items-start gap-3 text-sm leading-6">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-[#6d3df5]" />
                  {venue.address}
                </p>
                <p className="flex items-start gap-3 text-sm leading-6">
                  <Clock3 className="mt-0.5 size-5 shrink-0 text-[#ff7a1a]" />
                  {venue.hours}
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Navigation className="size-5 shrink-0 text-[#6d3df5]" />
                  {venue.transport}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <a
                    href={`tel:${venue.contact.replace(/\s/g, "")}`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#6d3df5] text-sm font-bold text-white"
                  >
                    <Phone className="size-4" />
                    {venue.contact}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border text-sm font-bold"
                  >
                    <Navigation className="size-4" />
                    交通方式
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 rounded-2xl bg-[#fff2e5] p-4 text-sm leading-6 text-[#6f4327]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#ff7a1a]" />
          收費與營業資料來自客戶提供參考及公開資料；正式發布前須由客戶確認，最新收費請直接向門店查詢。
        </p>
      </section>
    </PublicPage>
  );
}
