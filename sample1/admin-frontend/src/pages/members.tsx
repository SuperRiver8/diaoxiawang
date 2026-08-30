import { AdminShell } from "@/components/admin-shell";
import { MembersSurface } from "@/features/admin-surfaces";

export default function MembersPage() {
  return (
    <AdminShell title="會員管理" description="搜尋會員、查看狀態及手動建立會員">
      <MembersSurface />
    </AdminShell>
  );
}
