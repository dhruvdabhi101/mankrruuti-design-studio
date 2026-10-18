import Image from "next/image";
import Link from "next/link";
import { studio, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__mast">
          <div className="foot__brand">
            <Image src="/brand/logo-stacked-light.png" alt="Mankrruuti Design Studio" width={800} height={601} />
            <p className="foot__tag">{studio.tagline}</p>
          </div>
          <div className="foot__cols">
            <div>
              <h2>Studio</h2>
              <address>
                {studio.address.line1}
                <br />
                {studio.address.line2}
                <br />
                {studio.address.line3}
                <br />
                {studio.address.locality}, {studio.address.region} {studio.address.postalCode}
              </address>
            </div>
            <div>
              <h2>Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`}>{s.nav}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li><a href={studio.phoneHref}>{studio.phoneDisplay}</a></li>
                <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href={`mailto:${studio.email}`}>Email</a></li>
              </ul>
            </div>
            <div>
              <h2>Elsewhere</h2>
              <ul>
                <li><a href={studio.instagram} target="_blank" rel="noopener">Instagram</a></li>
                <li><a href={studio.mapsUrl} target="_blank" rel="noopener">Google Maps</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot__base">
          <p>© 2025–2026 {studio.name}, Ahmedabad</p>
          <p>Photography for illustration, via Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
