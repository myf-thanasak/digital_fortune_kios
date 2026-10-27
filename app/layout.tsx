import type { Metadata, Viewport } from "next";
import { Kanit, Prompt } from "next/font/google";
import "./globals.css";
import { site, seoKeywords, packages, faqs } from "@/lib/site";
import FacebookPixel from "@/components/FacebookPixel";

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

const title = "เขย่าเซียมซีลุ้นรางวัล | เกมแจกรางวัลสำหรับร้านค้า คาเฟ่ แบรนด์";
const description =
  "เกมลุ้นรางวัลแทนหมุนวงล้อ ลูกค้าสแกน QR แล้วเขย่ามือถือเหมือนเขย่าเซียมซี รู้ผลทันที ไม่ต้องโหลดแอป ร้านตั้งของรางวัลและสต็อกเองได้ 4,900 บาท/แคมเปญ 30 วัน มีแพ็กเซียมซีปีใหม่ออฟฟิศ วัด/ศาลเจ้า และตรุษจีน";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | ดิจิทัลเซียมซี",
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
    siteName: "ดิจิทัลเซียมซี",
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "เขย่าเซียมซีลุ้นรางวัล" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "marketing",
};

export const viewport: Viewport = {
  themeColor: "#6C47FF",
  width: "device-width",
  initialScale: 1,
};

// Structured data so search engines and AI assistants can answer
// "what is it, who is it for, how much" straight from the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.company,
      alternateName: "My First Child",
      url: site.url,
      telephone: "+66969754100",
      sameAs: [site.facebookUrl, site.lineUrl, "https://myfirstc.com/"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+66969754100",
        contactType: "sales",
        areaServed: "TH",
        availableLanguage: ["th", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: "ดิจิทัลเซียมซี",
      inLanguage: "th-TH",
      publisher: { "@id": `${site.url}/#organization` },
    },
    ...packages.map((p) => ({
      "@type": "Service",
      "@id": `${site.url}/#${p.id}`,
      name: p.name,
      serviceType: "เกมเซียมซีดิจิทัล",
      audience: { "@type": "Audience", audienceType: p.audience },
      description: p.features.join(" · "),
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "TH",
      ...(p.priceValue
        ? {
            offers: {
              "@type": "Offer",
              price: p.priceValue,
              priceCurrency: "THB",
              description: p.priceNote,
              url: `${site.url}/#packages`,
            },
          }
        : {}),
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
        <FacebookPixel />
      </body>
    </html>
  );
}
