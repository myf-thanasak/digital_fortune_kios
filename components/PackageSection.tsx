import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { packages, lineMessageUrl } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function PackageSection() {
  return (
    <section id="packages" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="แพ็กเกจและราคา"
          title="เลือกแพ็กเกจที่เหมาะกับคุณ"
          description="ราคาชัดเจน เริ่มใช้งานได้เร็ว กดปุ่มเพื่อคุยกับทีมงานผ่าน LINE ได้ทันที"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 100} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-8 ${
                  pkg.featured
                    ? "border-temple-gold bg-temple-ink text-temple-cream shadow-gold"
                    : "border-temple-gold/30 bg-white text-temple-ink shadow-soft"
                }`}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-temple-gold to-temple-gold-light px-4 py-1 text-xs font-semibold text-temple-ink">
                    ยอดนิยม
                  </span>
                ) : null}

                <h3 className="font-heading text-xl font-bold sm:text-2xl">
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    pkg.featured ? "text-temple-cream/60" : "text-temple-ink/60"
                  }`}
                >
                  {pkg.audience}
                </p>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-2">
                  <span
                    className={`whitespace-nowrap font-heading text-3xl font-bold sm:text-4xl ${
                      pkg.featured ? "gold-text" : "text-temple-red"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.featured ? "text-temple-cream/60" : "text-temple-ink/60"
                    }`}
                  >
                    {pkg.priceNote}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm sm:text-base">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          pkg.featured ? "text-temple-gold" : "text-temple-red"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {pkg.highlight ? (
                  <p className="mt-6 flex items-start gap-2 rounded-2xl border border-temple-gold/40 bg-temple-gold/10 px-4 py-3 text-sm font-medium text-temple-red">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                    {pkg.highlight}
                  </p>
                ) : null}

                <div className="mt-auto pt-6">
                  <a
                    // Sends the exact keyword so LINE's auto-reply answers
                    // with this package's order steps straight away.
                    href={lineMessageUrl(pkg.lineKeyword)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line w-full"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    {pkg.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
