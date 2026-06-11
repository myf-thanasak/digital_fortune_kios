"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Download,
  Share2,
  ScrollText,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Check,
} from "lucide-react";
import {
  type Locale,
  type Temple,
  type Fortune,
  getTemple,
  getDefaultTemple,
  getFortune,
  parseFortuneNo,
  normalizeLocale,
} from "@/lib/fortune-data";
import { site } from "@/lib/site";
import { LotusMark } from "@/components/svg/ThaiOrnament";

// ─── ข้อความตามภาษา ──────────────────────────────────────────────────────────
const COPY = {
  th: {
    brand: "ใบเซียมซีดิจิทัล",
    prediction: "คำทำนาย",
    advice: "ข้อคิดและคำแนะนำ",
    openedAt: "เปิดดูเมื่อ",
    save: "บันทึกภาพใบเซียมซี",
    saving: "กำลังบันทึก...",
    share: "แชร์ใบเซียมซี",
    copied: "คัดลอกลิงก์แล้ว",
    saved: "บันทึกภาพแล้ว",
    saveFailed: "ไม่สามารถบันทึกภาพได้ กรุณาลองใหม่อีกครั้ง",
    templeFallback:
      "ไม่พบวัด/ศาลเจ้าที่ระบุ ระบบจึงแสดงข้อมูลจากวัดเริ่มต้นให้แทน",
    noNoTitle: "ไม่พบเลขใบเซียมซี",
    noNoText: "กรุณาสแกน QR Code ใหม่อีกครั้ง",
    notFoundTitle: "ไม่พบข้อมูลใบเซียมซีนี้",
    notFoundText: "กรุณาติดต่อเจ้าหน้าที่",
    locale: "th-TH",
  },
  en: {
    brand: "Digital Fortune Slip",
    prediction: "Fortune",
    advice: "Reflection & Advice",
    openedAt: "Opened on",
    save: "Save fortune image",
    saving: "Saving...",
    share: "Share fortune",
    copied: "Link copied",
    saved: "Image saved",
    saveFailed: "Could not save the image. Please try again.",
    templeFallback:
      "The specified temple was not found, so the default temple is shown instead.",
    noNoTitle: "Fortune number not found",
    noNoText: "Please scan the QR Code again.",
    notFoundTitle: "This fortune was not found",
    notFoundText: "Please contact the staff.",
    locale: "en-GB",
  },
} as const;

export default function SlipView() {
  const searchParams = useSearchParams();

  const lang: Locale = normalizeLocale(searchParams.get("lang"));
  const t = COPY[lang];

  const no = parseFortuneNo(searchParams.get("no"));
  const templeParam = searchParams.get("temple");

  // ค้นหาวัด: ถ้า temple ไม่ถูกต้อง ใช้วัดเริ่มต้นแทน และแจ้งเตือนอย่างสุภาพ
  const matchedTemple = getTemple(templeParam);
  const templeFallback = Boolean(templeParam) && !matchedTemple;
  const temple: Temple = matchedTemple ?? getDefaultTemple();

  // ค้นหาใบเซียมซีตามเลขที่ Android ส่งมา (ห้ามสุ่มใหม่)
  const fortune: Fortune | undefined =
    no != null ? getFortune(temple, no) : undefined;

  // ─── กรณีไม่พบเลขใบเซียมซีใน URL ───
  if (no == null) {
    return <ErrorCard icon="warn" title={t.noNoTitle} text={t.noNoText} />;
  }

  // ─── กรณีมีเลข แต่ไม่พบข้อมูลใบนั้น ───
  if (!fortune) {
    return (
      <ErrorCard icon="warn" title={t.notFoundTitle} text={t.notFoundText} />
    );
  }

  return (
    <SlipCard
      temple={temple}
      fortune={fortune}
      lang={lang}
      templeFallback={templeFallback}
    />
  );
}

// ─── การ์ดใบเซียมซีหลัก ───────────────────────────────────────────────────────
function SlipCard({
  temple,
  fortune,
  lang,
  templeFallback,
}: {
  temple: Temple;
  fortune: Fortune;
  lang: Locale;
  templeFallback: boolean;
}) {
  const t = COPY[lang];
  const content = fortune[lang];

  const cardRef = useRef<HTMLDivElement>(null);
  const [openedAt, setOpenedAt] = useState("");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  // คำนวณวันที่ฝั่ง client เพื่อเลี่ยง hydration mismatch
  useEffect(() => {
    setOpenedAt(
      new Date().toLocaleDateString(t.locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  }, [t.locale]);

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2200);
  }

  // ─── บันทึกการ์ดเป็นรูปภาพ ───
  // ใช้ html2canvas โหลดแบบ on-demand จาก CDN (ไม่ต้องเพิ่ม dependency)
  // หากต้องการใช้งานแบบออฟไลน์ ให้ติดตั้งในโปรเจกต์:
  //   npm i html2canvas
  // แล้วเปลี่ยนมาใช้แบบ import แทน CDN:
  //   const html2canvas = (await import("html2canvas")).default;
  async function handleSave() {
    if (!cardRef.current || saving) return;
    setSaving(true);
    try {
      const html2canvas = await loadHtml2Canvas();
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: Math.min(window.devicePixelRatio || 1, 3),
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `siamsi-${temple.templeId}-${fortune.no}.png`;
      link.click();
      showToast(t.saved);
    } catch (err) {
      console.error("save fortune image failed:", err);
      showToast(t.saveFailed);
    } finally {
      setSaving(false);
    }
  }

  // ─── แชร์ใบเซียมซี ───
  // ใช้ Web Share API ถ้ารองรับ ไม่งั้น fallback เป็นคัดลอกลิงก์
  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: t.brand,
      text: `${content.title} · ${temple.templeName[lang]}`,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
    } catch {
      // ผู้ใช้กดยกเลิกการแชร์ — ไม่ต้องทำอะไรต่อ
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast(t.copied);
    } catch {
      showToast(t.copied);
    }
  }

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-temple-radial px-4 py-8 sm:py-12">
      {/* แสงประดับพื้นหลัง */}
      <div className="thai-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-temple-red/40 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-md">
        {/* การ์ดที่จะถูกบันทึกเป็นรูป */}
        <div
          ref={cardRef}
          className="overflow-hidden rounded-[2rem] border border-temple-gold/40 bg-gradient-to-b from-temple-red via-temple-red-dark to-[#3a0608] shadow-card"
        >
          {/* หัวการ์ด */}
          <div className="flex flex-col items-center gap-3 px-6 pt-8 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-temple-gold/40 bg-white/5">
              <LotusMark className="h-7 w-7" />
            </span>
            <span className="eyebrow-dark">{t.brand}</span>
            <h1 className="font-heading text-xl font-bold text-temple-cream">
              {temple.templeName[lang]}
            </h1>
          </div>

          {/* ตัวเลขใบเซียมซีเด่น */}
          <div className="mt-6 flex flex-col items-center">
            <div className="relative grid h-32 w-32 place-items-center rounded-full border-2 border-temple-gold/70 bg-temple-red-dark/50">
              <div className="absolute inset-2 rounded-full border border-temple-gold/30" />
              <span className="font-heading text-6xl font-bold leading-none text-temple-gold-soft">
                {fortune.no}
              </span>
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold text-temple-cream">
              {content.title}
            </h2>
            {content.level ? (
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-temple-gold/50 bg-temple-gold/15 px-4 py-1 text-sm font-semibold text-temple-gold-soft">
                <Sparkles className="h-3.5 w-3.5" />
                {content.level}
              </span>
            ) : null}
          </div>

          {/* เนื้อหา */}
          <div className="px-6 pb-8 pt-6">
            <div className="gold-divider opacity-60" />

            {/* คำทำนาย */}
            <section className="mt-6">
              <div className="flex items-center gap-2 text-temple-gold-soft">
                <ScrollText className="h-4 w-4" />
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em]">
                  {t.prediction}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-temple-cream/90">
                {content.text}
              </p>
            </section>

            {/* คำแนะนำ */}
            <section className="mt-5 rounded-2xl border border-temple-gold/25 bg-white/[0.06] p-4">
              <div className="flex items-center gap-2 text-temple-gold-soft">
                <Lightbulb className="h-4 w-4" />
                <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em]">
                  {t.advice}
                </h3>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-temple-cream/90">
                {content.advice}
              </p>
            </section>

            {/* คำอวยพรท้ายใบ */}
            {temple.blessing ? (
              <p className="mt-6 text-center text-sm italic leading-relaxed text-temple-gold-soft/85">
                “{temple.blessing[lang]}”
              </p>
            ) : null}

            {/* วันที่เปิดดู + แบรนด์ */}
            <div className="mt-6 flex items-center justify-between border-t border-temple-gold/15 pt-4 text-xs text-temple-cream/55">
              <span>
                {openedAt ? `${t.openedAt} ${openedAt}` : "\u00a0"}
              </span>
              <span>{site.domain}</span>
            </div>
          </div>
        </div>

        {/* แจ้งเตือนกรณีใช้วัดเริ่มต้นแทน */}
        {templeFallback ? (
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-temple-gold/25 bg-white/5 px-4 py-3 text-xs leading-relaxed text-temple-cream/70">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-temple-gold" />
            {t.templeFallback}
          </p>
        ) : null}

        {/* ปุ่มด้านล่าง */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="btn-primary !py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Download className="h-5 w-5" />
            {saving ? t.saving : t.save}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="btn-outline-gold !py-3.5"
          >
            <Share2 className="h-5 w-5" />
            {t.share}
          </button>
        </div>
      </div>

      {/* Toast แจ้งผล */}
      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
          <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-temple-ink/95 px-5 py-3 text-sm font-medium text-temple-cream shadow-card ring-1 ring-temple-gold/30">
            <Check className="h-4 w-4 text-temple-gold" />
            {toast}
          </div>
        </div>
      ) : null}
    </main>
  );
}

// ─── การ์ดแสดงข้อผิดพลาด ──────────────────────────────────────────────────────
function ErrorCard({
  title,
  text,
}: {
  icon: "warn";
  title: string;
  text: string;
}) {
  return (
    <main className="relative grid min-h-[100dvh] place-items-center overflow-hidden bg-temple-radial px-5">
      <div className="thai-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative w-full max-w-sm rounded-[2rem] border border-temple-gold/35 bg-gradient-to-b from-temple-red-dark to-[#2c0507] p-8 text-center shadow-card">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-temple-gold/40 bg-white/5">
          <AlertTriangle className="h-8 w-8 text-temple-gold" />
        </span>
        <h1 className="mt-5 font-heading text-2xl font-bold text-temple-cream">
          {title}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-temple-cream/75">
          {text}
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-temple-gold-soft/70">
          <LotusMark className="h-4 w-4" />
          {site.name}
        </div>
      </div>
    </main>
  );
}

// ─── ตัวโหลด html2canvas แบบ on-demand จาก CDN ────────────────────────────────
// แยกออกมาเพื่อไม่ให้ webpack ต้อง resolve โมดูลตอน build (ยังไม่ได้ติดตั้ง)
type Html2CanvasFn = (
  el: HTMLElement,
  opts?: Record<string, unknown>,
) => Promise<HTMLCanvasElement>;

const HTML2CANVAS_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

function loadHtml2Canvas(): Promise<Html2CanvasFn> {
  return new Promise((resolve, reject) => {
    const w = window as unknown as { html2canvas?: Html2CanvasFn };
    if (w.html2canvas) {
      resolve(w.html2canvas);
      return;
    }
    const script = document.createElement("script");
    script.src = HTML2CANVAS_CDN;
    script.async = true;
    script.onload = () => {
      if (w.html2canvas) resolve(w.html2canvas);
      else reject(new Error("html2canvas failed to load"));
    };
    script.onerror = () => reject(new Error("html2canvas failed to load"));
    document.head.appendChild(script);
  });
}
