import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

// Bump when page content changes meaningfully.
const lastModified = "2026-10-24";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${SITE_URL}/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/blog`, lastModified: posts[0]?.updated ?? lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
