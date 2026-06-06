import {
  Home,
  Globe,
  BookOpen,
  Hand,
  Ticket,
  ScrollText,
  QrCode,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { userFlow } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stepIcons: LucideIcon[] = [
  Home,
  Globe,
  BookOpen,
  Hand,
  Ticket,
  ScrollText,
  QrCode,
  Heart,
];

export default function UserFlowSection() {
  return (
    <section
      id="flow"
      className="section-pad relative overflow-hidden bg-temple-radial"
    >
      <div className="absolute inset-0 thai-pattern opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-temple-red/30 blur-[130px]" />

      <div className="container-page relative">
        <SectionHeading
          dark
          eyebrow="ขั้นตอนการใช้งาน"
          title={<span className="text-temple-cream">ขั้นตอนการใช้งานสำหรับผู้ร่วมทำบุญ</span>}
          description={
            <span className="text-temple-cream/70">
              ออกแบบให้ใช้งานง่าย แตะไม่กี่ครั้งก็เสี่ยงเซียมซีและร่วมบริจาคได้
            </span>
          }
        />

        <div className="relative mx-auto mt-14 max-w-4xl">
          <span className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-temple-gold/10 via-temple-gold/50 to-temple-gold/10 lg:left-1/2" />

          <ul>
            {userFlow.map((step, i) => {
              const Icon = stepIcons[i] ?? Home;
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative pb-10 pl-16 last:pb-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-5 lg:pb-5 lg:pl-0"
                >
                  {/* โหนดหมายเลข */}
                  <span className="absolute left-6 top-0 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-2 border-temple-gold bg-temple-ink font-heading text-base font-bold text-temple-gold-soft shadow-gold lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                    {i + 1}
                  </span>

                  {/* การ์ดเนื้อหา */}
                  <Reveal
                    delay={i * 60}
                    className={
                      isLeft
                        ? "lg:col-start-1 lg:row-start-1 lg:pr-14 lg:text-right"
                        : "lg:col-start-2 lg:row-start-1 lg:pl-14 lg:text-left"
                    }
                  >
                    <div className="card-dark hover:border-temple-gold/50">
                      <div
                        className={`flex items-center gap-3 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-temple-gold/15 text-temple-gold-soft">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-heading text-lg font-semibold text-temple-cream">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-temple-cream/70">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
