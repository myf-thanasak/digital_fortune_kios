import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clientWorks, portfolioUrl } from "@/lib/site";

export default function PortfolioSection() {
  return (
    <section id="works" className="py-10">
      <div className="container-page text-center">
        <p className="text-sm font-medium text-pop-ink/50">เคยใช้จริงที่</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-75">
          {clientWorks.map((w) => (
            <li key={w.name}>
              {w.logo ? (
                <Image
                  src={w.logo.src}
                  alt={w.name}
                  width={w.logo.width}
                  height={w.logo.height}
                  className={`w-auto ${w.logo.className}`}
                />
              ) : (
                <span className="font-heading text-xl font-bold text-pop-ink">{w.name}</span>
              )}
            </li>
          ))}
        </ul>
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-pop-violet hover:text-pop-pink"
        >
          ดูรีวิวผลงาน
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
