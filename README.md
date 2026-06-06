# Digital เซียมซี — Sale Page

เว็บไซต์ Sale Page ภาษาไทยสำหรับสินค้า **Digital เซียมซี** — ระบบเซียมซีดิจิทัล พร้อมรับบริจาคผ่าน QR Code สำหรับวัด ศาลเจ้า มูลนิธิ และองค์กรการกุศล

โทน: **Premium Thai Temple Tech** (แดงเข้ม / ทอง / ขาวครีม / ดำ) · ฟอนต์ **Kanit + Prompt**

## เทคโนโลยี

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** (ธีมสีกำหนดเองใน `tailwind.config.ts`)
- **lucide-react** (ไอคอน)
- ฟอนต์ผ่าน `next/font/google`

## การติดตั้งและรัน

> หมายเหตุ (Windows + PowerShell): หาก `npm` ถูกบล็อกด้วย Execution Policy ให้ใช้ `npm.cmd` แทน

```bash
npm install      # หรือ npm.cmd install
npm run dev      # หรือ npm.cmd run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

คำสั่งอื่น ๆ:

```bash
npm run build    # build สำหรับ production
npm run start    # รัน production server
```

## โครงสร้างโปรเจกต์

```
app/
  layout.tsx        # ฟอนต์ + SEO metadata + JSON-LD
  page.tsx          # ประกอบทุก section
  globals.css       # Tailwind + utility ของธีม
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
components/          # แต่ละ section + ส่วนประกอบ UI
  svg/              # กราฟิก SVG (Kiosk, QR, ลายไทย)
lib/site.ts          # ★ เนื้อหา/ข้อความ/ช่องทางติดต่อทั้งหมด
public/              # วางภาพจริง (ดู public/README.md)
```

## แก้ไขเนื้อหา

แก้ข้อความ ฟีเจอร์ FAQ และช่องทางติดต่อทั้งหมดได้ที่ **`lib/site.ts`** ไฟล์เดียว
(เบอร์โทร `096-975-4100`, LINE `@myfirstc`, โดเมน `ดิจิทัลเซียมซี.com`)

## ฟอร์มขอใบเสนอราคา

ฟอร์มไม่ต้องใช้ backend — เมื่อกด **"ขอใบเสนอราคา"** ระบบจะ:

1. รวมข้อมูลเป็นข้อความสรุป
2. คัดลอกลงคลิปบอร์ดอัตโนมัติ
3. เปิดแชต LINE `@myfirstc` ให้ทันที (ผู้ใช้แค่วางข้อความแล้วกดส่ง)

พร้อมปุ่มสำรอง **โทร** และ **เปิด LINE อีกครั้ง**

## การสลับเป็นภาพถ่ายจริง

ดูคำแนะนำใน [`public/README.md`](./public/README.md) — รองรับการแทนที่ Mockup Kiosk, QR Code และ OG Image ด้วยไฟล์จริงได้ง่าย

## SEO

- `<html lang="th">`, meta title/description/keywords ครบ
- Open Graph + Twitter Card
- JSON-LD: `Organization` + `Product` + `WebSite`
- `sitemap.xml` + `robots.txt`
- โดเมนเป้าหมาย: **ดิจิทัลเซียมซี.com** (ตั้งค่าใน `lib/site.ts` → `site.url`)

## หมายเหตุ

- หน้าเว็บ **ไม่แสดงราคา** ตามข้อกำหนด — ใช้ข้อความ "สอบถามรายละเอียดและขอใบเสนอราคา" แทน
- รองรับ Responsive (Desktop / Tablet / Mobile) พร้อม Sticky Contact Bar (โทร/LINE) บนมือถือ
