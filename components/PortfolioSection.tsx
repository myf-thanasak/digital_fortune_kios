import { ArrowUpRight } from "lucide-react";
import { clientWorks, portfolioUrl } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function PortfolioSection() {
  return (
    <section id="works" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="ผลงานจริง"
          title="ได้รับความไว้วางใจจากสถานที่ชั้นนำ"
          description="ดิจิทัลเซียมซีของเราเคยติดตั้งและใช้งานจริงในงานเหล่านี้"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {clientWorks.map((w, i) => (
            <Reveal key={w.name} delay={i * 80} className="h-full">
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[7rem] flex-col items-center justify-center rounded-2xl border border-temple-gold/25 bg-temple-cream p-5 text-center transition-all hover:-translate-y-0.5 hover:border-temple-gold/60 hover:shadow-soft"
              >
                <span className="font-heading text-base font-semibold text-temple-ink sm:text-lg">
                  {w.name}
                </span>
                {w.note ? (
                  <span className="mt-1 text-xs text-temple-ink/60 sm:text-sm">
                    {w.note}
                  </span>
                ) : null}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-temple-red hover:text-temple-red-light"
          >
            ดูรีวิวผลงานทั้งหมด
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
