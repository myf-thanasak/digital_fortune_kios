import { MessageCircle, Smartphone } from "lucide-react";
import { rewardDemoUrl, lineMessageUrl, rewardPackage } from "@/lib/site";

// แถบปุ่มด้านล่างจอ — แสดงเฉพาะมือถือ
export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 p-2.5 shadow-[0_-8px_24px_-16px_rgba(23,19,43,0.4)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={rewardDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pop !py-3 text-sm"
        >
          <Smartphone className="h-4 w-4" />
          ลองเขย่าฟรี
        </a>
        <a
          href={lineMessageUrl(rewardPackage.lineKeyword)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line !py-3 text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          ทัก LINE
        </a>
      </div>
    </div>
  );
}
