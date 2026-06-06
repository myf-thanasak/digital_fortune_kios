"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-temple-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="คำถามที่พบบ่อย"
          title="คำถามที่พบบ่อย"
          description="รวมคำถามที่ลูกค้าวัด ศาลเจ้า และองค์กรการกุศลถามบ่อยที่สุด"
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <ul className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-temple-gold/25 bg-white shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${
                        isOpen
                          ? "bg-temple-red text-temple-gold-soft"
                          : "bg-temple-gold/15 text-temple-red"
                      }`}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-heading text-base font-semibold text-temple-ink sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-temple-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed text-temple-ink/75 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
