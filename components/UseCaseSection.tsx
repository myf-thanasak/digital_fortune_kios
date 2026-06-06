import {
  Landmark,
  Building2,
  HeartHandshake,
  HandCoins,
  PartyPopper,
  Camera,
  Store,
  type LucideIcon,
} from "lucide-react";
import { useCases } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  temple: Landmark,
  shrine: Building2,
  foundation: HeartHandshake,
  donate: HandCoins,
  festival: PartyPopper,
  culture: Camera,
  mall: Store,
};

export default function UseCaseSection() {
  return (
    <section id="usecase" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="กลุ่มเป้าหมาย"
          title="เหมาะสำหรับใคร"
          description="ออกแบบมาให้ปรับใช้ได้กับหลากหลายสถานที่ที่มีจุดทำบุญหรือรับบริจาค"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {useCases.map((uc, i) => {
            const Icon = iconMap[uc.icon] ?? Landmark;
            return (
              <Reveal
                key={uc.label}
                delay={i * 60}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.94rem)]"
              >
                <div className="card group flex h-full flex-col items-center gap-4 text-center hover:-translate-y-1 hover:border-temple-gold/50 hover:shadow-card">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-temple-red to-temple-red-dark text-temple-gold-soft shadow-card transition-transform group-hover:scale-105">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="font-heading text-base font-semibold text-temple-ink">
                    {uc.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
