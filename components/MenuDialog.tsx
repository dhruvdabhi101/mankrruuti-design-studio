"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { studio, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  ...services.map((s) => ({ href: `/${s.slug}`, label: s.nav })),
  { href: "/#process", label: "How a project runs" },
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

      <dialog ref={ref} className="menu" aria-label="Site menu">
        <div className="wrap menu__inner">
          <div className="menu__top">
            <Image src="/brand/logo-horizontal-light.png" alt="Mankrruuti Design Studio" width={880} height={216} />
            <button type="button" className="menu__close" onClick={close} autoFocus>
              Close
            </button>
          </div>

          <div className="menu__body">
            <nav aria-label="Main">
              <ul className="menu__links">
                {links.map((l, i) => (
                  <li key={l.href} style={{ "--i": i } as CSSProperties}>
                    <Link href={l.href} onClick={close}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu__contact">
              <address>
                {studio.address.line1}, {studio.address.line2}
                <br />
                {studio.address.line3}, {studio.address.locality} {studio.address.postalCode}
              </address>
              <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
              <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a>
              <a href={studio.instagram} target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>

          <p className="menu__foot">{studio.tagline}</p>
        </div>
      </dialog>
    </>
  );
}
