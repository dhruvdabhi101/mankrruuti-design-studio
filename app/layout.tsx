import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/Icons";
import { SITE_URL, studio, whatsappLink, jsonLdScript } from "@/lib/site";
import { services } from "@/lib/services";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mankrruuti Design Studio | Interior Designer in Hathijan, Ahmedabad",
    template: "%s | Mankrruuti Design Studio, Ahmedabad",
  },
  description:
    "Interior design studio in Hathijan, Ahmedabad. Home interiors planned in 3D and with vastu, custom curtains and blinds, sofas and upholstery. Call +91 97230 83636.",
  applicationName: studio.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: studio.name,
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: studio.name }],
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#103D4C",
  viewportFit: "cover",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#studio`,
  name: studio.name,
  alternateName: ["Mankrruuti", "Mankruti Design Studio", "Mankruti Interiors"],
  description:
    "Interior design studio in Hathijan, Ahmedabad: interior design consultation, 3D visualisation, space planning, vastu-based layouts, turnkey interiors, custom curtains and blinds, sofas, mattresses and home furnishings.",
  slogan: studio.tagline,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-stacked.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: studio.phoneSchema,
  email: studio.email,
  foundingDate: studio.foundingDate,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${studio.address.line1}, ${studio.address.line2}, ${studio.address.line3}`,
    addressLocality: studio.address.locality,
    addressRegion: studio.address.region,
    postalCode: studio.address.postalCode,
    addressCountry: studio.address.country,
  },
  hasMap: studio.mapsCid,
  areaServed: { "@type": "City", name: "Ahmedabad" },
  sameAs: [studio.instagram, studio.mapsCid],
  knowsAbout: ["Interior design", "Vastu", "3D visualisation", "Space planning", "Custom curtains", "Zebra blinds", "Custom sofas", "Modular furniture"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.h1, url: `${SITE_URL}/${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${jost.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(businessJsonLd)} />
        <a className="skip" href="#main">Skip to content</a>
        <Masthead />
        <main id="main">{children}</main>
        <Footer />
        <a className="wa" href={whatsappLink()} target="_blank" rel="noopener" aria-label="Chat with the studio on WhatsApp">
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
