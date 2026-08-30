import { AdminShell } from "@/components/admin-shell";
import { PointsSurface } from "@/features/admin-surfaces";

export default function PointsPage() {
  return (
    <AdminShell title="積分管理" description="為指定會員發放或扣除兩店通用積分">
      <PointsSurface />
    </AdminShell>
  );
}
