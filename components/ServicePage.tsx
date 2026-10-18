import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Frame } from "./Frame";
import { FaqList } from "./FaqList";
import { RoomsRail } from "./RoomsRail";
import { getService, services } from "@/lib/services";
import { SITE_URL, studio, bookVisitLink, faqJsonLd, jsonLdScript } from "@/lib/site";

export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | ${studio.name}`, description: s.metaDescription, url: `/${s.slug}` },
  };
}

export function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  const others = services.filter((x) => x.slug !== slug);

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: s.nav, item: `${SITE_URL}/${s.slug}` },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.metaDescription,
    provider: { "@id": `${SITE_URL}/#studio` },
    areaServed: { "@type": "City", name: "Ahmedabad" },
    url: `${SITE_URL}/${s.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumbs, serviceLd, faqJsonLd(s.faqs)])} />

      <section className="svc-hero" aria-labelledby="svc-title">
        <div className="wrap svc-hero__grid">
          <div className="svc-hero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li aria-current="page">{s.nav}</li>
              </ol>
            </nav>
            <h1 id="svc-title">{s.h1}</h1>
            <p className="lede">{s.lede}</p>
            <div className="hero__actions">
              <a className="btn btn--teal" href={bookVisitLink} target="_blank" rel="noopener">Book a home visit</a>
              <a className="link" href={studio.phoneHref}>{studio.phoneDisplay}</a>
            </div>
          </div>
          <Frame
            className="svc-hero__media"
            src={s.hero.src}
            alt={s.hero.alt}
            plate="Plate I"
            note={s.hero.note}
            sizes="(max-width: 60rem) 80vw, 40vw"
          />
        </div>
      </section>

      <section className="band" aria-label={s.band.note}>
        <div className="band__media">
          <Image src={s.band.src} alt={s.band.alt} fill sizes="100vw" placeholder="blur" />
        </div>
      </section>

      <section className="rooms" aria-labelledby="gallery-title">
        <div className="wrap rooms__head">
          <h2 id="gallery-title">{s.nav}, in pictures</h2>
          <p>Swipe through.</p>
        </div>
        <RoomsRail rooms={s.gallery} />
      </section>

      <section className="includes" aria-labelledby="includes-title">
        <div className="wrap includes__grid">
          <div className="includes__head">
            <h2 id="includes-title">{s.includesTitle}</h2>
            <Frame className="includes__detail" src={s.detail.src} alt={s.detail.alt} plate="Plate III" note={s.detail.note} sizes="18rem" />
          </div>
          <ul className="includes__list">
            {s.includes.map((i) => (
              <li key={i.name}>
                <h3>{i.name}</h3>
                <p>{i.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="wrap">
          <div className="closing__text">
            <h2 id="closing-title">{s.closing.title}</h2>
            <p>{s.closing.body}</p>
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__head">
            <h2 id="faq-title">Questions about {s.nav.toLowerCase()}</h2>
            <p>Anything else, ask on WhatsApp and the studio will reply.</p>
          </div>
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="wrap cta__grid">
          <h2 id="cta-title">Visit the studio in Hathijan, or we come to you.</h2>
          <div className="cta__actions">
            <a className="btn btn--brass" href={bookVisitLink} target="_blank" rel="noopener">Book a home visit</a>
            <p>
              {studio.address.line1}, {studio.address.line2}, {studio.address.locality} {studio.address.postalCode}
            </p>
          </div>
        </div>
      </section>

      <nav className="related wrap" aria-labelledby="related-title">
        <h2 id="related-title">More from the studio</h2>
        <ul>
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}`}>{o.nav}</Link>
            </li>
          ))}
          <li><Link href="/#visit">Visit the studio</Link></li>
        </ul>
      </nav>
    </>
  );
}
