import type { StaticImageData } from "next/image";
import type { Faq } from "./site";

import livingCurvedSofa from "@/assets/photos/living-curved-sofa.jpg";
import livingDusk from "@/assets/photos/living-dusk.jpg";
import studioSketches from "@/assets/photos/studio-sketches.jpg";
import curtainsSheerDrape from "@/assets/photos/curtains-sheer-drape.jpg";
import curtainTieback from "@/assets/photos/curtain-tieback.jpg";
import armchairCream from "@/assets/photos/armchair-cream.jpg";
import armchairBoucle from "@/assets/photos/armchair-boucle.jpg";
import linenWeave from "@/assets/photos/linen-weave.jpg";
import bedroomHearth from "@/assets/photos/bedroom-hearth.jpg";

import bedroomSoft from "@/assets/photos/bedroom-soft.jpg";
import kitchenWood from "@/assets/photos/kitchen-wood.jpg";
import kitchenTeal from "@/assets/photos/kitchen-teal.jpg";
import diningWalnut from "@/assets/photos/dining-walnut.jpg";
import wardrobeOak from "@/assets/photos/wardrobe-oak.jpg";
import poojaNiche from "@/assets/photos/pooja-niche.jpg";
import livingCurtains from "@/assets/photos/living-curtains.jpg";
import sheerWindow from "@/assets/photos/sheer-window.jpg";
import fabricFolds from "@/assets/photos/fabric-folds.jpg";
import swatchHands from "@/assets/photos/swatch-hands.jpg";
import sofaGreen from "@/assets/photos/sofa-green.jpg";
import armchairCushions from "@/assets/photos/armchair-cushions.jpg";
import handloomMarket from "@/assets/photos/handloom-market.jpg";

export type Photo = { src: StaticImageData; alt: string; note: string };

export type Service = {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  hero: Photo;
  band: Photo;
  detail: Photo;
  gallery: { label: string; src: StaticImageData; alt: string }[];
  includesTitle: string;
  includes: { name: string; body: string }[];
  closing: { title: string; body: string };
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "interior-designer-ahmedabad",
    nav: "Interior design",
    metaTitle: "Interior Designer in Ahmedabad",
    metaDescription:
      "Home interior design in Ahmedabad by Mankrruuti Design Studio, Hathijan. Space planning, 3D visualisation, vastu-based layouts and turnkey execution for flats and bungalows.",
    h1: "Interior designer in Ahmedabad",
    lede:
      "Complete homes and single rooms for flats, bungalows and offices across Ahmedabad — planned in 3D, checked against vastu, and run from our studio in Hathijan.",
    hero: {
      src: livingCurvedSofa,
      alt: "Sunlit living room with a curved cream sofa, round wooden side tables and a framed portrait drawing",
      note: "Curved upholstery, timber tables, a warm limewashed wall.",
    },
    band: {
      src: bedroomHearth,
      alt: "Bright bedroom with a fireplace, an upholstered bed, a textured rug and a tufted ottoman",
      note: "A bedroom planned around the hearth.",
    },
    detail: {
      src: studioSketches,
      alt: "Bright room with sheer curtains and framed design sketches pinned along the wall",
      note: "Drawings first, orders later.",
    },
    gallery: [
      { label: "Bedrooms", src: bedroomSoft, alt: "Soft bedroom in cream and blush with a low upholstered bed" },
      { label: "Kitchens", src: kitchenWood, alt: "Warm timber kitchen opening onto a dining table" },
      { label: "Modular kitchens", src: kitchenTeal, alt: "Kitchen with dark fluted cabinets and teal bar stools" },
      { label: "Dining", src: diningWalnut, alt: "Walnut-panelled dining room with a globe chandelier" },
      { label: "Pooja rooms", src: poojaNiche, alt: "Pooja wall with carved lotus niches" },
      { label: "Wardrobes", src: wardrobeOak, alt: "Full-height oak wardrobe with mirrored doors" },
    ],
    includesTitle: "What a design project includes",
    includes: [
      { name: "Site visit & measurements", body: "We measure every room and listen to how the house is used before drawing anything." },
      { name: "Space planning", body: "Furniture layouts, circulation and storage worked out on plan, room by room." },
      { name: "3D visualisation", body: "See each room in 3D — layout, finishes and colour — and change it while changes are free." },
      { name: "Vastu-aligned layouts", body: "Entrances, beds, desks and seating placed with vastu in mind, with honest notes where a layout limits it." },
      { name: "Materials & lighting", body: "Laminates, veneers, fabrics, paint and lights chosen together in the studio." },
      { name: "Modular units", body: "Kitchens, wardrobes, TV units and storage designed to fit the walls you actually have." },
      { name: "Turnkey execution", body: "We run the vendors and the site, then install curtains and furniture and hand over a finished home." },
    ],
    closing: {
      title: "One studio from drawing to handover",
      body: "The same people who draw your plan choose the fabric, check the carpentry and hang the curtains. Nothing is lost between a designer, a contractor and a furnishing shop.",
    },
    faqs: [
      { q: "How much does interior design cost in Ahmedabad?", a: "It depends on the size of the home and the finishes you choose. After a site visit we share an itemised quote, room by room, so you can decide what to do now and what can wait." },
      { q: "Do you take on a single room, or only full homes?", a: "Both. A bedroom, a living room or a kitchen on its own is welcome, as is a complete flat or bungalow." },
      { q: "Do you design according to vastu?", a: "Yes. Vastu is part of the first layout, not an afterthought. Where a flat’s structure makes a vastu rule impossible, we explain the options plainly." },
      { q: "How long does a full home take?", a: "It depends on the scope, the carpentry and material lead times. You get a written schedule with the quote, before any work starts." },
    ],
  },
  {
    slug: "curtains-blinds-ahmedabad",
    nav: "Curtains & blinds",
    metaTitle: "Custom Curtains & Blinds in Ahmedabad",
    metaDescription:
      "Made-to-measure curtains, sheers, zebra and roller blinds in Ahmedabad. Choose fabrics at Mankrruuti Design Studio, Hathijan — we measure, stitch and fit at your home.",
    h1: "Custom curtains and blinds in Ahmedabad",
    lede:
      "Curtains, sheers and blinds made to the exact size of your windows. Choose the fabric in our Hathijan studio; we measure, stitch and fit at home.",
    hero: {
      src: curtainsSheerDrape,
      alt: "Floor-length taupe drapes framing white sheer curtains with soft daylight behind them",
      note: "Sheer behind, lined drape in front, floor to ceiling.",
    },
    band: {
      src: linenWeave,
      alt: "Close-up of a natural brown linen weave",
      note: "Natural linen, close up.",
    },
    detail: {
      src: curtainTieback,
      alt: "Close-up of a cream curtain held back with a braided rope tie-back and tassel",
      note: "Finishing: a braided tie-back.",
    },
    gallery: [
      { label: "Living room curtains", src: livingCurtains, alt: "Bright living room with grey floor-length curtains" },
      { label: "Sheers", src: sheerWindow, alt: "Sheer curtains glowing in morning light" },
      { label: "Fabrics", src: fabricFolds, alt: "Folded curtain and upholstery fabrics in sage and oatmeal" },
      { label: "Choosing samples", src: swatchHands, alt: "Hands comparing fabric and colour samples" },
    ],
    includesTitle: "What we make for your windows",
    includes: [
      { name: "Curtains & drapes", body: "Lined and unlined curtains stitched to your window height, with the pleat style chosen to suit the room." },
      { name: "Sheers", body: "Light, privacy-giving sheers to layer behind main curtains." },
      { name: "Zebra & roller blinds", body: "Clean, adjustable blinds for kitchens, study rooms and offices." },
      { name: "Blackout for bedrooms", body: "Blackout fabric or lining where you need the room dark." },
      { name: "Rods, tracks & fittings", body: "Hardware chosen to match the room and fitted by us." },
      { name: "Measuring & fitting", body: "We take the measurements at home and come back to fit and dress the curtains." },
    ],
    closing: {
      title: "Choose the fabric by hand",
      body: "Fabric looks different on a screen. Come to the studio, hold the samples against the light, and take a few home to see them on your wall.",
    },
    faqs: [
      { q: "Do you measure the windows at home?", a: "Yes. We take the measurements ourselves so the curtains fall at the right length and the fittings sit in the right place." },
      { q: "Can I see fabrics before ordering?", a: "Yes. Visit the studio in Hathijan to see and feel the fabric, or ask on WhatsApp for photos of options in your colour range." },
      { q: "Do you make zebra blinds as well as curtains?", a: "Yes — zebra and roller blinds as well as curtains and sheers, so one room can mix both." },
      { q: "Do you only do curtains, or the whole room?", a: "Either. Many clients start with curtains; if you want, we can plan the rest of the room too." },
    ],
  },
  {
    slug: "custom-sofa-ahmedabad",
    nav: "Sofas & upholstery",
    metaTitle: "Custom Sofas & Upholstery in Ahmedabad",
    metaDescription:
      "Custom sofas made to your size and fabric in Ahmedabad. Sofas, armchairs, mattresses and handloom furnishings from Mankrruuti Design Studio, Hathijan.",
    h1: "Custom sofas and upholstery in Ahmedabad",
    lede:
      "Sofas and armchairs built to the size of your room and the way you sit, in the fabric you choose — with mattresses, cushions and handloom furnishings to finish the room.",
    hero: {
      src: armchairCream,
      alt: "Cream armchair with tan leather sides in a softly lit lounge with plants",
      note: "Cream upholstery, leather sides, a low back.",
    },
    band: {
      src: livingDusk,
      alt: "Living room at dusk with a deep sofa, glass coffee table and evening light through tall windows",
      note: "Deep seating at dusk.",
    },
    detail: {
      src: armchairBoucle,
      alt: "Bouclé armchair with a knitted throw on a dark wooden floor",
      note: "Bouclé and a knitted throw.",
    },
    gallery: [
      { label: "Sofas", src: sofaGreen, alt: "Green sofa with soft striped cushions" },
      { label: "Armchairs", src: armchairCushions, alt: "Olive armchair with terracotta cushions" },
      { label: "Fabrics", src: fabricFolds, alt: "Folded upholstery fabrics in sage and oatmeal" },
      { label: "Handloom furnishings", src: handloomMarket, alt: "Handloom rugs and cushions in warm colours" },
    ],
    includesTitle: "What we make for sitting and sleeping",
    includes: [
      { name: "Sofas to size", body: "Two-seaters, three-seaters, L-shapes and sectionals sized to your wall and your family." },
      { name: "Armchairs & lounge seating", body: "Reading chairs, accent chairs and pairs for the living room." },
      { name: "Fabric choice", body: "Choose from fabrics in the studio, matched to your curtains and walls." },
      { name: "Mattresses", body: "Mattresses for every bed in the house, chosen with you in the studio." },
      { name: "Cushions & handloom furnishings", body: "Cushions, throws and handloom pieces to finish the room." },
    ],
    closing: {
      title: "Sit on it before it is made",
      body: "Seat depth, height and firmness decide whether a sofa gets used. We go through them with you in the studio, then build to those numbers.",
    },
    faqs: [
      { q: "Can you make a sofa to fit a specific wall?", a: "Yes. We measure the space and build the sofa to fit it, including L-shapes and corner units." },
      { q: "Can I choose my own fabric?", a: "Yes. Pick from the fabrics in the studio. We help you match it to the curtains and the rest of the room." },
      { q: "Do you sell mattresses?", a: "Yes. Ask in the studio or on WhatsApp and we’ll suggest options for your bed sizes." },
    ],
  },
];

export function getService(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}
