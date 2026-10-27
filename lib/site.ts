// ────────────────────────────────────────────────────────────────────────────
// ศูนย์รวมเนื้อหา/ค่าคงที่ทั้งหมดของเว็บไซต์ ดิจิทัลเซียมซี
// แก้ไขข้อความ เบอร์ติดต่อ หรือรายการต่าง ๆ ได้จากไฟล์นี้ไฟล์เดียว
// ────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "ดิจิทัลเซียมซี",
  tagline: "เขย่าเซียมซีบนมือถือ ลุ้นรางวัลทันที",
  company: "My First Child Co., Ltd.",
  phone: "096-975-4100",
  phoneRaw: "0969754100",
  lineId: "@myfirstc",
  lineUrl: "https://line.me/R/ti/p/@myfirstc",
  facebookUrl: "https://www.facebook.com/myfirstc.media",
  // โดเมนหลัก — ดิจิทัลเซียมซี.com redirect 308 มาที่นี่
  domain: "digitalsiamsee.com",
  url: "https://www.digitalsiamsee.com",
} as const;

// ลิงก์เดโมสาธารณะ — ตั้งค่า NEXT_PUBLIC_DEMO_URL เพื่อเปลี่ยน (ไม่ต้องแก้โค้ด)
export const demoUrl =
  process.env.NEXT_PUBLIC_DEMO_URL || "https://play.digitalsiamsee.com/";

// เปิดแชต LINE OA พร้อมข้อความที่พิมพ์ไว้ให้ล่วงหน้า
export function lineMessageUrl(text: string) {
  return `https://line.me/R/oaMessage/${site.lineId}/?${encodeURIComponent(text)}`;
}

export const seoKeywords = [
  "เขย่าเซียมซีลุ้นรางวัล",
  "เกมลุ้นรางวัลร้านค้า",
  "เกมหมุนวงล้อออนไลน์",
  "แคมเปญแจกของรางวัล",
  "QR ลุ้นรางวัล",
  "เกมโปรโมชั่นคาเฟ่",
  "ดิจิทัลเซียมซี",
  "เซียมซีออนไลน์",
  "เซียมซีปีใหม่ออฟฟิศ",
  "เซียมซีวัด QR ทำบุญ",
];

export const navLinks = [
  { label: "วิธีเล่น", href: "#how" },
  { label: "แพ็กเกจ", href: "#packages" },
  { label: "ผลงาน", href: "#works" },
  { label: "คำถาม", href: "#faq" },
];

// The shake-for-prize package leads the page: shops run campaigns all year,
// while the other packages are seasonal.
export const steps = [
  { icon: "qr", title: "สแกน QR", desc: "ไม่ต้องโหลดแอป" },
  { icon: "shake", title: "เขย่ามือถือ", desc: "เหมือนเขย่าเซียมซีจริง" },
  { icon: "gift", title: "ได้รางวัลทันที", desc: "โชว์ให้พนักงานดู" },
] as const;

export const rewardUseCases = [
  "ซื้อครบ 300 รับ 1 สิทธิ์",
  "ฉลองเปิดร้าน",
  "ไลฟ์ขายของ",
  "ลูกค้าเก่ากลับมาซื้อซ้ำ",
  "บูธอีเวนต์",
];

export type Package = {
  id: string;
  emoji: string;
  name: string;
  audience: string;
  price: string;
  /** Plain number for structured data; omitted when priced by quote. */
  priceValue?: number;
  priceNote: string;
  features: string[];
  highlight?: string;
  cta: string;
  /** Exact LINE OA auto-response keyword this package's button sends. */
  lineKeyword: string;
};

export const rewardPackage: Package = {
  id: "shake-reward",
  emoji: "🎁",
  name: "เขย่าเซียมซีลุ้นรางวัล",
  audience: "ร้านค้า · คาเฟ่ · แบรนด์ออนไลน์",
  price: "4,900",
  priceValue: 4900,
  priceNote: "บาท / แคมเปญ 30 วัน",
  features: [
    "ตั้งของรางวัลและจำนวนเอง",
    "ระบบตัดสต็อกให้ ไม่มีแจกเกิน",
    "รางวัลใหญ่ปล่อยตามเวลาที่กำหนด",
    "QR สิทธิ์ใช้ครั้งเดียว 500 โค้ด",
    "ใส่โลโก้และสีของร้าน",
  ],
  cta: "สนใจแพ็กนี้ ทักเลย",
  lineKeyword: "เลือก เขย่าลุ้นรางวัล",
};

export const otherPackages: Package[] = [
  {
    id: "office-newyear",
    emoji: "🎉",
    name: "ปีใหม่ออฟฟิศ",
    audience: "งานเลี้ยงบริษัท",
    price: "2,900",
    priceValue: 2900,
    priceNote: "บาท / 14 วัน",
    features: ["ใส่โลโก้ + คำอวยพรบริษัท", "เปิดบนทีวี / iPad ที่มีอยู่"],
    cta: "เลือกแพ็กนี้",
    lineKeyword: "เลือก ปีใหม่ออฟฟิศ",
  },
  {
    id: "temple",
    emoji: "🙏",
    name: "วัด / ศาลเจ้า",
    audience: "รับทำบุญผ่าน QR",
    price: "9,900",
    priceValue: 9900,
    priceNote: "บาท / ปี",
    features: ["ใช้ใบเซียมซีของวัดเอง", "QR ทำบุญเข้าบัญชีวัดตรง"],
    cta: "เลือกแพ็กนี้",
    lineKeyword: "เลือก วัด/ศาลเจ้า",
  },
  {
    id: "cny-2027",
    emoji: "🧧",
    name: "ตรุษจีน 2027",
    audience: "ห้าง / แบรนด์ / อีเวนต์",
    price: "ขอราคา",
    priceNote: "ตามขนาดงาน",
    features: ["ตู้ Kiosk จอทัช 55 นิ้ว", "ติดตั้งพร้อมทีมดูแล"],
    highlight: "จองก่อน 15 พ.ย. ลด 15%",
    cta: "ขอใบเสนอราคา",
    lineKeyword: "เลือก ตรุษจีน 2027",
  },
];

export const packages: Package[] = [rewardPackage, ...otherPackages];

export type ClientWork = { name: string; note?: string };

export const clientWorks: ClientWork[] = [
  { name: "One Bangkok" },
  { name: "Platinum Fashion Mall" },
  { name: "True Digital Park" },
  { name: "มิวเซียมสยาม", note: "ISAN UNBOXED FEST 2026" },
];

export const portfolioUrl = "https://myfirstc.com/blog?service=fortune";

export type Faq = { q: string; a: string };

// Short, complete answers: these also feed the FAQPage structured data that
// search engines and AI assistants quote.
export const faqs: Faq[] = [
  {
    q: "เขย่าเซียมซีลุ้นรางวัลคืออะไร?",
    a: "เกมลุ้นรางวัลแบบเดียวกับหมุนวงล้อ แต่ลูกค้าสแกน QR แล้วเขย่ามือถือเหมือนเขย่าเซียมซี ระบบสุ่มของรางวัลที่ร้านตั้งไว้และแสดงผลทันที",
  },
  {
    q: "ลูกค้าต้องโหลดแอปไหม?",
    a: "ไม่ต้อง เปิดผ่านกล้องมือถือหรือ LINE ได้เลย เล่นบนเว็บเบราว์เซอร์",
  },
  {
    q: "กันคนเล่นซ้ำหรือแจกเกินได้ไหม?",
    a: "ได้ แต่ละ QR ใช้ได้ครั้งเดียว และระบบตัดสต็อกรางวัลทุกครั้งที่มีคนได้ เมื่อหมดก็ไม่สุ่มออกอีก",
  },
  {
    q: "ราคาเท่าไร?",
    a: "เขย่าลุ้นรางวัล 4,900 บาท/แคมเปญ 30 วัน รวม QR 500 สิทธิ์ · ปีใหม่ออฟฟิศ 2,900 บาท · วัด/ศาลเจ้า 9,900 บาท/ปี · ตรุษจีน 2027 ตามใบเสนอราคา",
  },
  {
    q: "ใช้เวลาเตรียมกี่วัน?",
    a: "ได้ลิงก์ทดลองภายใน 2–5 วันทำการหลังได้รับโลโก้และรายละเอียดครบ",
  },
  {
    q: "ของรางวัลผูกกับเลขเซียมซีไหม?",
    a: "ไม่ผูก รางวัลสุ่มแยกจากเลขเซียมซี จึงรู้ผลทันทีโดยไม่ต้องรอโหลดใบเซียมซี",
  },
];
