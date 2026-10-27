import { Check, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import { rewardPackage, otherPackages, lineMessageUrl, demoUrl } from "@/lib/site";
import Reveal from "./Reveal";

export default function PackageSection() {
  const pkg = rewardPackage;
  return (
    <section id="packages" className="py-16 sm:py-20">
      <div className="container-page">
        <h2 className="heading-pop text-center">แพ็กเกจ</h2>

        {/* The year-round package gets the big card. */}
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pop-violet via-[#8A4BFF] to-pop-pink p-7 text-white shadow-[0_30px_60px_-25px_rgba(108,71,255,0.8)] sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-pop-sun/40 blur-3xl" />
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              แนะนำ · ใช้ได้ทั้งปี
            </span>

            <div className="relative mt-4 grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="font-heading text-[1.6rem] font-bold sm:text-4xl">
                  {pkg.emoji} {pkg.name}
                </h3>
                <p className="mt-1 text-white/75">{pkg.audience}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-6xl font-bold">{pkg.price}</span>
                  <span className="text-white/75">{pkg.priceNote}</span>
                </p>
              </div>

              <ul className="space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pop-sun text-pop-ink">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                // Sends the exact keyword so LINE's auto-reply answers
                // with this package's order steps straight away.
                href={lineMessageUrl(pkg.lineKeyword)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                <MessageCircle className="h-5 w-5" />
                {pkg.cta}
              </a>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-white/40 text-white hover:bg-white/10"
              >
                <Smartphone className="h-5 w-5" />
                ลองเขย่าฟรี
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-12 text-center font-heading text-lg font-semibold text-pop-ink/60">
          เซียมซีสำหรับงานอื่น
        </p>
        <div className="mx-auto mt-4 grid max-w-4xl gap-4 sm:grid-cols-3">
          {otherPackages.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_10px_30px_-18px_rgba(23,19,43,0.35)]">
                <p className="text-3xl">{p.emoji}</p>
                <h3 className="mt-2 font-heading text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-pop-ink/55">{p.audience}</p>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-heading text-2xl font-bold text-pop-violet">{p.price}</span>
                  <span className="text-sm text-pop-ink/55">{p.priceNote}</span>
                </p>
                <ul className="mt-3 space-y-1 text-sm text-pop-ink/70">
                  {p.features.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
                {p.highlight ? (
                  <p className="mt-3 w-fit rounded-full bg-pop-sun/30 px-3 py-1 text-xs font-semibold">
                    🔥 {p.highlight}
                  </p>
                ) : null}
                <a
                  href={lineMessageUrl(p.lineKeyword)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 text-sm font-semibold text-pop-violet hover:text-pop-pink"
                >
                  {p.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
