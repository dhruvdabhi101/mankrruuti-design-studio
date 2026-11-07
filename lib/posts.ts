import type { StaticImageData } from "next/image";
import diningWalnut from "@/assets/photos/dining-walnut.jpg";
import studioSketches from "@/assets/photos/studio-sketches.jpg";
import curtainsSheerDrape from "@/assets/photos/curtains-sheer-drape.jpg";
import sofaGreen from "@/assets/photos/sofa-green.jpg";

// Journal posts. Each post's page lives at app/blog/<slug>/page.tsx; this list feeds the
// journal index, the sitemap and llms.txt.
export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  serviceSlug: string;
  image: { src: StaticImageData; alt: string };
};

export const posts: Post[] = [
  {
    slug: "2bhk-3bhk-interior-planning-ahmedabad",
    title: "Planning 2BHK and 3BHK interiors in Ahmedabad: a room-by-room checklist",
    metaTitle: "2BHK & 3BHK Interior Planning Guide | Ahmedabad",
    description:
      "Plan your Ahmedabad flat before work starts: room layouts, storage, electrical points, material choices and the details to compare in an interior design quote.",
    published: "2026-11-07",
    updated: "2026-11-07",
    serviceSlug: "interior-designer-ahmedabad",
    image: { src: studioSketches, alt: "Interior sketches displayed beside a sunlit window with sheer curtains" },
  },
  {
    slug: "curtains-vs-blinds-ahmedabad",
    title: "Curtains or blinds for an Ahmedabad home? A room-by-room guide",
    metaTitle: "Curtains vs Blinds for Ahmedabad Homes | Room Guide",
    description:
      "Compare curtains, sheers, zebra and roller blinds for Ahmedabad bedrooms, living rooms and studies, with advice on privacy, sunlight, measuring and cleaning.",
    published: "2026-11-07",
    updated: "2026-11-07",
    serviceSlug: "curtains-blinds-ahmedabad",
    image: { src: curtainsSheerDrape, alt: "Taupe curtains layered over white sheers beside a bright window" },
  },
  {
    slug: "custom-sofa-buying-guide-ahmedabad",
    title: "Buying a custom sofa in Ahmedabad: size, comfort, fabric and delivery",
    metaTitle: "Custom Sofa Buying Guide | Ahmedabad Homes",
    description:
      "A practical custom sofa checklist for Ahmedabad homes: measure the room and delivery route, test seat comfort, compare fabrics and confirm the written specification.",
    published: "2026-11-07",
    updated: "2026-11-07",
    serviceSlug: "custom-sofa-ahmedabad",
    image: { src: sofaGreen, alt: "Green upholstered sofa with patterned cushions and a wooden side table" },
  },
  {
    slug: "top-interior-design-studios-ahmedabad",
    title: "Top 10 interior design studios in Ahmedabad (2026)",
    metaTitle: "Top 10 Interior Design Studios in Ahmedabad (2026)",
    description:
      "Ten Ahmedabad interior design studios worth shortlisting in 2026 — who runs each one, where they are, what they're known for, and how to choose the right designer for your home.",
    published: "2026-10-24",
    updated: "2026-10-24",
    serviceSlug: "interior-designer-ahmedabad",
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
