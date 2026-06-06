import type { Metadata, Viewport } from "next";
import { Kanit, Prompt } from "next/font/google";
import "./globals.css";
import { site, seoKeywords } from "@/lib/site";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
});

const description =
  "ระบบเซียมซีดิจิทัลสำหรับวัด ศาลเจ้า มูลนิธิ และองค์กรการกุศล ผู้ใช้งานแตะหน้าจอเสี่ยงเซียมซี อ่านคำทำนาย และร่วมบริจาคผ่าน QR Code ใช้งานได้ทั้ง Offline และ Online สอบถามรายละเอียดและขอใบเสนอราคาได้ทันที";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital เซียมซี | ระบบเซียมซีดิจิทัล พร้อมรับบริจาคผ่าน QR Code",
    template: "%s | Digital เซียมซี",
  },
  description,
  keywords: seoKeywords,
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: site.url,
    siteName: "Digital เซียมซี",
    title: "Digital เซียมซี | ระบบเซียมซีดิจิทัล พร้อมรับบริจาคผ่าน QR Code",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital เซียมซี | ระบบเซียมซีดิจิทัล พร้อมรับบริจาคผ่าน QR Code",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#7A0E12",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.company,
      url: site.url,
      telephone: "+66969754100",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+66969754100",
        contactType: "sales",
        areaServed: "TH",
        availableLanguage: ["th", "en"],
      },
    },
    {
      "@type": "Product",
      name: "Digital เซียมซี",
      description,
      category: "ระบบเซียมซีดิจิทัล / ตู้รับบริจาคดิจิทัล",
      url: site.url,
      brand: { "@type": "Brand", name: "Digital เซียมซี" },
      manufacturer: { "@id": `${site.url}/#organization` },
      keywords: seoKeywords.join(", "),
    },
    {
      "@type": "WebSite",
      url: site.url,
      name: "Digital เซียมซี",
      inLanguage: "th-TH",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${kanit.variable} ${prompt.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
