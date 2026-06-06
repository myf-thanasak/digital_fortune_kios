import { Check, X, WifiOff, Cloud } from "lucide-react";
import { offlineMode, onlineMode, offlineOnlineIntro, type ModeItem } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ModeCard({
  title,
  subtitle,
  items,
  icon: Icon,
  accent,
  delay,
}: {
  title: string;
  subtitle: string;
  items: ModeItem[];
  icon: typeof WifiOff;
  accent: "gold" | "red";
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-3xl border border-temple-gold/25 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl ${
              accent === "gold"
                ? "bg-temple-gold/15 text-temple-red"
                : "bg-temple-red text-temple-gold-soft"
            }`}
          >
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-heading text-xl font-bold text-temple-ink">
              {title}
            </h3>
            <p className="text-xs text-temple-ink/55">{subtitle}</p>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item.text} className="flex items-start gap-3">
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                  item.available
                    ? "bg-emerald-500/15 text-emerald-600"
                    : "bg-temple-red/10 text-temple-red"
                }`}
              >
                {item.available ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <X className="h-4 w-4" />
                )}
              </span>
              <span
                className={`text-sm leading-relaxed ${
                  item.available
                    ? "text-temple-ink/85"
                    : "font-medium text-temple-ink/60"
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function OfflineOnline() {
  return (
    <section id="offline-online" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          // eyebrow="ยืดหยุ่นทุกพื้นที่"
          title="รองรับการใช้งานทั้ง Offline และ Online"
          description={offlineOnlineIntro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ModeCard
            title="Offline Mode"
            subtitle="ใช้งานได้แม้ไม่มีอินเทอร์เน็ต"
            items={offlineMode}
            icon={WifiOff}
            accent="gold"
            delay={0}
          />
          <ModeCard
            title="Online Mode"
            subtitle="เชื่อมต่อ Cloud เก็บข้อมูลแบบเรียลไทม์"
            items={onlineMode}
            icon={Cloud}
            accent="red"
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}
