"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type Room = { label: string; src: StaticImageData; alt: string; href?: string };

// A swipeable strip of rooms. Native scroll + scroll-snap does the work;
// the arrow buttons are a convenience for mouse users.
export function RoomsRail({ rooms }: { rooms: Room[] }) {
  const rail = useRef<HTMLUListElement>(null);

  function step(dir: 1 | -1) {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const by = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * by, behavior: "smooth" });
  }

  return (
    <div className="rail">
      <div className="rail__controls" aria-hidden="true">
        <button type="button" tabIndex={-1} onClick={() => step(-1)} aria-label="Previous rooms">
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button type="button" tabIndex={-1} onClick={() => step(1)} aria-label="Next rooms">
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <ul className="rail__list" ref={rail}>
        {rooms.map((r) => {
          const body = (
            <>
              <div className="rail__img">
                <Image src={r.src} alt={r.alt} sizes="(max-width: 48rem) 72vw, 24rem" placeholder="blur" />
              </div>
              <span className="rail__label">{r.label}</span>
            </>
          );
          return (
            <li key={r.label} className="rail__item">
              {r.href ? <Link href={r.href}>{body}</Link> : <div>{body}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
