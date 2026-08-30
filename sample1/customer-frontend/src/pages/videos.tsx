import { PageIntro, PublicPage } from "@/components/public-page";
import { VideoGallery } from "@/features/videos/video-gallery";

export default function VideosPage() {
  return (
    <PublicPage>
      <PageIntro
        eyebrow="Watch & discover"
        title={"先睇一眼，\n再來親手挑戰。"}
        description="場館日常、新手技巧與朋友挑戰精華；目前使用前端演示播放器。"
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <VideoGallery />
      </section>
    </PublicPage>
  );
}
