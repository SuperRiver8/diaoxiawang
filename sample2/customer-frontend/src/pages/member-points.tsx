import { PublicPage } from "@/components/public-page";
import { PointsList } from "@/features/member/points-list";

export default function PointsPage() {
  return (
    <PublicPage>
      <section className="member-zone">
        <p className="ticket-eyebrow">
          Points history
        </p>
        <h1>
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
