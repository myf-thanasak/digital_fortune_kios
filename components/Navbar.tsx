"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { SiamsiMark } from "./svg/SiamsiMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-temple-gold/20 bg-temple-ink/95 backdrop-blur shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <SiamsiMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
          <span className="font-heading text-lg font-bold leading-none tracking-tight text-temple-cream sm:text-xl">
            ดิจิทัล<span className="gold-text">เซียมซี</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-temple-cream/80 transition-colors hover:text-temple-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            <FileText className="h-4 w-4" />
            ขอใบเสนอราคา
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-temple-gold/30 text-temple-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* เมนูมือถือ */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`origin-top overflow-hidden bg-temple-ink/98 backdrop-blur transition-all duration-300 ${
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-temple-cream/90 hover:bg-white/5 hover:text-temple-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <FileText className="h-4 w-4" />
              {site.ctaPrimary}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
