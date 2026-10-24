import type { StaticImageData } from "next/image";
import diningWalnut from "@/assets/photos/dining-walnut.jpg";

// Journal posts. Each post's page lives at app/blog/<slug>/page.tsx; this list feeds the
// journal index, the sitemap and llms.txt.
export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  image: { src: StaticImageData; alt: string };
};

export const posts: Post[] = [
  {
    slug: "top-interior-design-studios-ahmedabad",
    title: "Top 10 interior design studios in Ahmedabad (2026)",
    metaTitle: "Top 10 Interior Design Studios in Ahmedabad (2026)",
    description:
      "Ten Ahmedabad interior design studios worth shortlisting in 2026 — who runs each one, where they are, what they're known for, and how to choose the right designer for your home.",
    published: "2026-10-24",
    updated: "2026-10-24",
    image: { src: diningWalnut, alt: "Dining room with dark walnut panelling, a long table and a globe chandelier" },
  },
];

export function getPost(slug: string) {
  const p = posts.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown post: ${slug}`);
  return p;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
