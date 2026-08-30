import { PublicPage } from "@/components/public-page";
import { PointsList } from "@/features/member/points-list";

export default function PointsPage() {
  return (
    <PublicPage>
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:py-16">
        <p className="text-xs font-black tracking-[.18em] text-[#ff7a1a] uppercase">
          Points history
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-[-.04em]">
          積分收支紀錄
        </h1>
        <p className="mt-3 mb-7 text-sm text-[#776d82]">
          兩間釣蝦王分店的積分都會記錄在同一帳戶。
        </p>
        <PointsList />
      </section>
    </PublicPage>
  );
}
