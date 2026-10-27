import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clientWorks, portfolioUrl } from "@/lib/site";

export default function PortfolioSection() {
  return (
    <section id="works" className="py-8 sm:py-10">
      <div className="container-page">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-8 shadow-[0_10px_30px_-20px_rgba(23,19,43,0.35)] sm:px-10">
          <p className="text-center font-heading text-base font-semibold text-pop-ink/60">
            ใช้งานจริงกับแบรนด์ชั้นนำ
          </p>

          {/* Equal cells so wide wordmarks and square marks share one baseline. */}
          <ul className="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-8 lg:grid-cols-5">
            {clientWorks.map((w, i) => (
              <li
                key={w.name}
                className={`flex h-20 items-center justify-center ${
                  // Odd one out on 2-column phones sits centred across both.
                  i === clientWorks.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Image
                  src={w.logo.src}
                  alt={w.name}
                  width={w.logo.width}
                  height={w.logo.height}
                  className={`w-auto max-w-full opacity-80 transition-opacity hover:opacity-100 ${w.logo.className}`}
                />
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-pop-lilac px-4 py-2 text-sm font-semibold text-pop-violet transition-colors hover:bg-pop-violet hover:text-white"
            >
              ดูรีวิวผลงาน
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
