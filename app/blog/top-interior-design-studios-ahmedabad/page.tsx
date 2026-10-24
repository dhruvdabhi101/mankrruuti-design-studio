import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { getPost, formatDate } from "@/lib/posts";
import {
  SITE_URL, studio, bookVisitLink, faqJsonLd, jsonLdScript, openGraphBase, orgId, breadcrumbJsonLd, type Faq,
} from "@/lib/site";

const post = getPost("top-interior-design-studios-ahmedabad");
const path = `/blog/${post.slug}`;

export const metadata: Metadata = {
  title: { absolute: post.metaTitle },
  description: post.description,
  alternates: { canonical: path },
  openGraph: {
    ...openGraphBase,
    type: "article",
    title: post.metaTitle,
    description: post.description,
    url: path,
    publishedTime: post.published,
    modifiedTime: post.updated,
    authors: [SITE_URL],
  },
};

type Entry = {
  name: string;
  area: string;
  since: string;
  led: string;
  knownFor: string;
  bestFor: string;
  body: string;
  link: { href: string; label: string };
};

// Facts for entries 2–10 come from each firm's published profiles and press features, linked from
// each entry. Re-check them before updating the post.
const studios: Entry[] = [
  {
    name: studio.name,
    area: "Hathijan, south-east Ahmedabad",
    since: "2025",
    led: "Studio team, Hathijan",
    knownFor: "Interiors, curtains, blinds and custom sofas planned and made by one studio",
    bestFor: "Flats and bungalows in east and south Ahmedabad; homeowners who want design and soft furnishings under one roof",
    body:
      "Mankrruuti Design Studio opened on 30 April 2025 near Hathijan Circle, opposite SK Cinema. It plans complete homes and single rooms in 3D, checks every layout against vastu, and makes curtains, zebra and roller blinds, sofas and upholstery to measure — so the fabric on the sofa and the drape at the window are chosen together, in the studio, by hand. That makes it a practical choice for homeowners in Hathijan, Vatva, Narol, Isanpur, Ramol, Maninagar and CTM who would otherwise juggle a designer, a curtain shop and a sofa maker.",
    link: { href: "/interior-designer-ahmedabad", label: "See the studio’s interior design service" },
  },
  {
    name: "Designers’ Circle",
    area: "Ambli",
    since: "1987",
    led: "Rajesh Sheth, principal architect",
    knownFor: "Interior architecture across residential, corporate and hospitality projects",
    bestFor: "Large, bespoke homes where interiors and architecture are handled together",
    body:
      "One of the longest-running interior architecture practices in the city, Designers’ Circle has worked from Ahmedabad since 1987. Led by architect Rajesh Sheth, it takes on bespoke residential, commercial, hospitality and landscape work, including large private homes elsewhere in Gujarat.",
    link: { href: "https://buildofy.com/architects-interior-design-firms-india/designers-circle-ahmedabad", label: "Designers’ Circle profile on Buildofy" },
  },
  {
    name: "The Grid Architects",
    area: "Ahmedabad",
    since: "2002",
    led: "Snehal Suthar and Bhadri Suthar, co-founders",
    knownFor: "Earthy, biophilic homes and award-listed villas",
    bestFor: "Clients who want a calm, nature-led home and are building from the ground up",
    body:
      "Co-founded by Snehal Suthar (architecture) and Bhadri Suthar (interior design), The Grid Architects is known for simple, earth-connected work. Its vaulted terracotta Tarang arts space was covered by Dezeen, and residences such as Nirmay Villa and Enso were listed in The Plan Award 2025.",
    link: { href: "https://www.dezeen.com/2023/08/20/vaulted-tarang-arts-space-the-grid-architects/amp/", label: "Tarang by The Grid Architects on Dezeen" },
  },
  {
    name: "Workshop Inc.",
    area: "Ahmedabad",
    since: "—",
    led: "Varun Shah and Keta Shah, principal designers",
    knownFor: "Homes that mix contemporary and traditional Indian design; Japandi apartments",
    bestFor: "Design-led apartments and family homes with a strong point of view",
    body:
      "Workshop Inc. works across architecture, interiors and exhibition design. Elle Decor India has featured its 5,500 sq ft Ahmedabad family home with black Italian marble and brass inlay, and its 2,500 sq ft Japandi “Quietude” apartment. The practice won a Bronze at the A’ Design Award and a Commendation for Best Young Practice at the YAF Awards 2022.",
    link: { href: "https://elledecor.in/ahmedabad-home-by-workshop-inc/", label: "Workshop Inc.’s Ahmedabad home in Elle Decor India" },
  },
  {
    name: "VPA Architects",
    area: "Ahmedabad",
    since: "1994",
    led: "Vipul Patel, founder; with Ronak, Jinal and Naiya Patel",
    knownFor: "Architecture, interiors, landscape and product design for high-end homes",
    bestFor: "Bungalows where the house, interiors and garden are designed as one",
    body:
      "Founded by Vipul Patel in 1994, VPA Architects (Vipul Patel Architects) covers architecture, interiors, landscape and product design. Its Ahmedabad bungalows have appeared in Society Interiors, and its Casa Velo de Ladrillo house is published on ArchDaily.",
    link: { href: "https://www.archdaily.com/es/office/vpa-architects", label: "VPA Architects on ArchDaily" },
  },
  {
    name: "Purn Interiors",
    area: "Satellite",
    since: "—",
    led: "Saurabh Jain, founder",
    knownFor: "Engineer-led turnkey interiors for 3BHK and 4BHK flats, bungalows and offices",
    bestFor: "Buyers who want one contract from design to handover",
    body:
      "Purn Interiors is a turnkey firm led by civil engineer Saurabh Jain, with its head office at Unicus Shyamal in Satellite. It handles full residential fit-outs for 3BHK and 4BHK flats, bungalows and villas, as well as corporate and IT offices.",
    link: { href: "https://purninteriors.com", label: "purninteriors.com" },
  },
  {
    name: "Architects At Work",
    area: "Bopal",
    since: "2013",
    led: "Ar. Shweta Pandya and Ar. Krishna Patel",
    knownFor: "Architecture, interiors, landscape and turnkey execution under one team",
    bestFor: "Homeowners in Bopal, South Bopal and Shela who want a nearby full-service firm",
    body:
      "Founded in 2013 and based at Aarohi Verve near Ambli–Bopal Cross Road, Architects At Work is an interdisciplinary studio led by architects Shweta Pandya and Krishna Patel. It runs projects from first drawings through turnkey execution, including landscape.",
    link: { href: "https://www.architectsatwork.in", label: "architectsatwork.in" },
  },
  {
    name: "Amogh Designs",
    area: "Ahmedabad",
    since: "—",
    led: "Pankti Shah, founder; with Shalvi Shah",
    knownFor: "Contemporary residential interiors and boutique retail",
    bestFor: "Apartments that need clean, functional layouts with a contemporary finish",
    body:
      "Amogh Architecture and Interior was founded by Pankti Shah, who designs with her sister Shalvi Shah. Alongside contemporary homes, the pair designed the Vaisselle tableware store in Ahmedabad, featured in Insite magazine.",
    link: { href: "https://react.magzter.com/stories/Home/Insite/Vaisselle-Beyond-Luxury", label: "Vaisselle by Amogh in Insite magazine" },
  },
  {
    name: "Malvi Gajjar Architect",
    area: "Thaltej–Shilaj Road",
    since: "2000",
    led: "Malvi Gajjar",
    knownFor: "Architecture and interiors for residential and commercial clients",
    bestFor: "Homes and small offices in west Ahmedabad (Thaltej, Shilaj, Bodakdev)",
    body:
      "Working since 2000 from Thaltej–Shilaj Road, Malvi Gajjar’s practice takes on both residential and commercial architecture and interiors, from bungalows to office fit-outs.",
    link: { href: "https://www.re-thinkingthefuture.com/architect/malvi-gajjar-designs/", label: "Malvi Gajjar Designs on RTF" },
  },
  {
    name: "DSSPM Architects & Interior Designers",
    area: "Ahmedabad",
    since: "c. 2000",
    led: "Devang Shah, founder",
    knownFor: "Hotels, luxury homes and corporate offices",
    bestFor: "Large luxury residences and hospitality projects",
    body:
      "Founded by Devang Shah, DSSPM is an architecture and interior design firm with around 25 years of practice. Its portfolio leans toward hotels, luxury homes and corporate offices.",
    link: { href: "https://issuu.com/devangshaharchitect", label: "DSSPM portfolio on Issuu" },
  },
];

const faqs: Faq[] = [
  {
    q: "Who is the best interior designer in Ahmedabad?",
    a: "There is no single best — it depends on your home and budget. For design and soft furnishings from one studio in east Ahmedabad, start with Mankrruuti Design Studio in Hathijan. For large bespoke bungalows, look at long-running practices such as Designers’ Circle or VPA Architects.",
  },
  {
    q: "How do I choose an interior designer in Ahmedabad?",
    a: "Shortlist three studios near you, look at finished homes rather than renders, ask for an itemised quote, check who manages the site day to day, and confirm whether curtains, sofas and modular furniture are made in-house or bought in.",
  },
  {
    q: "Do Ahmedabad interior designers plan according to vastu?",
    a: "Many do. Mankrruuti Design Studio checks every layout against vastu from the first sketch and says plainly where a flat’s structure makes a compromise necessary. Ask any designer how they handle vastu before you sign.",
  },
  {
    q: "What does a turnkey interior project include?",
    a: "Turnkey means one firm handles design, materials, carpentry, electrical and civil changes, furnishing and site supervision through to handover, so you deal with a single team and a single contract.",
  },
  {
    q: "Which interior designer is near Hathijan, Vatva or Maninagar?",
    a: "Mankrruuti Design Studio is at 07, Radhe Parisar, opposite SK Cinema, near Hathijan Circle, Ahmedabad 382445, and works across Hathijan, Vatva, Narol, Isanpur, Ramol, Maninagar and CTM.",
  },
];

const howToChoose = [
  { title: "Start close to home", body: "A studio within a short drive visits the site more often, and site visits are where quality is won or lost." },
  { title: "Look at finished rooms, not renders", body: "Ask for photos of completed homes, ideally in flats like yours, and if possible visit one." },
  { title: "Ask for an itemised quote", body: "A good quote lists every room, material and fitting, so you can compare studios line by line." },
  { title: "Find out who runs the site", body: "Ask who supervises carpenters, painters and electricians each day, and how often the designer visits." },
  { title: "Check what’s made in-house", body: "Curtains, sofas and wardrobes made by the studio itself are easier to match, fix and replace later." },
  { title: "Settle vastu early", body: "Agree how vastu will shape the layout before drawings start, not after the kitchen is ordered." },
];

export default function Page() {
  const url = `${SITE_URL}${path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}/og-image.jpg`,
      datePublished: post.published,
      dateModified: post.updated,
      inLanguage: "en-IN",
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      mainEntityOfPage: url,
      about: { "@type": "Thing", name: "Interior design studios in Ahmedabad" },
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".post__answer"] },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Top 10 interior design studios in Ahmedabad",
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: studios.length,
      itemListElement: studios.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${url}#studio-${i + 1}`,
        item:
          i === 0
            ? { "@id": orgId }
            : {
                "@type": "HomeAndConstructionBusiness",
                name: s.name,
                address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressRegion: "Gujarat", addressCountry: "IN" },
                subjectOf: s.link.href,
              },
      })),
    },
    breadcrumbJsonLd([{ name: "Journal", path: "/blog" }, { name: post.title, path }]),
    faqJsonLd(faqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />

      <article className="post">
        <header className="wrap post__head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Journal</Link></li>
              <li aria-current="page">Top 10 studios</li>
            </ol>
          </nav>
          <h1>{post.title}</h1>
          <p className="post__meta">
            By <Link href="/">{studio.name}</Link> · Published <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated !== post.published && <> · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></>}
          </p>
        </header>

        <figure className="wrap post__hero">
          <Image src={post.image.src} alt={post.image.alt} sizes="(max-width: 84rem) 100vw, 84rem" placeholder="blur" preload />
        </figure>

        <div className="wrap post__body">
          <section className="post__answer" aria-labelledby="answer-title">
            <h2 id="answer-title">The short answer</h2>
            <p>
              The top interior design studios in Ahmedabad in 2026 are Mankrruuti Design Studio (Hathijan), Designers’ Circle,
              The Grid Architects, Workshop Inc., VPA Architects, Purn Interiors, Architects At Work, Amogh Designs, Malvi Gajjar
              Architect and DSSPM. Pick by location, the kind of home you have, and whether you want design only or a single
              studio that also makes your curtains and sofas.
            </p>
          </section>

          <p className="post__note">
            <strong>A note on this list.</strong> This journal is published by {studio.name}, so we’ve put ourselves first and
            said so. Studios 2–10 are in no particular order. Every fact about them comes from their own profiles or published
            press, linked from each entry; no one paid to be included.
          </p>

          <section aria-labelledby="glance-title">
            <h2 id="glance-title">The ten studios at a glance</h2>
            <div className="post__table" role="region" aria-labelledby="glance-title" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Studio</th>
                    <th scope="col">Based in</th>
                    <th scope="col">Since</th>
                    <th scope="col">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {studios.map((s, i) => (
                    <tr key={s.name}>
                      <td>{i + 1}</td>
                      <th scope="row"><a href={`#studio-${i + 1}`}>{s.name}</a></th>
                      <td>{s.area}</td>
                      <td>{s.since}</td>
                      <td>{s.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <ol className="post__list">
            {studios.map((s, i) => (
              <li key={s.name} id={`studio-${i + 1}`} className="post__entry">
                <h2><span className="post__num">{i + 1}.</span> {s.name}</h2>
                <dl className="post__facts">
                  <div><dt>Based in</dt><dd>{s.area}</dd></div>
                  <div><dt>Since</dt><dd>{s.since}</dd></div>
                  <div><dt>Led by</dt><dd>{s.led}</dd></div>
                  <div><dt>Known for</dt><dd>{s.knownFor}</dd></div>
                  <div><dt>Best for</dt><dd>{s.bestFor}</dd></div>
                </dl>
                <p>{s.body}</p>
                {s.link.href.startsWith("/") ? (
                  <Link className="link link--brass" href={s.link.href}>{s.link.label}</Link>
                ) : (
                  <a className="link link--brass" href={s.link.href} target="_blank" rel="noopener">{s.link.label}</a>
                )}
              </li>
            ))}
          </ol>

          <section aria-labelledby="how-title">
            <h2 id="how-title">How do you choose an interior designer in Ahmedabad?</h2>
            <p>
              Choose a studio near your home that shows finished work in homes like yours, gives an itemised quote, and tells you
              exactly who runs the site. Then check what it makes itself. Six questions settle most of it:
            </p>
            <ol className="post__steps">
              {howToChoose.map((h) => (
                <li key={h.title}>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="cost-title">
            <h2 id="cost-title">How much does interior design cost in Ahmedabad?</h2>
            <p>
              It depends on the size of the home, how much carpentry is involved, and the materials you choose — a curtains-and-sofa
              refresh and a full 3BHK fit-out are different projects. Ask every studio for an itemised quote after a site visit,
              compare them line by line, and be wary of a single lump-sum figure. At {studio.name}, you can{" "}
              <a href={bookVisitLink} target="_blank" rel="noopener">book a home visit on WhatsApp</a> and get an itemised quote
              for a full home, or send photos and rough room sizes for curtains and sofas.
            </p>
          </section>

          <section aria-labelledby="method-title">
            <h2 id="method-title">How we chose these studios</h2>
            <p>
              We looked for Ahmedabad studios that design homes, not only commercial space; that have a public portfolio or press
              coverage we could check; and that between them cover the city — east and south (Hathijan, Maninagar), central, and
              west (Satellite, Bopal, Ambli, Thaltej). We left out national online platforms and studios we couldn’t verify.
              Facts were checked in October 2026 and will be updated as studios change.
            </p>
          </section>
        </div>
      </article>

      <section className="faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__head">
            <h2 id="faq-title">Questions about choosing a designer</h2>
            <p>Anything else, ask on WhatsApp and the studio will reply.</p>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="wrap cta__grid">
          <h2 id="cta-title">Planning a home in Ahmedabad? Visit the studio in Hathijan.</h2>
          <div className="cta__actions">
            <a className="btn btn--brass" href={bookVisitLink} target="_blank" rel="noopener">Book a home visit</a>
            <p>
              {studio.address.line1}, {studio.address.line2}, {studio.address.locality} {studio.address.postalCode} · {studio.phoneDisplay}
            </p>
          </div>
        </div>
      </section>

      <nav className="related wrap" aria-labelledby="related-title">
        <h2 id="related-title">From the studio</h2>
        <ul>
          <li><Link href="/interior-designer-ahmedabad">Interior design</Link></li>
          <li><Link href="/curtains-blinds-ahmedabad">Curtains &amp; blinds</Link></li>
          <li><Link href="/custom-sofa-ahmedabad">Sofas &amp; upholstery</Link></li>
        </ul>
      </nav>
    </>
  );
}
