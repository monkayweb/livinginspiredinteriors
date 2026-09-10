# Living Inspired Interiors

Marketing site for Living Inspired Interiors, a boutique interior architecture
and design studio in Johannesburg.

## Stack

- Next.js 16 (App Router, static export friendly)
- TypeScript
- Tailwind CSS v4
- Motion (framer-motion v13) for animation
- Lenis for smooth scrolling

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
src/
  app/                     routes: /, /studio, /projects, /projects/[slug], /recognition, /contact
  components/
    sections/              home page sections
    views/                 page level client views
    ...                    shared primitives (Reveal, Cursor, Lightbox, Marquee, Magnetic)
  content/site.ts          all copy, project data and image assignments
public/images/             photography
```

All copy and project data lives in `src/content/site.ts`. Adding a project means
adding one object to the `projects` array plus its images in `public/images`.

## Design rules baked in

- Square corners everywhere (`border-radius: 0` is enforced globally in `globals.css`)
- No uppercase or small caps eyebrow labels, hierarchy comes from size and weight
- No em dashes in copy
- Dark and light surfaces are declared per section with `data-surface="dark" | "light"`,
  and the page background transitions between them on scroll

## Type

ZT Chablis for display, DM Sans for body.

- Chablis is self hosted from `src/app/fonts` as woff2 at 300, 400 and 500.
  It ships **no italic**, so `.display-accent` (the second line of a headline)
  is separated by colour, not slant. Do not add `font-style: italic` to it,
  the browser will skew the roman and it looks broken.
- DM Sans runs at 300 for body copy and 400 for the small labels. Josefin Sans
  was tried here first and rejected: its x-height is too small for running text.
- Display sizes are tuned to Chablis. Swapping the display face means
  re-checking `.t-xl`, `.t-lg` and `.t-md` in `globals.css` plus the per page
  hero sizes for wrapping.
- The Chablis family also ships a "Slow" cut, slightly narrower, if the studio
  prefers it.

Both ZT Chablis and the Amoret logo font came from free font aggregators rather
than the foundries. Chablis is by Zetafonts. Confirm the studio holds a webfont
licence before launch.
- `.display-accent` is the italic accent used on the second line of headlines.
  It carries its own colour, so do not add a text colour utility alongside it.

The studio's logo is set in The Amoret Collection Sans. It was considered for
headings and rejected: it is a capitals only cut with no italic, so every
heading would have gone uppercase, and the freely circulating file is a
redistribution of a paid family. If the studio wants it on the site, buy the
webfont licence from the foundry first.

## The logo

The supplied lockup is white and gold, built for dark backgrounds only. It is
inlined once as an SVG sprite symbol (`components/LogoSprite.tsx`, mounted in
`AppShell`) and referenced with `<use>` by `components/Logo.tsx`. The wordmark
paths were switched to `currentColor` so it takes the active surface colour and
stays legible on paper as well as ink; the script keeps `--color-gold`.

It appears in the header, the footer sign off and the intro. Size it by height
(`h-14 w-auto`) or width (`w-[min(78vw,620px)]`); the 572 by 264 aspect follows.
The untouched original is at `public/logo.svg`.

## Keeping it smooth

Rules that hold the scrolling together. Breaking one of these is what makes the
site feel like it is running at half frame rate:

- **Never promote every parallax image at once.** `ParallaxMedia` sets
  `will-change: transform` only while the element is near the viewport. A
  blanket `will-change` in CSS pins every full size bitmap in GPU memory
  simultaneously, which costs far more than the paint it saves. Promoting none
  is also wrong: scroll linked transforms then re-raster each frame.
- **No `mix-blend-mode` on anything fixed.** The cursor and the header both
  take colours from `--fg` / `--bg` instead. A blended fixed element forces the
  compositor to re-blend the region beneath it on every pointer move.
- **No animated `clip-path`, `width`, `height` or `padding`.** Reveals use
  paired translates, the cursor scales a fixed size box, hover shifts use
  `translate-x`.
- **Do not transition `color` or `background-color` on `body`.** Colour
  inherits, so it triggers full tree style recalculation for the length of the
  transition. Every section declares its own background and text colour.
- **Lenis is driven from Motion's frame loop**, not its own rAF, so scroll
  position and every scroll linked transform land in the same tick.
- Per frame values live in motion values, not React state.
- No scrolling marquees. They were removed from the home page and the studio
  page because scroll velocity coupling made them snap and stutter. The studio
  collaborator list is a static grid now.
- **First paint must be dark.** Every page opens on a dark section, so `html`
  is ink, `body` is transparent, and the `--bg` / `--fg` defaults on `:root`
  are the dark pair. Defaulting either to paper flashes a white page or a
  white header bar before `ThemeSections` runs.
- Nothing wraps the whole page in an opacity animation. It reveals the canvas
  underneath on first load and promotes the entire document to one layer.
- Images are served as WebP, not AVIF. AVIF decodes markedly slower and these
  are large photographs decoding during scroll.

Measuring this is harder than it looks. Headless Chromium reports a flat 60fps
because it has no real compositor, and a Playwright driven headed window
reports a flat 30fps because it does not get full vsync. Neither is the truth.
Profile in a real browser window with the Performance panel, or trust the rules
above.

`npm run dev` is meaningfully jankier than the real thing: React Strict Mode
double invokes every effect and animation, and nothing is minified. Judge the
motion on `npm run build && npm start`.

## Still needs the client

- `site.email` in `src/content/site.ts` is a placeholder (`hello@livinginspiredinteriors.com`).
  Swap in the real inbox.
- The contact form currently composes an email in the visitor's mail client. To
  capture leads server side, add a route handler and an email provider.
- Image to project assignments in `src/content/site.ts` were inferred from the
  photography. Confirm which shots belong to Athol House and which to the
  Sandown Residence.
- Project cost figures from the studio deck were deliberately left off the public site.
