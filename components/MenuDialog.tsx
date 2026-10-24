"use client";

import Link from "next/link";
import { useRef } from "react";
import { studio, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  ...services.map((s) => ({ href: `/${s.slug}`, label: s.nav })),
  { href: "/#process", label: "How a project runs" },
  { href: "/blog", label: "Journal" },
  { href: "/#visit", label: "Visit the studio" },
];

export function MenuDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
      >
        Menu
        <span className="menu-btn__lines" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <dialog ref={ref} className="menu" aria-label="Site menu" closedby="any">
        <div className="menu__inner">
          <div className="menu__top">
            <span className="menu__title">Explore</span>
            <button type="button" className="menu__close" onClick={close} autoFocus>
              Close <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="menu__body">
            <nav aria-label="Main">
              <ul className="menu__links">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={close}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu__contact">
              <div className="menu__contact-links">
                <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
                <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a>
                <a href={studio.instagram} target="_blank" rel="noopener">Instagram</a>
              </div>
              <address>
                {studio.address.line1}, {studio.address.line2}
                <br />
                {studio.address.line3}, {studio.address.locality} {studio.address.postalCode}
              </address>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
