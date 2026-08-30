"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import { videos } from "@/lib/demo-data";

export function VideoGallery() {
  const [active, setActive] = useState<(typeof videos)[number] | null>(null);
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setActive(video)}
            className="group overflow-hidden rounded-[1.6rem] bg-white text-left shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#2d2042]">
              <img
                src="/brand/venue-preview.jpg"
                alt=""
                className={`absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 ${index === 0 ? "object-[55%_72%]" : index === 1 ? "object-[65%_67%]" : "object-[45%_75%]"}`}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#2d2042]/80 to-transparent" />
              <span className="absolute right-4 bottom-4 grid size-12 place-items-center rounded-full bg-[#ff7a1a] text-white shadow-lg">
                <Play className="ml-0.5 size-5 fill-current" />
              </span>
              <span className="absolute bottom-5 left-5 rounded-full bg-black/35 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                {video.duration}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-[#6d3df5]">
                {video.category}
              </p>
              <h2 className="mt-2 text-lg font-black">{video.title}</h2>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}影片預覽`}
          className="fixed inset-0 z-50 grid place-items-center bg-[#1f142f]/85 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-[#2d2042] text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-xs text-[#ffad68]">演示影片預覽</p>
                <h2 className="font-black">{active.title}</h2>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="關閉影片"
                className="grid size-11 place-items-center rounded-full bg-white/10"
              >
                <X />
              </button>
            </div>
            <div className="relative aspect-video">
              <img
                src="/brand/venue-preview.jpg"
                alt="釣蝦王場館影片預覽"
                className="absolute inset-0 h-full w-full object-cover object-[55%_72%] opacity-65"
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-20 place-items-center rounded-full bg-[#ff7a1a]">
                  <Play className="ml-1 size-8 fill-current" />
                </span>
              </div>
            </div>
            <p className="p-5 text-sm text-white/60">
              正式影片素材提供後，可直接替換此演示播放器內容。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
