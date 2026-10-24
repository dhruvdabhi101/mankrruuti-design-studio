import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// AI answer engines are named explicitly so a future blanket rule can't shut them out by accident;
// being cited by ChatGPT, Perplexity, Claude and Google's AI results is part of how the studio gets found.
const aiCrawlers = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "PerplexityBot", "Perplexity-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
