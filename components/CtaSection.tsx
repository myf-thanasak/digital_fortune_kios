import { FileText, Phone, Globe, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import QuoteForm from "./QuoteForm";
import Reveal from "./Reveal";
import { ThaiDivider } from "./svg/ThaiOrnament";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-temple-radial"
    >
      <div className="absolute inset-0 thai-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-10 top-10 h-80 w-80 rounded-full bg-temple-red/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-temple-gold/20 blur-[120px]" />

      <div className="container-page relative grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="eyebrow-dark">ติดต่อทีมงาน</span>
          <h2 className="heading-lg mt-5 text-temple-cream">
            สนใจติดตั้ง ดิจิทัล<span className="gold-text">เซียมซี</span>{" "}
            สำหรับวัดหรือองค์กรของคุณ?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-temple-cream/75 sm:text-lg">
            ทีมงานยินดีให้คำปรึกษา ออกแบบรูปแบบการใช้งาน
            และจัดทำใบเสนอราคาให้เหมาะกับพื้นที่จริง
          </p>

          <ThaiDivider className="mt-8 !justify-start" />

          <div className="mt-8">
            <a href="#quote-form" className="btn-primary">
              <FileText className="h-5 w-5" />
              {site.ctaPrimary}
            </a>
          </div>

          <div className="mt-10 space-y-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-4 rounded-2xl border border-temple-gold/20 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-temple-red text-temple-gold-soft">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-temple-cream/55">โทรศัพท์</span>
                <span className="font-heading text-lg font-semibold text-temple-cream">
                  {site.phone}
                </span>
              </span>
            </a>
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-temple-gold/20 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#06C755] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-temple-cream/55">LINE</span>
                <span className="font-heading text-lg font-semibold text-temple-cream">
                  {site.lineId}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-temple-gold/20 bg-white/5 p-4 backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-temple-gold text-temple-ink">
                <Globe className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-temple-cream/55">Website</span>
                <span className="font-heading text-lg font-semibold text-temple-cream">
                  {site.domain}
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} id="quote-form">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
