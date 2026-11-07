import Link from "next/link";
import { JournalPost, postMetadata } from "@/components/JournalPost";
import { getPost } from "@/lib/posts";
import type { Faq } from "@/lib/site";

const post = getPost("custom-sofa-buying-guide-ahmedabad");
export const metadata = postMetadata(post);

const faqs: Faq[] = [
  { q: "How do I choose the right sofa size for my living room?", a: "Mark the sofa’s full external width and depth on the floor, including arms and any chaise. Check door swings, the coffee table, curtain movement and the route through the room. Seat count alone does not tell you whether a sofa fits." },
  { q: "Is an L-shaped sofa always better for a small flat?", a: "No. A chaise can provide useful lounging space but may block a door or the route to a balcony. Compare a straight sofa and separate chair on a measured plan before deciding." },
  { q: "Which upholstery fabric is easiest to maintain?", a: "Choose using the actual fabric’s cleaning instructions, weave, colour and declared performance. Ask about removable covers and test an approved cleaning method on a sample. No fabric should be assumed stain-proof from its appearance or fibre name alone." },
  { q: "What should a custom sofa order include?", a: "Record overall and seat dimensions, layout orientation, frame and cushion specifications, fabric code, legs, delivery access, installation, price, payment stages and estimated completion. Confirm care instructions, warranty terms and the process for approving changes." },
];

export default function Page() {
  return (
    <JournalPost
      post={post}
      faqs={faqs}
      answer="Before ordering a custom sofa in Ahmedabad, measure the room and the full delivery route, test the seating position, and compare fabric samples at home. Approve a written specification covering overall size, seat dimensions, frame, cushions and upholstery. Confirm delivery, care instructions and warranty terms before paying the order deposit."
    >
      <section aria-labelledby="fit-title">
        <h2 id="fit-title">Measure the sofa’s footprint, not just the wall</h2>
        <p>
          A long wall does not automatically mean a large sofa will work. Mark the full external width and depth
          on the floor with removable tape, including arms, back and any chaise. Add the coffee table and pull
          dining chairs out into their normal position. Walk from the entrance to the balcony and other rooms
          to see whether the arrangement leaves a comfortable route.
        </p>
        <p>
          Look above the floor plan too. Check window handles, low sills, wall sockets and switches. Leave space
          for curtains to fall and stack without rubbing against the sofa. If the living room is part of a wider
          renovation, put the sofa dimensions on the <Link href="/blog/2bhk-3bhk-interior-planning-ahmedabad">approved
          interior layout</Link> before fixing TV panels, side tables or electrical points.
        </p>
      </section>
      <section aria-labelledby="shape-title">
        <h2 id="shape-title">Straight sofa, sectional or sofa with chairs?</h2>
        <p>
          Choose for the people using the room. A straight sofa with a movable chair gives you flexibility when
          guests visit or the layout changes. A sectional can suit a family that lounges together, but its longer
          side fixes more of the room’s circulation. Check whether an L-shaped design leaves the balcony door usable.
        </p>
        <p>
          Confirm the chaise orientation on a labelled plan rather than using “left” or “right” alone; those words
          can mean different things depending on where you stand. Ask whether the sofa is made in separate sections,
          how the sections connect and what can be changed later. A photograph of a similar sofa is useful for style,
          but it should not replace the dimensions on the order.
        </p>
      </section>
      <section aria-labelledby="comfort-title">
        <h2 id="comfort-title">How should you test seat comfort?</h2>
        <p>
          Sit as you normally would, with your back supported and your feet resting naturally. Then try the
          position you use for reading or watching television. A deep seat that feels good for lounging may need
          extra support for upright sitting. Test the arm height and the effort needed to stand up, especially
          if older family members will use the sofa every day.
        </p>
        <p>
          Ask what supports the seat and what the cushions contain. Foam density, firmness and the complete
          cushion construction describe different things; one number does not establish comfort or lifespan.
          Where a sample is available, confirm whether it uses the same seat build as your proposed order.
          Record any agreed change to seat height, usable depth or back angle.
        </p>
      </section>
      <section aria-labelledby="fabric-title">
        <h2 id="fabric-title">Choose upholstery for daily life</h2>
        <p>
          Take shortlisted swatches home and compare them beside the floor, paint and
          <Link href="/blog/curtains-vs-blinds-ahmedabad"> window treatments</Link> in daylight and evening light.
          Feel the fabric against your arm and check how it looks from different directions. A textured cloth,
          smooth weave and pile fabric can look quite different even in a similar colour.
        </p>
        <p>
          Ask for the manufacturer’s care instructions and any available abrasion, pilling or colourfastness
          information for the exact fabric. A fibre name alone does not tell you how a finished upholstery will
          perform. For pets, check whether claws can catch loops; for children, discuss cleaning and access to
          cushion covers. Removable covers are useful only if their approved cleaning method is practical for you.
        </p>
        <p>
          Check where direct sun reaches the sofa and discuss exposure with the supplier. Keep the fabric code
          and a spare swatch with your order documents. If more material is needed later, a matching name may
          still come from a different dye batch, so ask about spare fabric when the original order is placed.
        </p>
      </section>
      <section aria-labelledby="delivery-title">
        <h2 id="delivery-title">Check the lift, staircase and apartment entrance</h2>
        <p>
          Measure the route from the unloading point to the room: building entrance, lift door and cabin,
          staircase turns, landings and the flat’s doorway. A sofa can fit the living room and still fail to pass
          a turn on the way in. Share route photos and measurements with the maker before production, and ask
          which parts can be removed or delivered separately.
        </p>
        <p>
          Confirm society delivery hours, lift availability, floor protection and any handling charges. Do not
          assume that a sofa can be taken through a balcony or lifted externally. If normal access is uncertain,
          resolve the delivery plan with the maker before approving the design.
        </p>
      </section>
      <section aria-labelledby="order-title">
        <h2 id="order-title">Approve the details in writing</h2>
        <p>
          The order should identify the drawing, dimensions, seat build, frame material, fabric code, leg finish
          and any loose cushions included. Ask what the price covers: delivery, assembly, taxes and special access
          arrangements. Agree on payment stages, the estimated completion date and how a requested change affects both.
        </p>
        <p>
          Read the warranty and care instructions before buying, including which components are covered and who
          handles a repair. On delivery, check the upholstery, seams, stability, section connections and the final
          dimensions before signing off. Mankrruuti’s Hathijan studio offers
          <Link href="/custom-sofa-ahmedabad"> custom sofas and upholstery in Ahmedabad</Link>; bring your room
          measurements, access details and fabric preferences to start the discussion.
        </p>
      </section>
    </JournalPost>
  );
}
