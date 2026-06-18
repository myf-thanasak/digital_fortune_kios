// ────────────────────────────────────────────────────────────────────────────
// ตัวอ่านข้อมูล "ใบเซียมซีดิจิทัล" จากไฟล์กลาง shared/fortunes.json
//
// shared/fortunes.json คือแหล่งข้อมูลหลัก "ชุดเดียว" ที่ใช้ร่วมกันระหว่าง:
//   - Web /slip            → แสดงผลใบเซียมซีหลังสแกน QR Code
//   - Android App          → คัดลอกไฟล์เดียวกันไปไว้ที่
//                            app/src/main/assets/fortunes.json แล้ว seed เข้า Room
//
// เว็บมีหน้าที่ "แสดงผล" เท่านั้น — ห้ามสุ่มเลขหรือสร้างคำทำนายใหม่
//
// การต่อยอด: ภายหลังเปลี่ยนเป็น database/API ได้โดยแก้เฉพาะฟังก์ชันด้านล่าง
//   (getTemple / getFortune / getDefaultTemple) ให้ไปดึงจากแหล่งจริง โดยคง
//   รูปแบบข้อมูล (shape) เดิมไว้
// ────────────────────────────────────────────────────────────────────────────

import data from "@/shared/fortunes.json";

export type Locale = "th" | "en";

export interface FortuneContent {
  /** หัวข้อใบเซียมซี เช่น "ใบเซียมซีที่ 22" */
  title: string;
  /** ระดับโชค เช่น "ดีเยี่ยม" / "Excellent" (ไม่บังคับ) */
  level?: string;
  /** เนื้อหาคำทำนายหลัก */
  text: string;
  /** คำแนะนำ / ข้อคิด */
  advice: string;
}

export interface Fortune {
  /** เลขใบเซียมซี (ตรงกับเลขที่ Android สุ่มได้) */
  no: number;
  th: FortuneContent;
  en: FortuneContent;
}

/** ข้อมูล QR บริจาคของวัด/ศาลเจ้า (แสดงในหน้า /slip บนมือถือ) */
export interface Donation {
  /** เปิด/ปิดการแสดงการ์ดบริจาค */
  enabled: boolean;
  title: Record<Locale, string>;
  /** path รูป QR บริจาค เช่น "/donation/sri-mongkol-promptpay.png" (อยู่ในโฟลเดอร์ public) */
  qrImage: string;
  /** ชื่อบัญชีผู้รับบริจาค */
  accountName: Record<Locale, string>;
  /** เลขบัญชีแบบปิดบางส่วน เช่น "xxx-x-x3176-x" */
  accountMasked: string;
  /** ข้อความสำคัญ เช่น เงินบริจาคโอนตรงเข้าบัญชีวัด */
  note: Record<Locale, string>;
  /** ข้อความบนปุ่มบันทึก QR */
  buttonText: Record<Locale, string>;
  /** ข้อความขอบคุณ/อนุโมทนา */
  thankYouText: Record<Locale, string>;
}

export interface Temple {
  templeId: string;
  templeName: Record<Locale, string>;
  /** ข้อความท้ายใบ เช่น คำอวยพร (ไม่บังคับ) */
  blessing?: Record<Locale, string>;
  /** ข้อมูล QR บริจาค (ไม่บังคับ — ถ้าไม่มีจะใช้ค่า default) */
  donation?: Donation;
  fortunes: Fortune[];
}

export interface FortuneData {
  defaultTempleId: string;
  defaultLocale: Locale;
  temples: Temple[];
}

// แปลงข้อมูล JSON ที่ import เข้ามาให้เป็น type ที่กำหนด
const fortuneData = data as unknown as FortuneData;

/** วัด/ศาลเจ้าเริ่มต้น เมื่อ URL ไม่ได้ระบุ temple */
export const DEFAULT_TEMPLE_ID = fortuneData.defaultTempleId;

/** ภาษาเริ่มต้น เมื่อ URL ไม่ได้ระบุ lang */
export const DEFAULT_LOCALE: Locale =
  fortuneData.defaultLocale === "en" ? "en" : "th";

/** รายการวัด/ศาลเจ้าทั้งหมด */
export const temples: Temple[] = fortuneData.temples;

// ────────────────────────────────────────────────────────────────────────────
// ฟังก์ชันช่วยอ่าน/ค้นหาข้อมูล
// ────────────────────────────────────────────────────────────────────────────

/** ตรวจสอบและแปลงค่า lang จาก query ให้เป็น Locale ที่รองรับ (en นอกนั้นเป็น th) */
export function normalizeLocale(value?: string | null): Locale {
  return value === "en" ? "en" : DEFAULT_LOCALE;
}

/** แปลงค่า no จาก query (string) เป็นตัวเลข — คืน null ถ้าไม่ถูกต้อง */
export function parseFortuneNo(value?: string | null): number | null {
  if (value == null || value.trim() === "") return null;
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : null;
}

/** ค้นหาวัด/ศาลเจ้าตามรหัส — คืน undefined ถ้าไม่พบ */
export function getTemple(templeId?: string | null): Temple | undefined {
  if (!templeId) return undefined;
  return temples.find((t) => t.templeId === templeId);
}

/** วัด/ศาลเจ้าเริ่มต้น (อ้างอิง defaultTempleId จาก JSON) */
export function getDefaultTemple(): Temple {
  return getTemple(DEFAULT_TEMPLE_ID) ?? temples[0];
}

/** ค้นหาใบเซียมซีในวัดตามเลข — คืน undefined ถ้าไม่พบ */
export function getFortune(temple: Temple, no: number): Fortune | undefined {
  return temple.fortunes.find((f) => f.no === no);
}

/**
 * คืนข้อมูล QR บริจาคของวัด — เฉพาะเมื่อมีและ enabled=true เท่านั้น
 * ถ้าไม่มี donation หรือ enabled=false จะคืน undefined (ให้ซ่อนการ์ดบริจาค)
 */
export function getDonation(temple: Temple): Donation | undefined {
  return temple.donation?.enabled ? temple.donation : undefined;
}
