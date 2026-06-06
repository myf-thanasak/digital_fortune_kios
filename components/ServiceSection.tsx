import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServiceSection() {
  return (
    <section id="service" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          // eyebrow="บริการครบวงจร"
          title="บริการของเรา"
          description="ดูแลตั้งแต่ออกแบบ ติดตั้ง ไปจนถึงบริการหลังการขาย"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service} delay={i * 50}>
              <div className="flex items-center gap-3 rounded-2xl border border-temple-gold/20 bg-temple-cream p-5 transition-all hover:-translate-y-0.5 hover:border-temple-gold/50 hover:shadow-soft">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-temple-red" />
                <span className="text-sm font-medium text-temple-ink sm:text-base">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
