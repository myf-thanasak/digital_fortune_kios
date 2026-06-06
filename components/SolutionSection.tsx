import Image from "next/image";
import { ChevronRight, Hand, Globe, Sparkles, ScrollText, QrCode, Heart } from "lucide-react";
import { solution } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import flowAdminImg from "@/public/ditital-เซียมซี-flow-admin.webp";

const flowIcons = [Hand, Globe, Sparkles, ScrollText, QrCode, Heart];

export default function SolutionSection() {
  return (
    <section id="solution" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          // eyebrow="โซลูชันของเรา"
          title={solution.title}
          description={solution.description}
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-temple-gold/25 bg-temple-cream p-6 shadow-soft sm:p-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-temple-gold">
              ขั้นตอนการใช้งานดิจิทัลเซียมซี
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between">
              {solution.flow.map((step, i) => {
                const Icon = flowIcons[i] ?? Sparkles;
                return (
                  <div
                    key={step}
                    className="flex items-center gap-3 lg:flex-1 lg:flex-col lg:gap-2 lg:text-center"
                  >
                    <div className="flex items-center gap-3 lg:flex-col">
                      <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-temple-red to-temple-red-dark text-temple-gold-soft shadow-card">
                        <Icon className="h-6 w-6" />
                        <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-temple-gold text-xs font-bold text-temple-ink">
                          {i + 1}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-temple-ink lg:mt-1">
                        {step}
                      </span>
                    </div>
                    {i < solution.flow.length - 1 ? (
                      <ChevronRight className="ml-auto hidden h-5 w-5 shrink-0 text-temple-gold lg:block" />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-temple-gold/20 pt-8">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-temple-gold">
                แผนผังการทำงานของระบบทั้งหมด
              </p>
              <a
                href={flowAdminImg.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mt-5 block max-w-3xl overflow-hidden rounded-2xl border border-temple-gold/30 bg-white shadow-soft transition-shadow hover:shadow-card"
              >
                <Image
                  src={flowAdminImg}
                  alt="แผนผังขั้นตอนการทำงานของระบบ ดิจิทัลเซียมซี ทั้ง User Flow และ Admin Flow"
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 768px"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </a>
              <p className="mt-3 text-center text-xs text-temple-ink/50">
                แตะที่ภาพเพื่อดูขนาดเต็ม
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
