import { AdminShell } from "@/components/admin-shell";
import { CampaignsSurface } from "@/features/admin-surfaces";

export default function CampaignsPage() {
  return (
    <AdminShell title="電郵推廣" description="預覽郵件內容並建立模擬發送記錄">
      <CampaignsSurface />
    </AdminShell>
  );
}
