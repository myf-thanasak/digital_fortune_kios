import { ArrowUpRight } from "lucide-react";
import { clientWorks, portfolioUrl } from "@/lib/site";

export default function PortfolioSection() {
  return (
    <section id="works" className="py-10">
      <div className="container-page text-center">
        <p className="text-sm font-medium text-pop-ink/50">เคยใช้จริงที่</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {clientWorks.map((w) => (
            <li key={w.name} className="font-heading text-lg font-semibold text-pop-ink/80">
              {w.name}
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
