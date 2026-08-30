import { ArrowDownLeft, Gift } from "lucide-react";
import { pointTransactions } from "@/lib/demo-data";

export function PointsList() {
  return (
    <div className="space-y-3">
      {pointTransactions.map((item) => (
        <article
          key={item.id}
          className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
        >
          <span
            className={`grid size-11 place-items-center rounded-xl ${item.points > 0 ? "bg-[#eee8ff] text-[#6d3df5]" : "bg-[#fff0e3] text-[#ff7a1a]"}`}
          >
            {item.points > 0 ? (
              <ArrowDownLeft className="size-5" />
            ) : (
              <Gift className="size-5" />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold">{item.label}</h2>
            <p className="mt-1 text-xs text-[#8a8092]">
              {item.date} · {item.venue}
            </p>
          </div>
          <p
            className={`text-lg font-black ${item.points > 0 ? "text-[#6d3df5]" : "text-[#ff7a1a]"}`}
          >
            {item.points > 0 ? "+" : ""}
            {item.points}
          </p>
        </article>
      ))}
    </div>
  );
}
