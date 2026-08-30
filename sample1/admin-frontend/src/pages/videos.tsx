import { AdminShell } from "@/components/admin-shell";
import { VideosSurface } from "@/features/admin-surfaces";

export default function VideosPage() {
  return (
    <AdminShell title="影片管理" description="模擬上載影片並管理發布狀態">
      <VideosSurface />
    </AdminShell>
  );
}
