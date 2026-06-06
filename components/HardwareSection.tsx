import { Monitor, Tv, Wrench, Info, type LucideIcon } from "lucide-react";
import { hardware, hardwareNote } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  kiosk: Monitor,
  signage: Tv,
  custom: Wrench,
};

export default function HardwareSection() {
  return (
    <section id="hardware" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="รูปแบบการติดตั้ง"
          title="รูปแบบการติดตั้ง"
          description="เลือกได้ตามพื้นที่และการใช้งานจริงของแต่ละสถานที่"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {hardware.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Monitor;
            return (
              <Reveal key={h.title} delay={i * 90}>
                <div className="card group flex h-full flex-col hover:-translate-y-1 hover:border-temple-gold/50 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-temple-red to-temple-red-dark text-temple-gold-soft shadow-card">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-heading text-3xl font-bold text-temple-gold/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-temple-ink">
                    {h.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-temple-ink/70">
                    {h.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-temple-red hover:text-temple-red-light"
                  >
                    สอบถามรูปแบบนี้
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex items-start justify-center gap-3 rounded-2xl border border-temple-gold/40 bg-white p-5 text-center sm:text-left">
            <Info className="mt-0.5 hidden h-5 w-5 shrink-0 text-temple-gold sm:block" />
            <p className="text-sm leading-relaxed text-temple-ink/75">
              {hardwareNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
