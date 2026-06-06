# โฟลเดอร์ public — สำหรับใส่ภาพจริง

วางไฟล์ภาพจริงของคุณในโฟลเดอร์นี้ แล้วอ้างอิงด้วยพาธ `/ชื่อไฟล์`

## จุดที่แนะนำให้สลับเป็นภาพถ่ายจริง

- **ตู้ Kiosk / Digital Signage ในหน้า Hero**
  - แก้ไขไฟล์ `components/svg/KioskMockup.tsx`
  - หรือแทนที่การเรียก `<KioskMockup />` ใน `components/Hero.tsx` ด้วย:
    ```tsx
    import Image from "next/image";
    <Image src="/kiosk.png" alt="ตู้ Digital เซียมซี" width={420} height={640} priority />
    ```

- **QR Code บริจาคจริง**
  - แทนที่ `<QrGraphic />` (ใน `KioskMockup.tsx`) ด้วย:
    ```tsx
    import Image from "next/image";
    <Image src="/qr-donate.png" alt="QR Code รับบริจาค" width={68} height={68} />
    ```

- **OG Image (แชร์ลิงก์บนโซเชียล)**
  - วางไฟล์ `public/og-image.png` (ขนาดแนะนำ 1200×630)
  - แล้วเพิ่มใน `app/layout.tsx` ที่ `openGraph.images` และ `twitter.images`:
    ```ts
    openGraph: { images: ["/og-image.png"], ... }
    ```

## ไฟล์ที่อาจต้องการเพิ่ม

- `favicon.ico` หรือ `app/icon.png` — ไอคอนเว็บไซต์
- `kiosk.png`, `qr-donate.png`, `temple-bg.jpg` — ภาพประกอบจริง
