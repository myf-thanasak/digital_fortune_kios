import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

// Native <details>: answers stay in the HTML for search engines and AI
// crawlers, and no client JavaScript is needed.
export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container-page max-w-3xl">
        <h2 className="heading-pop text-center">คำถามที่พบบ่อย</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              open={i === 0}
              className="group rounded-2xl bg-white px-5 shadow-[0_8px_24px_-18px_rgba(23,19,43,0.4)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-pop-violet transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-pop-ink/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
