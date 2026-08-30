import { PublicPage } from "@/components/public-page";
import { MemberDashboard } from "@/features/member/member-dashboard";

export default function MemberPage() {
  return (
    <PublicPage>
      <section className="member-zone">
        <p className="ticket-eyebrow">
          Member club
        </p>
        <h1>
          我的會員中心
        </h1>
        <MemberDashboard />
      </section>
    </PublicPage>
  );
}
