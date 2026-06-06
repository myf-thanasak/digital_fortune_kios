import { QrCode, Hand, Globe } from "lucide-react";
import QrGraphic from "./QrGraphic";
import { LotusMark } from "./ThaiOrnament";

// Mockup ตู้ Digital Signage / Kiosk แสดงหน้าจอเซียมซีดิจิทัล + QR Code บริจาค
// หากต้องการใช้ภาพถ่ายจริง: วางไฟล์ใน public/ แล้วแทนที่คอมโพเนนต์นี้ด้วย <Image />

export default function KioskMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* แสงทองด้านหลัง */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-temple-gold/20 blur-3xl" />

      {/* ป้ายลอย: Touch */}
      <div className="absolute -left-4 top-16 z-20 flex animate-float-slow items-center gap-2 rounded-2xl border border-temple-gold/40 bg-white/95 px-3 py-2 shadow-card sm:-left-8">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-temple-red text-white">
          <Hand className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-temple-ink">
          แตะเพื่อเสี่ยงเซียมซี
        </span>
      </div>

      {/* ป้ายลอย: QR */}
      <div
        className="absolute -right-3 bottom-28 z-20 flex animate-float-slow items-center gap-2 rounded-2xl border border-temple-gold/40 bg-white/95 px-3 py-2 shadow-card sm:-right-6"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#06C755] text-white">
          <QrCode className="h-4 w-4" />
        </span>
        <span className="text-xs font-semibold text-temple-ink">
          พร้อมรับบริจาค
        </span>
      </div>

      {/* ตัวเครื่อง */}
      <div className="rounded-[2.2rem] border border-temple-gold/40 bg-gradient-to-b from-temple-ink-soft to-temple-ink p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-temple-gold/25">
          {/* หน้าจอ */}
          <div className="relative aspect-[9/16] bg-temple-radial">
            <div className="absolute inset-0 thai-pattern opacity-60" />
            <div className="relative flex h-full flex-col px-5 py-6 text-center">
              {/* แถบบน */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <LotusMark className="h-4 w-4" />
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-temple-gold-soft">
                    Digital เซียมซี
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-temple-gold/30 px-2 py-0.5 text-[0.55rem] font-semibold text-temple-gold-soft">
                  <Globe className="h-3 w-3" />
                  TH / EN
                </div>
              </div>

              {/* เลขเซียมซี */}
              <div className="mt-6 flex flex-1 flex-col items-center justify-center">
                <p className="text-[0.7rem] font-medium text-temple-cream/70">
                  เซียมซีใบที่
                </p>
                <div className="relative mt-2 grid h-28 w-28 place-items-center">
                  <div className="absolute inset-0 animate-glow rounded-full border-2 border-temple-gold/70" />
                  <div className="absolute inset-2 rounded-full border border-temple-gold/30" />
                  <span className="font-heading text-5xl font-bold gold-text">
                    ๒๘
                  </span>
                </div>
                <p className="mt-4 font-heading text-lg font-semibold text-temple-cream">
                  โชคลาภสมหวัง
                </p>
                <p className="mt-1 max-w-[14rem] text-[0.66rem] leading-relaxed text-temple-cream/60">
                  สิ่งที่ตั้งใจไว้จะสำเร็จลุล่วง ขอให้มีสติและทำความดีต่อเนื่อง
                </p>
              </div>

              {/* การ์ด QR */}
              <div className="mt-4 rounded-2xl bg-white/95 p-3">
                <div className="flex items-center gap-3">
                  <QrGraphic size={68} className="shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-temple-red">
                      สแกนเพื่อร่วมทำบุญ
                    </p>
                    <p className="mt-0.5 text-[0.6rem] leading-snug text-temple-ink/60">
                      รองรับ QR ของวัด มูลนิธิ
                      <br />
                      หรือองค์กรของท่าน
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ฐานตู้ */}
      <div className="mx-auto mt-2 h-3 w-2/3 rounded-b-xl bg-gradient-to-b from-temple-ink to-temple-ink-soft/40" />
      <div className="mx-auto h-2 w-1/3 rounded-b-lg bg-temple-ink/40" />
    </div>
  );
}
