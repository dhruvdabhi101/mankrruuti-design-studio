import type { Faq } from "@/lib/site";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq__list">
      {faqs.map((f) => (
        <details key={f.q} className="faq__item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
