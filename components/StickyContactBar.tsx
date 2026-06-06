import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

// แถบติดต่อแบบ Sticky ด้านล่างจอ — แสดงเฉพาะมือถือ/แท็บเล็ตเล็ก
export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-temple-gold/30 bg-temple-ink/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={`tel:${site.phoneRaw}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-temple-red px-4 py-3 text-sm font-semibold text-white active:scale-[0.98]"
        >
          <Phone className="h-4 w-4" />
          โทรสอบถาม
        </a>
        <a
          href={site.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#06C755] px-4 py-3 text-sm font-semibold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          แชต LINE
        </a>
      </div>
    </div>
  );
}
