"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export function trackLead(source: string) {
  window.fbq?.("track", "Lead", { content_name: source });
}

// โหลด Facebook Pixel และยิง Lead อัตโนมัติเมื่อกดลิงก์ LINE หรือโทรศัพท์
// ไม่แสดงอะไรเลยถ้าไม่ได้ตั้งค่า NEXT_PUBLIC_FB_PIXEL_ID
export default function FacebookPixel() {
  useEffect(() => {
    if (!pixelId) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackLead("phone");
      else if (href.includes("line.me/")) trackLead("line");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!pixelId) return null;

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${encodeURIComponent(pixelId)}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
