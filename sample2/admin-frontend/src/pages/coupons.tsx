import { AdminShell } from "@/components/admin-shell";
import { CouponsSurface } from "@/features/admin-surfaces";

export default function CouponsPage() {
  return (
    <AdminShell title="優惠券管理" description="建立固定金額券及滿額抵扣券">
      <CouponsSurface />
    </AdminShell>
  );
}
