import { Inbox, Zap, ReceiptText, MonitorOff } from "lucide-react";
import { problems } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = [Inbox, Zap, ReceiptText, MonitorOff];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="ปัญหาที่พบบ่อย"
          title="ปัญหาของจุดรับบริจาคแบบเดิม"
          description="จุดทำบุญแบบเดิมอาจยังไม่ตอบโจทย์ผู้ทำบุญยุคใหม่ และสร้างประสบการณ์ได้ไม่เต็มที่"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((text, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={text} delay={i * 80}>
                <div className="card h-full hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-temple-red/10 text-temple-red">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-heading text-3xl font-bold text-temple-red/15">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-base font-medium leading-relaxed text-temple-ink/85">
                    {text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
