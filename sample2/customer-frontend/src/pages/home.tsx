import { ArrowRight, Gift, MapPin, Play, Sparkles, TicketCheck } from "lucide-react";

import { Link } from "@/components/app-link";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const venues = [
  { number: "01", name: "觀塘店", note: "東九龍夜場據點", tone: "ticket-card-purple" },
  { number: "02", name: "荔枝角店", note: "兩店會員權益通用", tone: "ticket-card-orange" },
];

export default function HomePage() {
  return (
    <div className="concept-two ticket-home">
      <SiteHeader />
      <main>
        <section className="ticket-hero">
          <div className="ticket-hero-frame">
            <span className="ticket-number">NO. 026</span>
            <span className="ticket-perf" />
            <div className="ticket-hero-copy">
              <p className="ticket-eyebrow">CITY NIGHT PLAY / ADMIT TWO</p>
              <h1>
                今晚開竿<span>玩到盡。</span>
              </h1>
              <p>一張城市入場票，集合釣蝦挑戰、朋友聚會與兩店通用會員驚喜。</p>
              <div className="ticket-hero-actions">
                <Link href="/venues" className="ticket-action-primary">
                  揀選分店 <ArrowRight className="size-4" />
                </Link>
                <Link href="/member" className="ticket-action-secondary">
                  <TicketCheck className="size-4" /> 開啟會員證
                </Link>
              </div>
              <div className="ticket-strip" aria-label="體驗特色">
                <span>VENUES<strong>觀塘 / 荔枝角</strong></span>
                <span>ACCESS<strong>室內夜間體驗</strong></span>
                <span>REWARDS<strong>會員積分通用</strong></span>
              </div>
            </div>
            <div className="ticket-hero-media">
              <img src="/brand/venue-preview.jpg" alt="釣蝦王室內釣蝦場" />
            </div>
          </div>
        </section>

        <section className="ticket-section">
          <div className="ticket-section-head">
            <div>
              <p className="ticket-eyebrow">TONIGHT'S PICKS</p>
              <h2>入場前，先揀好玩法。</h2>
            </div>
          </div>
          <div className="ticket-feature">
            <article className="ticket-card ticket-card-purple">
              <div className="ticket-card-content">
                <span className="ticket-index">MEMBER / 01</span>
                <Sparkles className="mt-7 size-9" />
                <h3>每一竿，都儲到驚喜。</h3>
                <p className="mt-3 !text-white/70">登入查看積分、到訪紀錄及兩店通用優惠券。</p>
                <Link href="/member" className="ticket-action-secondary mt-7">會員中心 <ArrowRight className="size-4" /></Link>
              </div>
            </article>
            <article className="ticket-card ticket-feature-media">
              <img src="/brand/venue-preview.jpg" alt="場館精彩影片預覽" />
              <div className="ticket-card-content">
                <span className="ticket-index">WEEKLY REEL / 02</span>
                <h3>一分鐘看懂釣蝦樂趣</h3>
                <Link href="/videos" className="ticket-action-primary mt-5" aria-label="播放精選影片">
                  <Play className="size-4 fill-current" /> 播放預覽
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="ticket-section pt-0">
          <div className="ticket-section-head">
            <div>
              <p className="ticket-eyebrow">VENUE TICKETS</p>
              <h2>兩個據點，同一張會員證。</h2>
            </div>
            <Link href="/venues" className="ticket-nav-link hidden sm:inline-flex">全部資料 →</Link>
          </div>
          <div className="ticket-card-grid sm:!grid-cols-2">
            {venues.map((venue) => (
              <Link key={venue.number} href="/venues" className={`ticket-card ${venue.tone}`}>
                <div className="ticket-card-content">
                  <div className="flex items-start justify-between">
                    <MapPin className="size-6" />
                    <span className="font-mono text-5xl font-black text-white/20">{venue.number}</span>
                  </div>
                  <h3>{venue.name}</h3>
                  <p className="mt-2 !text-white/70">{venue.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#ff6b1a] px-5 py-10 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs font-black tracking-[.16em]"><Gift className="size-4" /> MEMBER DROP</p>
              <h2 className="mt-2 text-2xl font-black">新會員迎新積分獎賞</h2>
              <p className="mt-2 text-sm text-white/75">活動內容為前端演示資料，正式優惠待客戶確認。</p>
            </div>
            <Link href="/promotions" className="ticket-action-secondary shrink-0">查看本期活動</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}
