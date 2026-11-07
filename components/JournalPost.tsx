import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { formatDate, posts, type Post } from "@/lib/posts";
import {
  SITE_URL, studio, bookVisitLink, faqJsonLd, jsonLdScript,
  openGraphBase, orgId, breadcrumbJsonLd, type Faq,
} from "@/lib/site";

export function postMetadata(post: Post): Metadata {
  return {
    title: { absolute: post.metaTitle },
    description: post.description,
    authors: [{ name: studio.name, url: SITE_URL }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      ...openGraphBase,
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [SITE_URL],
    },
  };
}

export function JournalPost({ post, answer, faqs, children }: {
  post: Post;
  answer: string;
  faqs: Faq[];
  children: ReactNode;
}) {
  const path = `/blog/${post.slug}`;
  const url = `${SITE_URL}${path}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      image: new URL(post.image.src.src, SITE_URL).href,
      datePublished: post.published,
      dateModified: post.updated,
      inLanguage: "en-IN",
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      mainEntityOfPage: url,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".post__answer"] },
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
              <li aria-current="page">Guide</li>
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
            <p>{answer}</p>
          </section>
          {children}
        </div>
      </article>
      <section className="faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__head">
            <h2 id="faq-title">Common questions</h2>
            <p>Have a question about your room? Ask the studio on WhatsApp.</p>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>
      <section className="cta" aria-labelledby="cta-title">
        <div className="wrap cta__grid">
          <h2 id="cta-title">Bring your plans and samples to the studio in Hathijan.</h2>
          <div className="cta__actions">
            <a className="btn btn--brass" href={bookVisitLink} target="_blank" rel="noopener">Book a home visit</a>
            <p>{studio.address.line1}, {studio.address.line2}, {studio.address.locality} {studio.address.postalCode} · {studio.phoneDisplay}</p>
          </div>
        </div>
      </section>
      <nav className="related wrap" aria-labelledby="related-title">
        <h2 id="related-title">Keep planning your home</h2>
        <ul>
          <li><Link href={`/${post.serviceSlug}`}>Explore this service</Link></li>
          {posts.filter((p) => p.slug !== post.slug).map((p) => (
            <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
          ))}
          <li><Link href="/blog">All journal guides</Link></li>
        </ul>
      </nav>
    </>
  );
}
