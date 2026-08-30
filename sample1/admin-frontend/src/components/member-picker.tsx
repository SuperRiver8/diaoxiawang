import { Check, Search, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";

import type { Member } from "@/lib/types";

export function MemberPicker({
  members,
  selectedIds,
  onChange,
  label = "發送對象",
}: {
  members: Member[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  label?: string;
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      [...members]
        .sort((a, b) => b.joinedAt.localeCompare(a.joinedAt))
        .filter((member) =>
          `${member.name}${member.email}${member.phone}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
        ),
    [members, query],
  );
  const activeIds = members
    .filter((member) => member.status === "active")
    .map((member) => member.id);
  const toggle = (id: string) =>
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((item) => item !== id)
        : [...selectedIds, id],
    );

  return (
    <div className="rounded-xl border bg-[#faf8fc] p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="admin-label mb-0 flex items-center gap-2">
          <UsersRound className="size-4 text-[#6d3df5]" />
          {label}
        </p>
        <span className="rounded-full bg-[#eee8ff] px-2.5 py-1 text-xs font-bold text-[#6d3df5]">
          已選 {selectedIds.length} 位
        </span>
      </div>
      <div className="relative mt-3">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#91879a]" />
        <input
          className="admin-input admin-input-with-icon"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜尋姓名、電郵或電話"
          aria-label={`${label}搜尋`}
        />
      </div>
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={() => onChange(activeIds)}
          className="min-h-9 rounded-lg border bg-white px-3 text-xs font-bold text-[#6d3df5]"
        >
          全選活躍會員
        </button>
        <button
          type="button"
          onClick={() => onChange([])}
          className="min-h-9 rounded-lg px-3 text-xs font-bold text-[#786e81]"
        >
          清除
        </button>
      </div>
      <div className="mt-3 max-h-52 space-y-2 overflow-y-auto pr-1">
        {filtered.map((member) => {
          const checked = selectedIds.includes(member.id);
          return (
            <label
              key={member.id}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${checked ? "border-[#6d3df5]/35 bg-[#f1ecff]" : "bg-white hover:border-[#6d3df5]/25"}`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(member.id)}
                className="peer sr-only"
                aria-label={`選擇 ${member.name}`}
              />
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-md border ${checked ? "border-[#6d3df5] bg-[#6d3df5] text-white" : "bg-white text-transparent"}`}
              >
                <Check className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block truncate text-sm">
                  {member.name}
                </strong>
                <span className="mt-0.5 block truncate text-xs text-[#91879a]">
                  {member.email} · {member.points}分
                </span>
              </span>
              {member.status !== "active" && (
                <span className="text-[10px] font-bold text-[#9a91a2]">
                  停用
                </span>
              )}
            </label>
          );
        })}
        {!filtered.length && (
          <p className="py-6 text-center text-xs text-[#91879a]">
            沒有符合條件的會員
          </p>
        )}
      </div>
    </div>
  );
}
