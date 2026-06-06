import { Phone, Facebook, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
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

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark mx-auto">ติดต่อทีมงาน</span>
          <h2 className="heading-lg mt-5 text-temple-cream">
            สนใจติดตั้ง ดิจิทัล<span className="gold-text">เซียมซี</span>{" "}
            สำหรับวัดหรือองค์กรของคุณ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-temple-cream/75 sm:text-lg">
            ทีมงานยินดีให้คำปรึกษา ออกแบบรูปแบบการใช้งาน
            และจัดทำใบเสนอราคาให้เหมาะกับพื้นที่จริง
          </p>

          <ThaiDivider className="mt-8" />
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-temple-gold/20 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-temple-red text-temple-gold-soft">
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
            className="flex flex-col items-center gap-3 rounded-2xl border border-temple-gold/20 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#06C755] text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs text-temple-cream/55">LINE</span>
              <span className="font-heading text-lg font-semibold text-temple-cream">
                {site.lineId}
              </span>
            </span>
          </a>
          <a
            href="https://www.facebook.com/myfirstc.media"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-temple-gold/20 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:bg-white/10 sm:col-span-2 lg:col-span-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#1877F2] text-white">
              <Facebook className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs text-temple-cream/55">Facebook</span>
              <span className="font-heading text-lg font-semibold text-temple-cream">
                myfirstc.media
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
