import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
      ) : null}
      <h2
        className={`heading-lg ${dark ? "text-temple-cream" : "text-temple-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-temple-cream/70" : "text-temple-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
