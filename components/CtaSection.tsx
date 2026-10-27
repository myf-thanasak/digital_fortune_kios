import { MessageCircle, Phone } from "lucide-react";
import { site, lineMessageUrl, rewardPackage } from "@/lib/site";

export default function CtaSection() {
  return (
    <section id="contact" className="pb-16 sm:pb-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-pop-ink px-6 py-12 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-pop-violet/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-pop-pink/40 blur-3xl" />
          <h2 className="heading-pop relative">
            ให้ลูกค้า<span className="text-pop-sun">เขย่า</span>ที่ร้านคุณ
          </h2>
          <p className="relative mt-3 text-white/70">ทัก LINE ได้ลิงก์ทดลองใน 3 วันทำการ</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={lineMessageUrl(rewardPackage.lineKeyword)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line"
            >
              <MessageCircle className="h-5 w-5" />
              ทัก LINE {site.lineId}
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn border-2 border-white/25 text-white hover:bg-white/10">
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
