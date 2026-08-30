import {
  ArrowRight,
  Clock3,
  Gift,
  MapPin,
  Play,
  Sparkles,
  Star,
  TicketCheck,
} from "lucide-react";

import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SiteHeader } from "@/components/site-header";
import { Link } from "@/components/app-link";

const venues = [
  {
    name: "釣蝦王・觀塘店",
    tone: "bg-[#6d3df5] text-white",
    note: "觀塘站旁 · 資料待確認",
  },
  {
    name: "釣蝦王・荔枝角店",
    tone: "bg-[#ff7a1a] text-white",
    note: "兩店會員通用",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fff8f1] pb-24 text-[#2d2042] md:pb-0">
      <SiteHeader overlay />
      <main>
        <section className="relative isolate min-h-[670px] overflow-hidden bg-[#33214f] text-white md:min-h-[760px]">
          <img
            src="/brand/venue-preview.jpg"
            alt="釣蝦王室內釣蝦場"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-[58%_72%] opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,32,66,.22),rgba(45,32,66,.48)_35%,rgba(45,32,66,.98)_92%)] md:bg-[linear-gradient(90deg,rgba(45,32,66,.97),rgba(90,49,150,.72)_52%,rgba(45,32,66,.12))]" />
          <div className="wave-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto flex min-h-[670px] max-w-7xl items-end px-5 pt-28 pb-12 md:min-h-[760px] md:items-center md:px-10 lg:px-12">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold tracking-[.14em] text-[#ffbd78] backdrop-blur">
                <Sparkles className="size-4" /> 香港室內釣蝦體驗
              </div>
              <h1 className="text-[3.35rem] leading-[.98] font-black tracking-[-.055em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                今晚，
                <br />
                釣點不一樣。
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/75 sm:text-lg">
                城市裡的海浪、朋友間的挑戰，還有每次到訪都會累積的會員驚喜。
              </p>
              <div className="mt-7 flex gap-3">
                <Link
                  href="/venues"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#ff7a1a] px-5 font-bold shadow-[0_14px_35px_rgba(255,122,26,.35)] sm:flex-none"
                >
                  查看分店 <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/member"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-5 font-bold backdrop-blur sm:flex-none"
                >
                  會員登入
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-5 border-t border-white/15 pt-5 text-xs text-white/65 sm:text-sm">
                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-[#ffbd78]" /> 室內體驗
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#ffbd78]" /> 觀塘・荔枝角
                </span>
                <span className="flex items-center gap-2">
                  <Star className="size-4 text-[#ffbd78]" /> 會員積分
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 py-10 sm:px-8 md:-mt-20 md:py-16 lg:px-12">
          <div className="grid gap-4 md:grid-cols-[1.3fr_.7fr]">
            <article className="overflow-hidden rounded-[1.75rem] bg-[#eee8ff] p-6 shadow-[0_18px_50px_rgba(45,32,66,.12)] sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black tracking-[.18em] uppercase">
                    Member moment
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-.03em] sm:text-3xl">
                    每一竿，都儲到驚喜。
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#5f5370]">
                    登入會員中心，隨時查看積分、到訪紀錄與最新會員禮遇。
                  </p>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#6d3df5] text-white">
                  <TicketCheck />
                </span>
              </div>
              <Link
                href="/member"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#6d3df5] px-5 text-sm font-bold text-white"
              >
                開啟會員中心 <ArrowRight className="size-4" />
              </Link>
            </article>
            <article className="relative min-h-64 overflow-hidden rounded-[1.75rem] bg-[#2d2042] text-white shadow-[0_18px_50px_rgba(45,32,66,.12)]">
              <img
                src="/brand/venue-preview.jpg"
                alt="場館精彩影片預覽"
                className="absolute inset-0 h-full w-full object-cover object-[55%_72%] opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d2042] via-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-xs font-bold text-[#ffbd78]">本週精選</p>
                  <h2 className="mt-1 text-xl font-black">
                    一分鐘看懂釣蝦樂趣
                  </h2>
                </div>
                <Link
                  href="/videos"
                  aria-label="播放精選影片"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-[#ff7a1a]"
                >
                  <Play className="ml-0.5 size-5 fill-current" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-[.18em] text-[#ff7a1a] uppercase">
                Our venues
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-.04em]">
                揀一間，今晚出發。
              </h2>
            </div>
            <Link
              href="/venues"
              className="hidden text-sm font-bold md:inline-flex"
            >
              全部分店 →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {venues.map((venue, index) => (
              <Link
                key={venue.name}
                href="/venues"
                className={`${venue.tone} group flex min-h-44 flex-col justify-between rounded-[1.6rem] p-6 transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <MapPin className="size-6" />
                  <span className="text-5xl font-black opacity-20">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black">{venue.name}</h3>
                  <p className="mt-1 text-sm opacity-65">{venue.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#2d2042] px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold text-[#ffbd78]">
                <Gift className="size-4" /> 會員限定
              </p>
              <h2 className="mt-2 text-2xl font-black">新會員迎新積分獎賞</h2>
              <p className="mt-2 text-sm text-white/60">
                活動內容為前端演示資料，正式優惠待客戶確認。
              </p>
            </div>
            <Link
              href="/promotions"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#ff7a1a] px-6 font-bold text-white"
            >
              看看最新活動
            </Link>
          </div>
        </section>
      </main>
      <MobileBottomNav />
    </div>
  );
}
