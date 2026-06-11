// ────────────────────────────────────────────────────────────────────────────
// ข้อมูลกลาง "ใบเซียมซีดิจิทัล" — ใช้ชุดเดียวกันกับ Android App
//
// แนวคิด:
//  - Android App ใช้ข้อมูลชุดนี้ seed เข้า Room/SQLite
//  - เว็บ /slip ใช้ข้อมูลชุดเดียวกันในการแสดงผล
//  - เมื่อ Android ส่ง ?no=22 มา เว็บต้องแสดงใบที่ 22 ให้ตรงกัน
//
// หมายเหตุ: เว็บมีหน้าที่ "แสดงผล" เท่านั้น ห้ามสุ่มเลขหรือสร้างคำทำนายใหม่
//
// การต่อยอด: ภายหลังเปลี่ยนจาก mock data ชุดนี้เป็น database/API ได้ทันที
//   เพียงแก้ getTemple()/getFortune() ให้ไปดึงจากแหล่งข้อมูลจริง โดยคง
//   รูปแบบข้อมูล (shape) เดิมไว้
// ────────────────────────────────────────────────────────────────────────────

export type Locale = "th" | "en";

export interface FortuneContent {
  /** หัวข้อใบเซียมซี เช่น "ใบเซียมซีที่ 22" */
  title: string;
  /** ระดับโชค เช่น "โชคดีมาก" / "Very Auspicious" (ไม่บังคับ) */
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

export interface Temple {
  templeId: string;
  templeName: Record<Locale, string>;
  /** ข้อความท้ายใบ เช่น คำอวยพร (ไม่บังคับ) */
  blessing?: Record<Locale, string>;
  fortunes: Fortune[];
}

/** วัด/ศาลเจ้าเริ่มต้น เมื่อ URL ไม่ได้ระบุ temple */
export const DEFAULT_TEMPLE_ID = "sri-mongkol";

/** ภาษาเริ่มต้น เมื่อ URL ไม่ได้ระบุ lang */
export const DEFAULT_LOCALE: Locale = "th";

// ────────────────────────────────────────────────────────────────────────────
// ชุดข้อมูลวัด/ศาลเจ้า (mock data — โครงสร้างเดียวกับ fortunes.json ของ Android)
// ────────────────────────────────────────────────────────────────────────────

export const temples: Temple[] = [
  {
    templeId: "sri-mongkol",
    templeName: {
      th: "วัดศรีมงคลธรรม",
      en: "Wat Sri Mongkol Dhamma",
    },
    blessing: {
      th: "ขอให้ท่านมีสติ มีความเพียร และใช้ชีวิตด้วยความไม่ประมาท",
      en: "May you live mindfully, with diligence and care.",
    },
    fortunes: [
      {
        no: 1,
        th: {
          title: "ใบเซียมซีที่ 1",
          level: "โชคดีมาก",
          text: "ดุจอาทิตย์อุทัยส่องฟ้า สิ่งที่ตั้งใจไว้จะค่อย ๆ กระจ่างชัด อุปสรรคที่เคยมีจะคลี่คลาย ผู้ใหญ่ให้การสนับสนุน การงานและการเงินมีเกณฑ์รุ่งเรืองขึ้นตามลำดับ",
          advice: "จงเริ่มต้นด้วยใจที่มั่นคง ทำความดีอย่างสม่ำเสมอ แล้วความสำเร็จจะตามมา",
        },
        en: {
          title: "Fortune Stick No. 1",
          level: "Very Auspicious",
          text: "Like the rising sun over the horizon, your intentions will gradually become clear. Past obstacles dissolve, elders lend their support, and both work and finances steadily flourish.",
          advice: "Begin with a steadfast heart and do good consistently; success will follow.",
        },
      },
      {
        no: 2,
        th: {
          title: "ใบเซียมซีที่ 2",
          level: "โชคดี",
          text: "เมฆครึ้มเริ่มเปิดทาง สิ่งที่รออยู่จะมีคำตอบ การเดินทางและการติดต่อราบรื่น ความสัมพันธ์กับคนรอบข้างอบอุ่นขึ้น หากอดทนรอจังหวะ ผลดีจะปรากฏ",
          advice: "อย่าเร่งร้อน ค่อย ๆ ก้าว ด้วยความรอบคอบจะได้สิ่งที่หวัง",
        },
        en: {
          title: "Fortune Stick No. 2",
          level: "Auspicious",
          text: "The clouds begin to part and answers arrive for what you await. Travel and communication go smoothly, and bonds with those around you grow warmer. Patience reveals good results.",
          advice: "Do not rush; step forward carefully and what you hope for will come.",
        },
      },
      {
        no: 7,
        th: {
          title: "ใบเซียมซีที่ 7",
          level: "ปานกลาง",
          text: "ดั่งเรือล่องในสายน้ำเชี่ยว ต้องตั้งสติให้มั่น ระยะนี้มีทั้งสมหวังและผิดหวังปะปน อย่าเพิ่งตัดสินใจเรื่องใหญ่ ปรึกษาผู้รู้ก่อนจะช่วยให้ผ่านพ้นไปได้ดี",
          advice: "ใช้ปัญญานำอารมณ์ ฟังความเห็นผู้หลักผู้ใหญ่ แล้วจะปลอดภัย",
        },
        en: {
          title: "Fortune Stick No. 7",
          level: "Moderate",
          text: "Like a boat on a swift current, keep your composure firm. This period mixes hope with disappointment. Avoid major decisions for now; consulting the wise will carry you through.",
          advice: "Let wisdom lead emotion and heed your elders' counsel to stay safe.",
        },
      },
      {
        no: 9,
        th: {
          title: "ใบเซียมซีที่ 9",
          level: "โชคดี",
          text: "ต้นไม้ที่ดูแลดีย่อมผลิดอกออกผล ความพยายามที่สั่งสมมากำลังเห็นผล มีข่าวดีเรื่องการงาน ผู้น้อยและบริวารให้ความร่วมมือ การเงินมั่นคงขึ้น",
          advice: "รักษาน้ำใจคนรอบข้าง แบ่งปันด้วยความเมตตา บุญจะหนุนนำ",
        },
        en: {
          title: "Fortune Stick No. 9",
          level: "Auspicious",
          text: "A well-tended tree bears fruit. The effort you have accumulated now shows results. Good news comes in work, your team cooperates, and finances grow stable.",
          advice: "Keep goodwill with those near you and share with kindness; merit will support you.",
        },
      },
      {
        no: 22,
        th: {
          title: "ใบเซียมซีที่ 22",
          level: "ดีเยี่ยม",
          text: "ดั่งจันทร์เพ็ญกระจ่างกลางเวหา จิตใจสงบและเห็นทางออกชัดเจน สิ่งที่เคยติดขัดจะค่อย ๆ คลายปม มีผู้ใหญ่เมตตาช่วยเหลือ การงานก้าวหน้า สุขภาพแข็งแรงขึ้น",
          advice: "ควรตั้งมั่นในความดี มีสติ และใช้ความอดทนในการดำเนินชีวิต",
        },
        en: {
          title: "Fortune Stick No. 22",
          level: "Excellent",
          text: "Like a full moon bright in the sky, your mind is calm and the way forward is clear. What was once stuck gradually unravels, kind elders offer help, work advances, and health improves.",
          advice: "Stay mindful, patient, and continue doing good deeds.",
        },
      },
      {
        no: 28,
        th: {
          title: "ใบเซียมซีที่ 28",
          level: "ควรระวัง",
          text: "ดั่งเดินทางในยามค่ำคืน ควรระมัดระวังเป็นพิเศษ ระยะนี้อาจมีอุปสรรคและคำพูดที่ทำให้ขุ่นเคือง อย่าหุนหัน อย่าลงทุนเสี่ยง รักษาสุขภาพและทรัพย์สินให้ดี",
          advice: "สงบใจ ลดความโลภและความโกรธ ทำบุญรักษาศีล เหตุร้ายจะกลายเป็นดี",
        },
        en: {
          title: "Fortune Stick No. 28",
          level: "Be Cautious",
          text: "Like traveling at night, take extra care. This period may bring obstacles and hurtful words. Do not act rashly or make risky investments; guard your health and assets well.",
          advice: "Calm your mind, reduce greed and anger, make merit and keep precepts; misfortune will turn to good.",
        },
      },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// ฟังก์ชันช่วยค้นหา (จุดเดียวที่ต้องแก้เมื่อย้ายไป database/API ภายหลัง)
// ────────────────────────────────────────────────────────────────────────────

/** ตรวจสอบและแปลงค่า lang จาก query ให้เป็น Locale ที่รองรับ */
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

/** วัด/ศาลเจ้าเริ่มต้น */
export function getDefaultTemple(): Temple {
  return getTemple(DEFAULT_TEMPLE_ID) ?? temples[0];
}

/** ค้นหาใบเซียมซีในวัดตามเลข — คืน undefined ถ้าไม่พบ */
export function getFortune(
  temple: Temple,
  no: number,
): Fortune | undefined {
  return temple.fortunes.find((f) => f.no === no);
}
