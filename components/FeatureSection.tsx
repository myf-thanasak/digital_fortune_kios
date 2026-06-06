import {
  Hand,
  QrCode,
  Languages,
  SquarePen,
  Palette,
  BarChart3,
  Info,
  type LucideIcon,
} from "lucide-react";
import { features, featureNote } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  hand: Hand,
  qr: QrCode,
  languages: Languages,
  edit: SquarePen,
  palette: Palette,
  chart: BarChart3,
};

export default function FeatureSection() {
  return (
    <section id="features" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          // eyebrow="ฟีเจอร์หลัก"
          title="สิ่งที่จะได้รับ"
          // description="ครบทุกฟังก์ชันที่จำเป็น สำหรับจุดเสี่ยงเซียมซีและรับบริจาคในที่เดียว"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Hand;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card group h-full hover:-translate-y-1 hover:border-temple-gold/50 hover:shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-temple-gold/20 to-temple-gold/5 text-temple-red transition-colors group-hover:from-temple-red group-hover:to-temple-red-dark group-hover:text-temple-gold-soft">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-temple-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-temple-ink/70">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* <Reveal className="mt-8">
          <div className="flex items-start gap-3 rounded-2xl border border-temple-gold/40 bg-temple-gold/10 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-temple-red" />
            <p className="text-sm leading-relaxed text-temple-ink/80">
              <span className="font-semibold text-temple-red">หมายเหตุสำคัญ: </span>
              {featureNote}
            </p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
