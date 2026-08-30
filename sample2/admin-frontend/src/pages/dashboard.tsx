import { AdminShell } from "@/components/admin-shell";
import { DashboardSurface } from "@/features/admin-surfaces";

export default function DashboardPage() {
  return (
    <AdminShell title="營運總覽" description="兩間分店的會員及宣傳數據摘要">
      <DashboardSurface />
    </AdminShell>
  );
}
