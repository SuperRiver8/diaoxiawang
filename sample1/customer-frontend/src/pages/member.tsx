import { PublicPage } from "@/components/public-page";
import { MemberDashboard } from "@/features/member/member-dashboard";

export default function MemberPage() {
  return (
    <PublicPage>
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:py-16">
        <p className="text-xs font-black tracking-[.18em] text-[#ff7a1a] uppercase">
          Member club
        </p>
        <h1 className="mt-2 mb-7 text-3xl font-black tracking-[-.04em]">
          我的會員中心
        </h1>
        <MemberDashboard />
      </section>
    </PublicPage>
  );
}
