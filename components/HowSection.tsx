import { Gift, QrCode, Vibrate } from "lucide-react";
import { steps, rewardUseCases } from "@/lib/site";
import Reveal from "./Reveal";

const icons = { qr: QrCode, shake: Vibrate, gift: Gift };
const tints = ["bg-pop-violet", "bg-pop-pink", "bg-pop-mint"];

export default function HowSection() {
  return (
    <section id="how" className="py-16 sm:py-20">
      <div className="container-page">
        <h2 className="heading-pop text-center">เล่นง่าย 3 ขั้นตอน</h2>

        <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal as="li" key={step.title} delay={i * 100}>
                <div className="flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(23,19,43,0.35)] sm:flex-col sm:p-7 sm:text-center">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${tints[i]}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-heading text-xl font-bold">
                      <span className="text-pop-ink/30">{i + 1}.</span> {step.title}
                    </p>
                    <p className="text-sm text-pop-ink/60">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-pop-ink/50">ใช้กับแคมเปญไหนได้บ้าง</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {rewardUseCases.map((u) => (
              <span key={u} className="chip">
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
