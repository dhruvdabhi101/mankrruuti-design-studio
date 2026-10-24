# Getting Mankrruuti Design Studio found on Google

Written 18 Oct 2026. Goal: show up for searches like *interior designer near me*, *interior designer in Ahmedabad*, *curtains Hathijan*, *custom sofa Ahmedabad*, both in the Google Maps "3-pack" and in normal results.

## Why the studio doesn't show up today

Google ranks local businesses on three things: **relevance** (does the listing clearly match the search?), **distance** (how close to the searcher?), and **prominence** (how well known is it — reviews, links, mentions across the web). Right now Mankrruuti is weak on relevance and prominence:

- **No website.** Google has nothing to read except the Maps listing and Instagram. The new site fixes this.
- **Brand new.** The studio opened 30 April 2025, so it has few reviews and almost no mentions elsewhere online. A search for "Mankrruuti" on the open web returns nothing.
- **Unusual spelling.** People will type *Mankruti*, *Mankriti* or *Man Kruti*. The site's structured data lists these spellings as alternate names, but reviews and directory listings help most.
- **Ahmedabad is crowded.** Hundreds of interior designers compete for "interior designer in Ahmedabad". Win the nearby searches first (Hathijan, Vatva, Narol, Isanpur, Ramol, Maninagar, CTM), then grow outward.

Work through the steps in order. Steps 1–4 matter most and cost nothing.

---

## Step 1 — Put the website live (week 1)

1. **Domain: done — `mankrruuti.com`.** Consider also buying spelling variants (`mankruti.com`) and redirecting them to it.
2. **Deploy.** Import the GitHub repo at vercel.com (free tier is fine). In Vercel → Settings → Domains add both `www.mankrruuti.com` (primary) and `mankrruuti.com` (redirect to www), then add the DNS records Vercel shows at your domain registrar.
3. **Domain in code: done.** `SITE_URL` in `lib/site.ts` is `https://www.mankrruuti.com`; the canonical tags, sitemap, Open Graph data and structured data all read it.
4. **Replace the stock photos with real ones.** The Unsplash images are placeholders and are labelled as such in the footer. Real photos of the studio, finished rooms, fabric samples and the team build trust *and* rank in Google Images. Keep the same filenames in `assets/photos/` or update the imports, and rewrite the `alt` text to describe what's really in each photo, for example: *"Living room in a 3BHK flat in Vastral with sheer and blackout curtains"*.
5. **Add opening hours** to the site and the structured data in `app/layout.tsx` (`openingHoursSpecification`) once confirmed. They're left out today because nobody has confirmed them.

## Step 2 — Fix the Google Business Profile (week 1, about 1 hour)

This one profile drives most local leads. Open business.google.com and sign in with the owner's account.

1. **Verify ownership** if it isn't verified yet. Unverified listings rank poorly.
2. **Business name: keep it exactly "Mankrruuti Design Studio".** Do *not* add keywords such as "Mankrruuti Interior Designer Ahmedabad". That breaks Google's rules and can get the listing suspended.
3. **Primary category: `Interior designer`.** Then add the secondary categories that are true: `Curtain store` / `Curtain and upholstery`, `Upholstery shop`, `Furniture store`, `Mattress store`, `Home goods store`. Categories are the single biggest relevance signal.
4. **Website:** add the new URL. Use `https://www.mankrruuti.com/?utm_source=google&utm_medium=gbp` so the clicks can be tracked later.
5. **Phone:** +91 97230 83636 — identical everywhere.
6. **Address:** match the website exactly: *07, Radhe Parisar, Opposite SK Cinema, near Hathijan Circle, Hathijan–Mahemdavad Road, Ahmedabad, Gujarat 382445*. Check that the map pin sits on the shop, not the road.
7. **Service area:** add Ahmedabad plus the nearby areas you actually travel to.
8. **Hours**, including special hours for Diwali and Uttarayan.
9. **Services:** add each one with a one-line description — Interior design consultation, 3D visualisation, Space planning, Vastu-based interior planning, Turnkey interiors, Modular kitchen, Wardrobes, Custom curtains, Zebra blinds, Roller blinds, Custom sofas, Sofa re-upholstery (only if offered), Mattresses.
10. **Products:** add 6–10 products with photos and "Starting from ₹…" prices if you're comfortable sharing them (sofas, curtain types, blinds, mattresses).
11. **Description (750 characters):** say plainly what you do and where. For example:
    > Mankrruuti Design Studio is an interior design studio in Hathijan, Ahmedabad. We plan complete homes and single rooms in 3D and with vastu, and make curtains, blinds, sofas and upholstery to measure. Visit the studio near Hathijan Circle, opposite SK Cinema, to see fabrics and samples, or book a home visit on WhatsApp.
12. **Photos:** upload 20+ real photos now and 3–5 new ones every week — the outside of the studio (so people can find it), the interior, fabrics, work in progress and finished rooms. Listings with steady fresh photos get noticeably more calls.
13. **Turn on messaging and the WhatsApp/booking link** if your profile shows those options.

## Step 3 — Reviews: the biggest lever after categories (ongoing)

1. In the Business Profile, copy the **"Ask for reviews"** short link.
2. Send it on WhatsApp to every past and current client, today. Aim for **25+ reviews in the first 2–3 months**, then a steady 4–8 a month. A steady flow matters more than one burst.
3. Ask clients to mention what you did and where, in their own words, for example *"They made our curtains and sofa for our flat in Maninagar"*. Words in reviews help rankings. Never write reviews yourself or offer anything in exchange for them; Google removes those and can penalise the listing.
4. **Reply to every review** within 2 days. Mention the work naturally ("Glad the sheers worked for the west bedroom").
5. Also ask happy clients to tag @mankrruuti_design_studio on Instagram.

## Step 4 — Google Search Console (week 1, 20 minutes)

1. Go to search.google.com/search-console, add the domain and verify it. The DNS method works with any domain registrar.
2. Submit `https://www.mankrruuti.com/sitemap.xml`.
3. Use **URL inspection → Request indexing** for the home page, the three service pages and each new journal post (start with `/blog/top-interior-design-studios-ahmedabad`).
4. Check back every 2 weeks. The **Performance** report shows which searches the site appears for. That tells you what to write about next.
5. Do the same in Bing Webmaster Tools (it can import from Search Console in one click).
6. Test the structured data at search.google.com/test/rich-results. LocalBusiness, WebSite, FAQPage, Service, BreadcrumbList, BlogPosting and ItemList are already on the pages.

### AI search (ChatGPT, Perplexity, Gemini, Google AI Overviews)

- `robots.txt` explicitly allows the AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended and others). Don't block them.
- `/llms.txt` gives AI assistants a plain-text summary of the studio, services and journal. It's generated from `lib/site.ts`, `lib/services.ts` and `lib/posts.ts`, so updating those keeps it current.
- Journal posts open with a short, direct answer (marked `speakable`) and end with an FAQ. Keep that pattern: AI engines quote the first clear answer they find.

## Step 5 — List the business everywhere, identically (weeks 2–3)

Every listing must use **exactly** the same name, address and phone (NAP) as the website and Google profile. Inconsistent details confuse Google.

Priority directories for Indian home-interior businesses:

| Directory | Why |
| --- | --- |
| **Justdial** | Ranks on page 1 for most "near me" searches in India, and leads come directly from it |
| **Sulekha** | Strong for home services and interiors |
| **IndiaMART** | Good for curtains, blinds, sofas and mattresses as products |
| **Houzz India** | Design-specific; portfolio pages rank well |
| **Bing Places** | Feeds Bing and parts of Microsoft products |
| **Apple Business Connect** | Puts the studio on Apple Maps for iPhone users |
| **Facebook Page** | Another consistent citation; link it to Instagram |
| **Urban Company / NoBroker / Livspace partner listings** | Only if you take leads from them |

Add the website link and the same description to each. Keep a simple spreadsheet of logins.

## Step 6 — Content that answers what Ahmedabad homeowners search for (monthly)

The three service pages target the main searches already, and the journal (`/blog`) has started with *Top 10 interior design studios in Ahmedabad*. Next, add one useful post a month. To add one: add an entry to `lib/posts.ts` (it feeds the journal index, sitemap and llms.txt), then create `app/blog/<slug>/page.tsx` using the first post as the template. Re-check the facts in the top-10 post every few months and bump its `updated` date. Good topics:

- *Vastu tips for a 2BHK or 3BHK flat in Ahmedabad* (vastu is a strong local search)
- *Best curtain fabrics for Ahmedabad summers* (heat, dust, west-facing rooms)
- *Zebra blinds vs curtains: which suits which room*
- *Interior design cost guide for a 2BHK/3BHK in Ahmedabad*, with honest ranges
- *Project pages*, one per finished home: area, flat size, before/after photos, what was made, and a client quote. These are the most persuasive pages a design studio can have, and each one ranks for its locality ("interior design Vastral 3BHK").

Consider Gujarati versions of the home page and the curtains page later. Fewer competitors write in Gujarati.

## Step 7 — Earn local links and mentions (ongoing)

- Ask fabric brands and suppliers you buy from to list you as a dealer or partner on their websites.
- Builders and housing societies near Hathijan: offer move-in packages and ask for a link or a notice-board mention.
- Local news and Ahmedabad Instagram pages: a short story about the studio's opening, or a striking before/after.
- Collaborate with nearby architects, carpenters and electricians, and link to each other.

## Step 8 — Instagram ↔ website ↔ Maps

- Instagram bio link → the website, not just Maps. Use the WhatsApp booking link in a story highlight.
- Put the studio's address and "Hathijan, Ahmedabad" in the bio.
- Post the same finished-project photos to the Google Business Profile as you post to Instagram.

## What to expect

- **2–6 weeks:** site indexed; the studio shows up for its own name and spelling variants.
- **1–3 months:** with categories, reviews and photos in place, it starts to appear in the Maps 3-pack for "interior designer" and "curtains" searches made **near Hathijan**.
- **3–6 months and later:** wider Ahmedabad searches, which depend on reviews, project pages and links built up over time.

## Monthly checklist (30 minutes)

- [ ] 4+ new Google reviews requested; all reviews replied to
- [ ] 12+ new photos on the Business Profile
- [ ] 1 Business Profile post (offer, new fabric, finished room)
- [ ] 1 new page on the website (project or guide)
- [ ] Search Console checked: new searches, any errors
- [ ] NAP still identical everywhere
