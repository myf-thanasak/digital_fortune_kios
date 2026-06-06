import Image from "next/image";
import { FileText, PlayCircle, Sparkles } from "lucide-react";
import { hero, site } from "@/lib/site";
import Reveal from "./Reveal";
import kioskImg from "@/public/kios55_L.webp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-temple-radial pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      <div className="absolute inset-0 thai-pattern opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-temple-red/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-temple-gold/20 blur-[120px]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <Reveal className="text-center lg:text-left">
          <span className="eyebrow-dark mx-auto lg:mx-0">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </span>

          <h1 className="heading-xl mt-6 text-temple-cream">
            Digital <span className="gold-text">เซียมซี</span>
          </h1>

          <p className="mt-5 font-heading text-xl font-medium text-temple-gold-soft sm:text-2xl">
            {hero.subtitle}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-temple-cream/75 sm:text-lg lg:mx-0">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a href="#contact" className="btn-primary">
              <FileText className="h-5 w-5" />
              {site.ctaPrimary}
            </a>
            <a href="#flow" className="btn-outline-gold">
              <PlayCircle className="h-5 w-5" />
              {site.ctaSecondary}
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-temple-gold/20 pt-6">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="font-heading text-2xl font-bold gold-text sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-temple-cream/60 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-temple-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-10 bottom-3 -z-10 h-16 rounded-[50%] bg-black/50 blur-2xl" />
            <Image
              src={kioskImg}
              alt="ตู้ Digital เซียมซี ขนาด 55 นิ้ว แบบ Touch Screen พร้อม QR Code รับบริจาค"
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) 70vw, 380px"
              className="h-auto w-full drop-shadow-[0_30px_55px_rgba(0,0,0,0.55)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
