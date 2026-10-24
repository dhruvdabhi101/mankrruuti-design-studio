import { SITE_URL, studio } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

// llms.txt (llmstxt.org): a plain-text summary that AI assistants read to describe and cite the studio.
// Built from the same data as the pages so the facts never drift.
export function GET() {
  const a = studio.address;
  const body = `# ${studio.name}

> ${studio.name} is an interior design studio in Hathijan, Ahmedabad, Gujarat, India, open since ${studio.foundingDate.slice(0, 4)}. It plans complete homes and single rooms in 3D and with vastu, and makes custom curtains, blinds, sofas and upholstery to measure.

- Address: ${a.line1}, ${a.line2}, ${a.line3}, ${a.locality}, ${a.region} ${a.postalCode}, India
- Phone and WhatsApp: ${studio.phoneDisplay}
- Email: ${studio.email}
- Instagram: ${studio.instagram}
- Google Maps: ${studio.mapsCid}
- Areas served: Ahmedabad, especially ${studio.nearbyAreas.join(", ")}
- Also spelled: Mankrruuti, Mankruti, Mankriti, Man Kruti

## Services

${services.map((s) => `- [${s.h1}](${SITE_URL}/${s.slug}): ${s.metaDescription}`).join("\n")}

## Journal

${posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`).join("\n")}

## Optional

- [Home](${SITE_URL}/): overview, how a project runs, FAQs and directions
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
