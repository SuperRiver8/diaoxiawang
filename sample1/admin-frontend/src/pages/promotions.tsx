import { AdminShell } from "@/components/admin-shell";
import { PromotionsSurface } from "@/features/admin-surfaces";

export default function PromotionsPage() {
  return (
    <AdminShell title="宣傳內容" description="建立、發布及下架顧客端宣傳活動">
      <PromotionsSurface />
    </AdminShell>
  );
}
