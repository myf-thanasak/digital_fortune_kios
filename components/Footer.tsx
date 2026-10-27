import { site } from "@/lib/site";
import { Logo } from "./Navbar";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-pop-ink/10 pb-24 pt-8 md:pb-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-pop-ink/55 sm:flex-row">
        <Logo />
        <p className="text-center">
          © {year}{" "}
          <a href="https://myfirstc.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pop-violet">
            {site.company}
          </a>{" "}
          ·{" "}
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pop-violet">
            Facebook
          </a>{" "}
          · LINE {site.lineId} · {site.phone}
        </p>
      </div>
    </footer>
  );
}
