import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, formatDate } from "@/lib/posts";
import { SITE_URL, studio, jsonLdScript, openGraphBase, orgId, breadcrumbJsonLd } from "@/lib/site";

const description =
  "Guides from Mankrruuti Design Studio for Ahmedabad homeowners: choosing an interior designer, vastu, curtains, sofas and planning a home.";

export const metadata: Metadata = {
  title: "Journal — Interior Design Guides for Ahmedabad Homes",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { ...openGraphBase, title: `Journal | ${studio.name}`, description, url: "/blog" },
};

export default function BlogIndex() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: `${studio.name} Journal`,
      description,
      url: `${SITE_URL}/blog`,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.published,
        dateModified: p.updated,
      })),
    },
    breadcrumbJsonLd([{ name: "Journal", path: "/blog" }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <section className="wrap post__head" aria-labelledby="journal-title">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Journal</li>
          </ol>
        </nav>
        <h1 id="journal-title">Journal</h1>
        <p className="lede">Guides for Ahmedabad homeowners, from the studio in Hathijan.</p>
      </section>

      <ul className="wrap journal">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="journal__card">
              <div className="journal__img">
                <Image src={p.image.src} alt="" fill sizes="(max-width: 48rem) 100vw, 40vw" placeholder="blur" />
              </div>
              <div className="journal__text">
                <time dateTime={p.published}>{formatDate(p.published)}</time>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
