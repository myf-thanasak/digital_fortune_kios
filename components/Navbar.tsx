"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      {/* Shaking fortune cylinder with one stick jumping out; also app/icon.svg. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 drop-shadow-[0_6px_12px_rgba(255,61,127,0.45)]"
      />
      <span className="font-heading text-lg font-bold tracking-tight text-pop-ink">
        ดิจิทัลเซียมซี
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 shadow-[0_6px_24px_-14px_rgba(23,19,43,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" aria-label="ดิจิทัลเซียมซี หน้าแรก">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pop-ink/70 transition-colors hover:text-pop-violet"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line !px-5 !py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            ทัก LINE
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-pop-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="container-page flex flex-col pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-pop-ink/80 hover:bg-pop-lilac"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
