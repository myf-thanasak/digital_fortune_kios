import {
  Check,
  LogIn,
  ScrollText,
  Languages,
  QrCode,
  BarChart3,
  ImageIcon,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { adminFeatures, adminNote } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const featureIcons: LucideIcon[] = [
  LogIn,
  ScrollText,
  Languages,
  QrCode,
  BarChart3,
  ImageIcon,
];

const bars = [40, 65, 50, 80, 72, 95, 60];

export default function AdminFlowSection() {
  return (
    <section id="admin" className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          // eyebrow="ระบบหลังบ้าน"
          title="ระบบหลังบ้านสำหรับผู้ดูแล"
          description="จัดการเนื้อหา ตั้งค่า และดูสถิติได้เองอย่างยืดหยุ่น เหมาะกับทุกสถานที่"
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* รายการความสามารถ */}
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {adminFeatures.map((feat, i) => {
                const Icon = featureIcons[i] ?? Check;
                return (
                  <li
                    key={feat}
                    className="flex items-center gap-3 rounded-xl border border-temple-gold/20 bg-temple-cream p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-temple-red/10 text-temple-red">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-temple-ink">
                      {feat}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-temple-gold/30 bg-temple-gold/10 p-5">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-temple-gold" />
              <p className="text-sm leading-relaxed text-temple-ink/80">
                {adminNote}
              </p>
            </div>
          </Reveal>

          {/* ภาพ Dashboard จำลอง */}
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl border border-temple-gold/30 bg-temple-ink shadow-card">
              <div className="flex items-center gap-2 border-b border-white/10 bg-temple-ink-soft px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-temple-red-light" />
                <span className="h-3 w-3 rounded-full bg-temple-gold" />
                <span className="h-3 w-3 rounded-full bg-temple-gold-soft/60" />
                <span className="ml-3 text-xs font-medium text-temple-cream/60">
                  Admin · Digital เซียมซี
                </span>
              </div>

              <div className="space-y-4 p-5">
                {/* การ์ดสถิติ */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Users, label: "ผู้ใช้งานวันนี้", value: "1,284" },
                    { icon: Sparkles, label: "เสี่ยงเซียมซี", value: "3,902" },
                    { icon: QrCode, label: "เปิดหน้า QR", value: "2,517" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <s.icon className="h-4 w-4 text-temple-gold" />
                      <p className="mt-2 font-heading text-lg font-bold text-temple-cream">
                        {s.value}
                      </p>
                      <p className="text-[0.65rem] text-temple-cream/55">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* กราฟจำลอง */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-temple-cream/70">
                      การใช้งานรายวัน
                    </p>
                    <BarChart3 className="h-4 w-4 text-temple-gold" />
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-temple-red to-temple-gold"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* แถวจัดการคำทำนาย */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium text-temple-cream/70">
                    จัดการคำทำนาย
                  </p>
                  <div className="mt-3 space-y-2">
                    {["เซียมซีใบที่ ๒๘ · โชคลาภสมหวัง", "เซียมซีใบที่ ๗ · การงานรุ่งเรือง"].map(
                      (row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                        >
                          <span className="text-xs text-temple-cream/80">
                            {row}
                          </span>
                          <span className="rounded-md bg-temple-gold/20 px-2 py-0.5 text-[0.6rem] font-semibold text-temple-gold-soft">
                            แก้ไข
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
