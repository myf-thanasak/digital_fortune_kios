import { BadgeCheck, FileText } from "lucide-react";
import { benefits, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function BenefitSection() {
  return (
    <section
      id="benefit"
      className="section-pad relative overflow-hidden bg-gradient-to-br from-temple-red-dark via-temple-red to-temple-ink"
    >
      <div className="absolute inset-0 thai-pattern opacity-30" />
      <div className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-temple-gold/20 blur-[120px]" />

      <div className="container-page relative">
        <SectionHeading
          dark
          eyebrow="คุณค่าที่ส่งมอบ"
          title={<span className="text-temple-cream">สิ่งที่องค์กรจะได้รับ</span>}
          description={
            <span className="text-temple-cream/75">
              ยกระดับจุดรับบริจาคให้ทันสมัย พร้อมเครื่องมือบริหารจัดการครบครัน
            </span>
          }
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-temple-gold/25 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10">
                <BadgeCheck className="h-7 w-7 shrink-0 text-temple-gold" />
                <span className="text-base font-medium text-temple-cream">
                  {b}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#contact" className="btn-primary">
            <FileText className="h-5 w-5" />
            {site.ctaPrimary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
