# Nasaru Child Foundation · build notes

Three one page designs for the client currently at
<https://nasaruchildsupportcenter.family.blog/>.

Built against the redesign brief (`nasaru_website_redesign_brief.md`). Section
numbers below refer to that brief.

**Constraint these were designed against:** everything must be reproducible in the
WordPress standard editor with a stock theme. No custom CSS, no child theme, no
plugins beyond what the host already provides, no code to maintain. Marina has to
be able to run this herself (§25).

Open the mockups at `index.html` (hub) then `mockup-1.html`, `mockup-2.html`,
`mockup-3.html`.

---

## Scope decision you need to sign off

The brief recommends a seven page site (§9) plus a blog (§20). You specced a one
pager at 250 EUR. I built the one pager and folded the brief's pages into
sections of it, in the order the brief gives for the homepage (§35).

| Brief page | Where it lives now |
|---|---|
| Home | The page itself |
| About Us | Section 2, Mission and honest stage statement |
| Our Work | Section 5, the six programmes |
| Our Journey | Section 9, timeline (Designs 2 and 3 only) |
| Get Involved | Section 8, Volunteer / Partner / Fundraise, with the volunteer form on Designs 2 and 3 |
| Donate | Section 6, Current Priority with the WhyDonate campaign |
| Contact | Section 11 |

The one genuine gap is the blog (§20). A one page site cannot hold a growing feed
of posts, and the brief is right that Marina needs somewhere to publish updates.
On Designs 2 and 3 the Updates section shows the three most recent posts using the
stock Latest Posts block, and the posts themselves live on the standard WordPress
posts page. That is one extra page, it comes free with WordPress, and it needs no
design work.

Design 1 does not have it. That is the deliberate trade for the 250 EUR price, and
it is the first thing to add back if the client wants the site to keep growing the
way §32 describes.

---

## What each design costs to build

| | Design 1 Clear and Trusted | Design 2 Warm Earth | Design 3 Bold and Photo Led |
|---|---|---|---|
| Sections | 8 | 11 | 11 |
| Volunteer form (§15) | no | yes | yes |
| Our Journey timeline (§18) | no | yes | yes |
| Updates feed and blog page (§20) | no | yes | yes |
| Cover blocks | 0 | 2 | 2 |
| Extra pages | 0 | 1 (posts) | 1 (posts) |
| Scope | **250 EUR** | full brief | full brief |

Design 1 is the one to quote at 250 EUR. Designs 2 and 3 carry the whole brief and
should be priced above it. All three are the same content and the same build route,
so the client can start on Design 1 and add the form, the timeline and the blog
later without a rebuild.

---

## Shared setup for all three

| Item | Value |
|---|---|
| Theme | Twenty Twenty-Five (ships with WordPress, block theme) |
| Where the look is set | Appearance › Editor › Styles (colours, fonts, spacing) |
| Fonts | Only fonts already bundled with Twenty Twenty-Five, so nothing to upload |
| Page type | One page. Designs 2 and 3 add the stock posts page for Updates; Design 1 does not |
| Blocks used | Cover, Group, Columns, Media and Text, Gallery, Image, Heading, Paragraph, List, Buttons, Separator, Spacer, Form, Latest Posts, Social Icons |

**Anchor navigation without code:** select a Group or Cover block, open Block ›
Advanced › HTML anchor, type `about`, `work`, `journey`, `involved`, `updates`,
`contact`, `priority`. Point the Navigation block links at `#about` and so on.

**The volunteer form (§15)** appears on Designs 2 and 3 only, not on Design 1. It
is the stock WordPress Form block. Fields: name,
email, phone or WhatsApp, location, area of interest (dropdown), skills or
background, availability, message. Submissions arrive by email and are stored in
the dashboard. No plugin needed on WordPress.com paid plans or on self hosted
WordPress 6.8 and later. If the host does not have the Form block, the fallback
is a mailto link, which is worse but costs nothing.

**Designer credit:** each footer ends with a "Created by Dava Koeswoyo" line
linking to davakoeswoyo.com. It is a Paragraph block inside the footer template
part, coloured with the theme accent so it sits in the palette rather than on top
of it. Still stock, still editable, and Marina can remove it at any time.

**Section order on every design (§35):**

1. Hero
2. Mission and short introduction
3. The challenge
4. What we are building
5. Our work, six programmes
6. Current priority, the WhyDonate campaign
7. Photos with captions
8. Get involved, plus the volunteer form
9. Our journey, timeline
10. Updates
11. Contact, then footer

---

## What changed from the current site

### Copy that was rewritten

| Current site | Now | Why |
|---|---|---|
| "Make a change today and change someone's life forever" | Removed. Hero reads "Help us build early childhood education in the Maasai community" | §28 names the original as weak copy and gives this direction |
| "Contact US:" | "Contact Us" | §29 |
| "Email;" | "Email" | §29 |
| "With the aim of helping as many people as possible, we always lack enthusiastic volunteers." | Replaced by the Volunteer, Partner and Fundraise blocks with concrete roles | §8.1 and §14 ask for concrete activities rather than "we need volunteers" |
| "————- Our projects ———-" typed as text | Proper "Our Work" heading | The original is a row of dashes, not a heading |
| Two empty `<h2>` tags | Real section headings | Same |

Everything else is carried over word for word. The six programme descriptions,
the About Us paragraphs and the contact details are unchanged apart from removing
hyphens in a few compound words for consistency.

### Copy that is new

Written to fill the brief's required sections. All of it is either taken from the
brief itself or synthesised from Nasaru's own existing copy and photographs. None
of it makes a claim the current site does not already support.

- **The honest stage statement** in the About section is the brief's own example
  wording (§6.2), lightly adjusted.
- **The challenge** section describes limited access to education and lessons held
  outdoors. Both come from Nasaru's own copy and their own photograph of children
  learning on open ground. Worth confirming with Marina before launch.
- **What we are building** is a synthesis of their own six programme areas.
- **The journey timeline** has real entries for the founding and the campaign, and
  marked placeholders for the dates and the next objective.
- **Photo captions** (§21) describe what each photograph shows.

### No invented numbers

Per §6.2 there are zero statistics anywhere on any of the three designs. No
children helped, no classrooms built, no volunteers, no meals, no funds raised, no
donor counts. The Current Priority section deliberately has no goal or progress
figure because none has been verified. If Marina supplies verified numbers later,
the natural home is a stat row under Section 6 and an impact section per §19.

---

## Design 1 · Clear and Trusted (`mockup-1.html`) — the 250 EUR build

White, calm, one green accent, no boxed cards. The look donors, grant bodies and
partners expect.

**This one is deliberately scoped to the 250 EUR price.** Eight sections, every one
of them a Columns or Group block with text in it. No Cover block, no Form block,
no Latest Posts block, no timeline, no second page. It is the smallest thing that
still does the brief's important work.

**Styles panel:** background `#ffffff`, alternate `#f5f7f5`, text `#16211c`,
accent `#2f6b4f`, soft accent `#e8f0eb`. Manrope throughout, button radius set to
fully rounded in Styles › Blocks › Button.

Sections: hero, about, our work, current priority, photos, get involved, contact,
footer.

### What it keeps from the brief, because it costs nothing

- Honest early stage positioning and the "help us build this" story (§6.2, §7, §33)
- Zero invented impact numbers (§6.2)
- The permanent Current Priority section with the WhyDonate campaign and its
  15 September 2026 deadline, so the page survives the campaign ending (§11, §12)
- Concrete volunteer, partner and fundraise roles instead of "we need
  volunteers" (§8.1, §14)
- Photo captions that say what each picture shows (§21)
- The challenge folded into the About section rather than given its own (§10)
- Corrected copy: the weak hero line is gone, "Contact Us", "Email" (§28, §29)

### What it drops to hold the price

| Dropped | Brief | What it would have cost |
|---|---|---|
| Volunteer form | §15 | Form block setup, field config, notification routing, spam handling, testing. The single most expensive item in the brief |
| Our Journey timeline | §18 | Four more block groups, and Marina has to keep it current or it goes stale |
| Updates feed and blog page | §20 | A second page, a Latest Posts block, and post templates |
| Separate What we are building section | §10 | Folded into About instead |

The trade is real and worth saying out loud to the client: without the form,
volunteers contact Marina by WhatsApp or email, which she is already doing. Without
the blog, the site is a brochure that needs a manual edit to look alive. If they
want the site to keep growing the way §32 describes, the blog is the first thing
to add back, and Designs 2 and 3 already include it.

Two Get Involved buttons go straight to WhatsApp and email, which covers the
recruitment job the form would have done, at zero build cost.

---

## Design 2 · Warm Earth (`mockup-2.html`)

Sand and terracotta, serif headings, cards for the programmes and for Get
Involved. Warm and human, per the tone list in §22.

**Styles panel:** background `#faf5ec`, alternate `#f1e7d6`, text `#2b2521`,
accent `#b0522d`, secondary accent `#d99b3f`. Headings Literata, body Manrope.

Notable blocks: Cover hero with a flat overlay, Media and Text for the challenge,
a Columns block of three run twice for the programmes, a dark Group with an inset
bordered Group for the Current Priority, Gallery with captions, Columns of three
for Volunteer / Partner / Fundraise, Form block, a Columns block of two run four
times for the timeline, Latest Posts for Updates.

---

## Design 3 · Bold and Photo Led (`mockup-3.html`)

Dark background so the photographs carry the page. Big type, full width images.
The photographs are genuinely strong and this design uses them hardest.

**Styles panel:** Twenty Twenty-Five dark style variation, then background
`#14120f`, alternate `#1e1b16`, text `#f7f3ea`, accent `#e0a33c`. Headings Platypi,
body Manrope. Button radius 2px in Styles › Blocks › Button.

Overlays are flat rather than gradient, per §22 which asks to avoid excessive
gradients.

Notable blocks: full height Cover hero, Media and Text for the challenge, a
Columns block of two for the programmes and for Get Involved, a full width amber
Group for the Current Priority, full width Gallery, Form block, Latest Posts.

---

## Placeholders the client must fill

Every one of these is marked in the mockups with a highlighted, italic
`[bracketed]` label so nothing ships as an invented fact.

1. **WhyDonate campaign URL.** Not in the brief. All Donate buttons currently
   point at the contact section.
2. **The specific campaign objective.** §11 wants "we are currently working toward
   [specific project objective]". Nobody has supplied it.
3. **Campaign goal and amount raised.** Only if verified (§11). Left out entirely
   for now.
4. **Founding date** for the timeline.
5. **The next objective** for the 2026 / 27 timeline entry.
6. **Registration or legal information** for the footer (§24). May not exist yet.

## Other things to confirm

7. **Which name is correct.** The brief calls them "Nasaru Child Support Center /
   Nasaru Child Foundation", the domain says child support center, and their own
   page copy says Nasaru Child Foundation. All three designs use Nasaru Child
   Foundation. Confirm before launch, because it affects the logo, the site title
   and the email signature.
8. **Marina's photo and short bio**, and any other team members (§16). The brief
   says personal stories build trust. There is no team section in these mockups
   because there is nothing to put in it yet. It slots in between Our Journey and
   Updates.
9. **Photo permissions for images of children** (§21). Needs to be confirmed as
   held before publishing.
10. **Social media accounts.** None found on the current site. If they exist, they
    go in the footer as a Social Icons block.
11. **WordPress.com branding** (§30). "Blog at WordPress.com", "Log in" and
    "Report this content" are on the current free plan. Removing them needs a paid
    plan or self hosting. Worth pricing separately, since it is a hosting cost, not
    a design one.
12. **Three photos on the current site are theme demo stock** of a notebook, a
    child's hands and a landscape, served from `alvesstarter.files.wordpress.com`.
    Not Nasaru's. All three designs drop them (§22 says avoid generic stock
    photography).
13. **Photos are hotlinked** in these mockups from the client's existing media
    library so they match the real site. On the built site they get uploaded
    normally.
