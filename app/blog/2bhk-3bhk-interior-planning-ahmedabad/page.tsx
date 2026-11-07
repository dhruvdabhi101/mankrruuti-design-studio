import Link from "next/link";
import { JournalPost, postMetadata } from "@/components/JournalPost";
import { getPost } from "@/lib/posts";
import type { Faq } from "@/lib/site";

const post = getPost("2bhk-3bhk-interior-planning-ahmedabad");
export const metadata = postMetadata(post);

const faqs: Faq[] = [
  { q: "Where should I start when planning a 2BHK interior?", a: "Start with measured room plans and a list of what you need to keep, store and replace. Agree on furniture positions, storage and a room-by-room scope before choosing finishes or ordering carpentry." },
  { q: "Can I complete my flat interiors in stages?", a: "Yes. Plan the whole flat first, then agree which rooms will be completed now. Finish concealed wiring, plumbing changes and other disruptive work before installing furniture and soft furnishings." },
  { q: "Can vastu be included without changing the structure?", a: "Furniture placement and room use can often be discussed within the existing layout. Share your priorities before drawings begin. Structural walls, shafts and shared building services need appropriate professional checks and approvals before alteration." },
  { q: "How do I compare interior design quotations?", a: "Compare the same room scope, dimensions, materials, hardware and finishes. Check design fees, site supervision, delivery, installation, taxes, exclusions and the process for approving additional work." },
];

export default function Page() {
  return (
    <JournalPost
      post={post}
      faqs={faqs}
      answer="For a 2BHK or 3BHK in Ahmedabad, settle the measured layout, storage needs and room-by-room scope before picking finishes. Confirm furniture sizes, electrical points, kitchen appliances and window treatments together. Ask for an itemised quote and a written sequence of work before approving orders."
    >
      <section aria-labelledby="brief-title">
        <h2 id="brief-title">What should you bring to the first design meeting?</h2>
        <p>
          Bring the builder’s floor plan, current room photos and a list of furniture and appliances you want to keep.
          A plan is a useful starting point, but site measurements should confirm wall lengths, ceiling levels,
          window positions and any differences between the drawing and the finished flat.
        </p>
        <p>
          Write down how the home is used on an ordinary day. Does someone work from the dining table? Do grandparents
          stay regularly? Where do school bags, suitcases and cleaning supplies go? A third bedroom used as a study
          and guest room needs a different layout from a room occupied every night. These answers make the brief
          more useful than a folder of unrelated room photographs.
        </p>
      </section>
      <section aria-labelledby="layout-title">
        <h2 id="layout-title">Plan movement before adding storage</h2>
        <p>
          Draw the furniture to scale and mark door swings, balcony access and wardrobe shutters. Check the path
          from the entrance to each room with the dining chairs pulled out and the sofa in place. Storage that
          blocks a doorway or makes a balcony difficult to reach is a poor trade, even when it adds cupboard space.
        </p>
        <p>
          If you have vastu preferences, discuss them at this stage. Ask the designer to show what is possible
          within the existing structure and where compromises are needed. Agree on the layout before approving
          the 3D views; a convincing image does not establish that a door, drawer or chair has enough space to open.
        </p>
      </section>
      <section aria-labelledby="rooms-title">
        <h2 id="rooms-title">A room-by-room checklist for your flat</h2>
        <ol className="post__steps">
          <li><h3>Living and dining</h3><p>Choose the seating arrangement around conversation, television use and the route to the balcony. Mark charging points and the position of the dining light. Reserve wall space for curtain stacking before making a TV unit or placing a sofa beside the window.</p></li>
          <li><h3>Kitchen and utility</h3><p>Confirm the actual refrigerator, hob, chimney and washing machine models before cabinet drawings are finalised. Check appliance clearances and service access against their installation instructions. Plan everyday utensils near where they are used, and separate wet cleaning supplies from food storage.</p></li>
          <li><h3>Bedrooms and wardrobes</h3><p>Place the bed first, including its headboard and bedside tables. Check wardrobe access with the bed in position. List hanging clothes, folded clothes and luggage separately so the internal layout suits your belongings rather than repeating the same shelves in every cupboard.</p></li>
          <li><h3>Study or guest room</h3><p>Decide which use takes priority. Test the guest bed in its open position and check whether a desk chair can still move. Plan task lighting, power and cable access before a fitted desk is made.</p></li>
          <li><h3>Entrance, pooja and utility storage</h3><p>Allow for shoes, keys, bags and cleaning tools. Keep the entrance usable when cupboard doors are open. Discuss ventilation and the suitability of nearby materials if your pooja routine includes a lamp or incense.</p></li>
        </ol>
      </section>
      <section aria-labelledby="materials-title">
        <h2 id="materials-title">Choose materials and lighting as a set</h2>
        <p>
          Compare cabinet finishes, paint, flooring and fabrics in the same light. A small sample can look different
          beside an existing floor or under a warm lamp. Request a clear material schedule naming the board,
          surface finish, exposed edges, hardware and internal fittings used in each unit.
        </p>
        <p>
          Mark sockets, switches and lighting positions on the approved furniture plan. A bedside switch hidden
          behind a headboard or a socket behind a fixed drawer is easier to prevent on paper. Plan
          <Link href="/blog/curtains-vs-blinds-ahmedabad"> curtains and blinds</Link> before ceiling details are
          closed, and check <Link href="/blog/custom-sofa-buying-guide-ahmedabad">sofa dimensions</Link> before
          finalising the living room.
        </p>
      </section>
      <section aria-labelledby="quote-title">
        <h2 id="quote-title">What should an interior design quote include?</h2>
        <p>
          A flat’s room count alone does not define its interior cost. A kitchen and two wardrobes are a different
          scope from a full renovation with bathrooms, flooring and new electrical work. Compare quotes only after
          agreeing on the same work and specifications; a single package total can hide important exclusions.
        </p>
        <p>
          Ask for quantities and dimensions, material names, hardware, finishes, design deliverables and the number
          of revisions included. Confirm who supervises the site, how payments relate to work stages, and whether
          delivery, installation, disposal and taxes are included. Record exclusions and approve any later change
          with its cost and schedule effect in writing.
        </p>
      </section>
      <section aria-labelledby="handover-title">
        <h2 id="handover-title">Agree on the work sequence and handover</h2>
        <p>
          Confirm building access, permitted working hours and delivery arrangements with your society before
          fixing dates. Schedule disruptive work before final finishes, and protect completed surfaces while
          later trades are on site. At handover, operate every drawer, shutter, light and fitting, record any
          unfinished items, and collect care instructions and applicable warranty documents.
        </p>
        <p>
          Mankrruuti Design Studio in Hathijan offers <Link href="/interior-designer-ahmedabad">interior design,
          3D visualisation and turnkey execution in Ahmedabad</Link>. Bring your plan and priorities to a meeting
          so the scope can be discussed room by room before a quote is prepared.
        </p>
      </section>
    </JournalPost>
  );
}
