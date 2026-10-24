// Single source of truth for the studio's name, address and phone (NAP).
// Google compares these against the Business Profile — keep them identical everywhere.

// Canonical domain. www is primary; the bare mankrruuti.com should redirect here (set in Vercel → Domains).
export const SITE_URL = "https://www.mankrruuti.com";

export const studio = {
  name: "Mankrruuti Design Studio",
  shortName: "Mankrruuti",
  tagline: "Your space, in harmony.",
  phoneDisplay: "+91 97230 83636",
  phoneHref: "tel:+919723083636",
  phoneSchema: "+91-97230-83636",
  whatsapp: "919723083636",
  email: "mankrruutidesignstudio@gmail.com",
  instagram: "https://www.instagram.com/mankrruuti_design_studio/",
  instagramHandle: "@mankrruuti_design_studio",
  mapsUrl: "https://maps.app.goo.gl/sBaKfDP6giR5Kubi8",
  mapsCid: "https://maps.google.com/?cid=6625692410013709950",
  mapsEmbed:
    "https://maps.google.com/maps?q=Mankrruuti%20Design%20Studio%2C%20Radhe%20Parisar%2C%20Hathijan%2C%20Ahmedabad%20382445&z=16&output=embed",
  foundingDate: "2025-04-30",
  // Localities the studio regularly works in; used in structured data and llms.txt.
  nearbyAreas: ["Hathijan", "Vatva", "Narol", "Isanpur", "Ramol", "Maninagar", "CTM", "Vastral"],
  address: {
    line1: "07, Radhe Parisar",
    line2: "Opposite SK Cinema, near Hathijan Circle",
    line3: "Hathijan–Mahemdavad Road",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "382445",
    country: "IN",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${studio.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const bookVisitLink = whatsappLink(
  "Hello Mankrruuti, I'd like to book a home visit."
);

// Every page's openGraph must spread this: Next replaces nested metadata objects rather than merging them,
// so a page that sets its own openGraph would otherwise drop the share image and site name.
export const ogImage = { url: "/og-image.jpg", width: 1200, height: 630, alt: studio.name };
export const openGraphBase = { type: "website" as const, locale: "en_IN", siteName: studio.name, images: [ogImage] };

export const orgId = `${SITE_URL}/#studio`;

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
