import type { Metadata } from "next";
import { Suspense } from "react";
import SlipView from "./SlipView";

export const metadata: Metadata = {
  title: "ใบเซียมซีดิจิทัล",
  description: "เปิดอ่านคำทำนายจากใบเซียมซีดิจิทัล",
  // หน้านี้เปิดจาก QR Code เฉพาะบุคคล จึงไม่ควรถูกจัดทำดัชนีโดยเครื่องมือค้นหา
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "ใบเซียมซีดิจิทัล",
    description: "เปิดอ่านคำทำนายจากใบเซียมซีดิจิทัล",
  },
  twitter: {
    card: "summary",
    title: "ใบเซียมซีดิจิทัล",
    description: "เปิดอ่านคำทำนายจากใบเซียมซีดิจิทัล",
  },
};

function SlipLoading() {
  return (
    <main className="grid min-h-[100dvh] place-items-center bg-temple-radial px-5">
      <div className="flex flex-col items-center gap-4 text-temple-gold-soft/80">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-temple-gold/30 border-t-temple-gold" />
        <p className="font-body text-sm">กำลังเปิดใบเซียมซี...</p>
      </div>
    </main>
  );
}

export default function SlipPage() {
  return (
    <Suspense fallback={<SlipLoading />}>
      <SlipView />
    </Suspense>
  );
}
