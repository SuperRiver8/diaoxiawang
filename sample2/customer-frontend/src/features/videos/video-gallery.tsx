import { Play, X } from "lucide-react";
import { useState } from "react";
import { videos } from "@/lib/demo-data";

export function VideoGallery() {
  const [active, setActive] = useState<(typeof videos)[number] | null>(null);
  return (
    <>
      <div className="video-ticket-list">
        {videos.map((video, index) => (
          <button key={video.id} onClick={() => setActive(video)} className="video-ticket">
            <span className="video-ticket-index">0{index + 1}</span>
            <img src="/brand/venue-preview.jpg" alt="" />
            <span className="video-ticket-copy"><span>{video.category} / {video.duration}</span><h2>{video.title}</h2></span>
            <span className="video-ticket-play"><Play className="size-5 fill-current" /></span>
          </button>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" aria-label={`${active.title}影片預覽`} className="fixed inset-0 z-50 grid place-items-center bg-[#090310]/90 p-4 backdrop-blur" onClick={() => setActive(null)}>
          <div className="w-full max-w-3xl overflow-hidden border border-white/20 bg-[#211238] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-dashed border-white/20 p-4">
              <div><p className="ticket-eyebrow">DEMO REEL</p><h2 className="mt-1 font-black">{active.title}</h2></div>
              <button onClick={() => setActive(null)} aria-label="關閉影片" className="grid size-11 place-items-center border border-white/15"><X /></button>
            </div>
            <div className="relative aspect-video"><img src="/brand/venue-preview.jpg" alt="釣蝦王場館影片預覽" className="absolute inset-0 h-full w-full object-cover object-[55%_72%] opacity-60" /><div className="absolute inset-0 grid place-items-center"><span className="grid size-20 place-items-center bg-[#ff6b1a]"><Play className="ml-1 size-8 fill-current" /></span></div></div>
            <p className="p-5 text-sm text-white/55">正式影片素材提供後，可直接替換此演示播放器內容。</p>
          </div>
        </div>
      )}
    </>
  );
}
