import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { EnquiryForm } from "@/components/EnquiryForm";
import { RoomsRail, type Room } from "@/components/RoomsRail";
import { MailIcon, PhoneIcon, PinIcon, InstagramIcon } from "@/components/Icons";
import { studio, bookVisitLink, faqJsonLd, jsonLdScript, type Faq } from "@/lib/site";

import studioSketches from "@/assets/photos/studio-sketches.jpg";
import livingCurvedSofa from "@/assets/photos/living-curved-sofa.jpg";
import livingCurtains from "@/assets/photos/living-curtains.jpg";
import livingDusk from "@/assets/photos/living-dusk.jpg";
import bedroomSoft from "@/assets/photos/bedroom-soft.jpg";
import bedroomHeadboard from "@/assets/photos/bedroom-headboard.jpg";
import kitchenTeal from "@/assets/photos/kitchen-teal.jpg";
import kitchenWood from "@/assets/photos/kitchen-wood.jpg";
import diningWalnut from "@/assets/photos/dining-walnut.jpg";
import wardrobeOak from "@/assets/photos/wardrobe-oak.jpg";
import poojaNiche from "@/assets/photos/pooja-niche.jpg";
import curtainsSheerDrape from "@/assets/photos/curtains-sheer-drape.jpg";
import curtainTieback from "@/assets/photos/curtain-tieback.jpg";
import sheerWindow from "@/assets/photos/sheer-window.jpg";
import armchairCream from "@/assets/photos/armchair-cream.jpg";
import sofaGreen from "@/assets/photos/sofa-green.jpg";
import armchairCushions from "@/assets/photos/armchair-cushions.jpg";
import fabricFolds from "@/assets/photos/fabric-folds.jpg";
import swatchHands from "@/assets/photos/swatch-hands.jpg";
import swatchesSketches from "@/assets/photos/swatches-sketches.jpg";
import handloomMarket from "@/assets/photos/handloom-market.jpg";

const rooms: Room[] = [
  { label: "Living rooms", src: livingCurvedSofa, alt: "Sunlit living room with a curved cream sofa and round timber tables", href: "/interior-designer-ahmedabad" },
  { label: "Bedrooms", src: bedroomSoft, alt: "Soft bedroom in cream and blush with a low upholstered bed", href: "/interior-designer-ahmedabad" },
  { label: "Kitchens", src: kitchenWood, alt: "Warm timber kitchen opening onto a dining table with pendant lights", href: "/interior-designer-ahmedabad" },
  { label: "Dining", src: diningWalnut, alt: "Dining room with dark walnut panelling, a long table and a globe chandelier", href: "/interior-designer-ahmedabad" },
  { label: "Pooja rooms", src: poojaNiche, alt: "Pooja wall with carved lotus niches and warm lighting", href: "/interior-designer-ahmedabad" },
  { label: "Bedroom details", src: bedroomHeadboard, alt: "Upholstered headboard with a floating bedside table", href: "/interior-designer-ahmedabad" },
  { label: "Curtains", src: curtainsSheerDrape, alt: "Floor-length drapes framing white sheers", href: "/curtains-blinds-ahmedabad" },
  { label: "Sofas", src: sofaGreen, alt: "Green sofa with soft striped cushions", href: "/custom-sofa-ahmedabad" },
];

type Tile = { label: string; href: string; src: StaticImageData; alt: string; className: string };
const tiles: Tile[] = [
  { label: "Complete interiors", href: "/interior-designer-ahmedabad", src: kitchenTeal, alt: "Kitchen with dark fluted cabinets, a timber island and teal bar stools", className: "tile--a" },
  { label: "Curtains & blinds", href: "/curtains-blinds-ahmedabad", src: sheerWindow, alt: "Sheer curtains glowing in morning light", className: "tile--b" },
  { label: "Sofas & upholstery", href: "/custom-sofa-ahmedabad", src: armchairCream, alt: "Cream armchair with tan leather sides", className: "tile--c" },
  { label: "Bedrooms & wardrobes", href: "/interior-designer-ahmedabad", src: wardrobeOak, alt: "Full-height oak wardrobe with mirrored doors in a bright bedroom", className: "tile--d" },
];

const steps = [
  { title: "Meet & measure", body: "We visit and measure your home." },
  { title: "Plan in 3D", body: "See every room before it’s built." },
  { title: "Choose materials", body: "Pick fabrics and finishes in the studio." },
  { title: "Build & hand over", body: "We run the site, you get the keys." },
];

const instagram: { src: StaticImageData; alt: string }[] = [
  { src: livingCurtains, alt: "Bright living room with grey curtains and a low white sofa" },
  { src: curtainTieback, alt: "Cream curtain held with a braided tie-back" },
  { src: armchairCushions, alt: "Olive armchair with terracotta cushions" },
  { src: swatchesSketches, alt: "Fabric swatches and sketches on a table" },
  { src: diningWalnut, alt: "Walnut dining room with a globe chandelier" },
  { src: handloomMarket, alt: "Handloom rugs and cushions in warm colours" },
];

const faqs: Faq[] = [
  { q: "What is Mankrruuti Design Studio?", a: "An interior design studio in Hathijan, Ahmedabad, open since April 2025. We plan homes in 3D and with vastu, and make curtains, blinds, sofas and upholstery to measure, so a whole home can be designed and furnished by one studio." },
  { q: "Do you design interiors according to vastu?", a: "Yes. Every layout is planned with vastu, and we say plainly where a flat’s structure makes a compromise necessary." },
  { q: "Can I see my room before work starts?", a: "Yes. You get 3D views of each room before anything is ordered or built." },
  { q: "Do you only make curtains and sofas, or full home interiors?", a: "Both — one set of curtains, one sofa, or a complete home." },
  { q: "Where is the studio?", a: "07, Radhe Parisar, opposite SK Cinema, near Hathijan Circle, Hathijan–Mahemdavad Road, Ahmedabad 382445." },
  { q: "How do I get a quote?", a: "WhatsApp a few photos and rough room sizes to +91 97230 83636, or visit the studio. For full homes we visit first, then share an itemised quote." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image
            src={studioSketches}
            alt="Sunlit room with sheer curtains and framed design drawings along a warm plaster wall"
            fill
            sizes="100vw"
            placeholder="blur"
            preload
          />
        </div>
        <div className="placard hero__placard">
          <span className="placard__plate">Interior design studio, Hathijan, Ahmedabad</span>
          <h1 id="hero-title">Interiors, curtains and sofas, planned as one.</h1>
          <div className="hero__actions">
            <a className="btn btn--teal" href={bookVisitLink} target="_blank" rel="noopener">
              Book a home visit
            </a>
            <a className="link" href={studio.phoneHref}>
              {studio.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="rooms" aria-labelledby="rooms-title">
        <div className="wrap rooms__head">
          <h2 id="rooms-title">Every room in the house</h2>
          <p>Swipe through the rooms we design and furnish.</p>
        </div>
        <RoomsRail rooms={rooms} />
      </section>

      <section className="wrap mosaic" aria-labelledby="services-title">
        <h2 id="services-title" className="visually-hidden">What the studio does</h2>
        {tiles.map((t) => (
          <Link key={t.label} href={t.href} className={`tile ${t.className}`}>
            <Image src={t.src} alt={t.alt} fill sizes="(max-width: 48rem) 100vw, 50vw" placeholder="blur" />
            <span className="tile__label">{t.label}</span>
          </Link>
        ))}
      </section>

      <section className="band" aria-labelledby="vastu-title">
        <div className="band__media">
          <Image src={livingDusk} alt="Living room at dusk with deep sofas and evening light from tall windows" fill sizes="100vw" placeholder="blur" />
        </div>
        <div className="placard placard--teal band__placard">
          <h2 id="vastu-title">Planned with vastu, from the first sketch.</h2>
        </div>
      </section>

      <section className="materials" aria-labelledby="materials-title">
        <div className="wrap materials__grid">
          <div className="materials__head">
            <h2 id="materials-title">Touch it before it’s made.</h2>
            <p>Fabrics, foams and finishes, chosen by hand in the studio.</p>
            <div className="made__links">
              <Link className="link link--brass" href="/curtains-blinds-ahmedabad">Curtains & blinds</Link>
              <Link className="link link--brass" href="/custom-sofa-ahmedabad">Sofas & upholstery</Link>
            </div>
          </div>
          <figure className="mat mat--1"><Image src={swatchHands} alt="Hands choosing between fabric and colour samples" fill sizes="(max-width: 48rem) 60vw, 30vw" placeholder="blur" /></figure>
          <figure className="mat mat--2"><Image src={fabricFolds} alt="Folded upholstery fabrics in sage and oatmeal" fill sizes="(max-width: 48rem) 40vw, 20vw" placeholder="blur" /></figure>
          <figure className="mat mat--3"><Image src={curtainTieback} alt="Cream curtain with a braided tie-back" fill sizes="(max-width: 48rem) 40vw, 20vw" placeholder="blur" /></figure>
          <figure className="mat mat--4"><Image src={swatchesSketches} alt="Fabric swatches beside interior sketches" fill sizes="(max-width: 48rem) 60vw, 30vw" placeholder="blur" /></figure>
        </div>
      </section>

      <section className="process" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <div className="process__head">
            <h2 id="process-title">How a project runs</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title} className="step">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="gram" aria-labelledby="gram-title">
        <div className="wrap">
          <div className="gram__head">
            <h2 id="gram-title">{studio.instagramHandle}</h2>
            <a className="link link--brass" href={studio.instagram} target="_blank" rel="noopener">
              <InstagramIcon />Follow on Instagram
            </a>
          </div>
          <ul className="gram__grid">
            {instagram.map((g) => (
              <li key={g.alt}>
                <a href={studio.instagram} target="_blank" rel="noopener" aria-label={`${g.alt}. See more on Instagram`}>
                  <Image src={g.src} alt="" fill sizes="(max-width: 48rem) 50vw, 17vw" placeholder="blur" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__head">
            <h2 id="faq-title">Questions we hear often</h2>
            <p>
              Still comparing studios?{" "}
              <Link className="link link--brass" href="/blog/top-interior-design-studios-ahmedabad">Top 10 interior design studios in Ahmedabad</Link>
            </p>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div className="wrap visit__grid">
          <div className="visit__where">
            <h2 id="visit-title">Visit the studio</h2>
            <address className="visit__address">
              {studio.address.line1}
              <br />
              {studio.address.line2}
              <br />
              {studio.address.line3}, {studio.address.locality} {studio.address.postalCode}
            </address>
            <div className="visit__lines">
              <a href={studio.phoneHref}><PhoneIcon />{studio.phoneDisplay}</a>
              <a href={`mailto:${studio.email}`}><MailIcon />{studio.email}</a>
              <a href={studio.mapsUrl} target="_blank" rel="noopener"><PinIcon />Directions on Google Maps</a>
            </div>
            <div className="visit__map">
              <iframe
                title="Map showing Mankrruuti Design Studio in Hathijan, Ahmedabad"
                src={studio.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="enquiry">
            <h2>Tell us about your space</h2>
            <p>Opens as a WhatsApp message to the studio.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
