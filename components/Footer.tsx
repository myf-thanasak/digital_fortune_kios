import { Phone, MessageCircle, Globe } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { LotusMark } from "./svg/ThaiOrnament";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-temple-ink pb-24 pt-16 lg:pb-12">
      <div className="absolute inset-0 thai-pattern opacity-30" />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* แบรนด์ */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-temple-gold/40 bg-temple-red">
                <LotusMark className="h-6 w-6" />
              </span>
              <span className="font-heading text-xl font-bold text-temple-cream">
                ดิจิทัล<span className="gold-text">เซียมซี</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-temple-cream/60">
              ระบบเซียมซีดิจิทัล พร้อมรับบริจาคผ่าน QR Code
              เปลี่ยนจุดทำบุญให้ทันสมัย เหมาะสำหรับวัด ศาลเจ้า มูลนิธิ
              และสถานบริจาค
            </p>
            <p className="mt-4 text-sm text-temple-cream/50">
              โดย {site.company}
            </p>
          </div>

          {/* ลิงก์ */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-temple-gold">
              เมนู
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-temple-cream/65 transition-colors hover:text-temple-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ติดต่อ */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-temple-gold">
              ติดต่อเรา
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-temple-cream/70 hover:text-temple-gold"
                >
                  <Phone className="h-4 w-4 text-temple-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-temple-cream/70 hover:text-temple-gold"
                >
                  <MessageCircle className="h-4 w-4 text-temple-gold" />
                  LINE: {site.lineId}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-temple-cream/70">
                <Globe className="h-4 w-4 text-temple-gold" />
                {site.domain}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-temple-cream/45">
            © {year} {site.company} · ดิจิทัลเซียมซี สงวนลิขสิทธิ์
          </p>
          <p className="text-xs text-temple-cream/45">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
