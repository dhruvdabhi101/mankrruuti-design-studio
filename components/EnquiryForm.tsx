"use client";

import { useState, type FormEvent } from "react";
import { studio, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const NEEDS = [
  "Full home interior",
  "One room",
  "Curtains or blinds",
  "Sofa or upholstery",
  "Modular kitchen or wardrobe",
  "Something else",
];

// There is no server: the enquiry opens as a prefilled WhatsApp message to the studio.
export function EnquiryForm() {
  const [nameError, setNameError] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      setNameError(true);
      e.currentTarget.querySelector<HTMLInputElement>("#f-name")?.focus();
      return;
    }
    const area = String(data.get("area") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Hello Mankrruuti, I'd like to enquire about a project.",
      `Name: ${name}`,
      area && `Area: ${area}`,
      `Looking for: ${data.get("need")}`,
      message && `Details: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input
            id="f-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={nameError}
            aria-describedby={nameError ? "f-name-error" : undefined}
            onInput={() => nameError && setNameError(false)}
          />
          {nameError && (
            <span id="f-name-error" className="field__error">
              Add your name so we know who to reply to.
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="f-area">Area in Ahmedabad</label>
          <input id="f-area" name="area" type="text" autoComplete="address-level3" placeholder="Maninagar, Vastral, Nikol…" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-need">What are you planning?</label>
        <select id="f-need" name="need" defaultValue={NEEDS[0]}>
          {NEEDS.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-message">Anything we should know</label>
        <textarea id="f-message" name="message" placeholder="Flat size, rooms, when you move in, a style you like" />
      </div>
      <div className="form__foot">
        <button type="submit" className="btn btn--teal">
          <WhatsAppIcon />
          Send on WhatsApp
        </button>
        <p className="form__note">
          Or call <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
        </p>
      </div>
    </form>
  );
}
