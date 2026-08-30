import {
  Bold,
  Italic,
  Link,
  List,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { useEffect, useRef } from "react";

const tools = [
  { command: "bold", label: "粗體", icon: Bold },
  { command: "italic", label: "斜體", icon: Italic },
  { command: "underline", label: "底線", icon: Underline },
  { command: "insertUnorderedList", label: "項目符號", icon: List },
  { command: "undo", label: "復原", icon: Undo2 },
  { command: "redo", label: "重做", icon: Redo2 },
];

export function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value)
      editorRef.current.innerHTML = value;
  }, [value]);
  const run = (command: string, argument?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, argument);
    onChange(editorRef.current?.innerHTML ?? "");
  };
  return (
    <div className="overflow-hidden rounded-xl border bg-white focus-within:border-[#6d3df5] focus-within:ring-3 focus-within:ring-[#6d3df5]/10">
      <div
        className="flex flex-wrap gap-1 border-b bg-[#f7f4f9] p-2"
        aria-label="郵件格式工具列"
      >
        {tools.map(({ command, label, icon: Icon }) => (
          <button
            key={command}
            type="button"
            onMouseDown={(event) => {
              event.preventDefault();
              run(command);
            }}
            className="grid size-9 place-items-center rounded-lg text-[#655a6f] hover:bg-white hover:text-[#6d3df5]"
            aria-label={label}
            title={label}
          >
            <Icon className="size-4" />
          </button>
        ))}
        <span className="mx-1 w-px bg-[#ddd5e3]" />
        <button
          type="button"
          onMouseDown={(event) => {
            event.preventDefault();
            const url = window.prompt("請輸入連結網址", "https://");
            if (url) run("createLink", url);
          }}
          className="grid size-9 place-items-center rounded-lg text-[#655a6f] hover:bg-white hover:text-[#6d3df5]"
          aria-label="加入連結"
          title="加入連結"
        >
          <Link className="size-4" />
        </button>
        <button
          type="button"
          onMouseDown={(event) => {
            event.preventDefault();
            run("formatBlock", "h2");
          }}
          className="min-h-9 rounded-lg px-2 text-xs font-black text-[#655a6f] hover:bg-white"
        >
          H2
        </button>
        <button
          type="button"
          onMouseDown={(event) => {
            event.preventDefault();
            run("formatBlock", "p");
          }}
          className="min-h-9 rounded-lg px-2 text-xs font-black text-[#655a6f] hover:bg-white"
        >
          正文
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-label="郵件內容"
        aria-multiline="true"
        data-placeholder="輸入推廣郵件內容及活動詳情"
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        className="rich-editor min-h-52 px-4 py-3 text-sm leading-7 outline-none"
      />
    </div>
  );
}
