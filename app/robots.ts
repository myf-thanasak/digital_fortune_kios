import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI crawlers are named explicitly so the welcome is unambiguous; the "*"
// rule already allows them.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
