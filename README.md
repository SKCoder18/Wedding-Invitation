# Pavithra & Gnanasekhar — Wedding invitation

A React + TypeScript invitation with a two-page book with a center spine, two-sided turning leaves, a hard-cover opening and moving shadows, seven pages, the original couple photograph, responsive layouts, keyboard controls, reduced-motion support, countdown, and sharing.

## Run locally

Requires Node.js 22.12+ (or a current compatible version).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use Next / Back or the left and right arrow keys when focus is outside a button or link. The dots revisit a page. Replay returns to the cover. Navigation locks during a fold to prevent rapid clicks from interrupting it.

## Production

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Vercel / Netlify

Push this folder to your own Git repository, import it into Vercel, choose Vite, use `npm run build` as the build command and `dist` as the output directory. For Netlify use the same build command and publish directory. No server or environment secrets are required. Alternatively, upload the built `dist` folder to a static host.

Before sharing publicly, set `og:image` in `index.html` to the absolute deployed URL of `/couple.png`, and add `og:url` with the deployed site URL. Rebuild and redeploy. Actual sharing buttons use the URL of the current site automatically; local preview links are not accessible to guests.

## Content and assets

All wedding details and asset settings are in `src/wedding.ts`. The original supplied photograph is preserved in `public/couple.png` and used on both the couple reveal and finale. No faces are generated or altered. Typography uses Google Fonts with local serif/sans-serif fallbacks. No audio is bundled: set `music` to an approved audio file URL after adding a licensed track to `public/`. Music remains off until the visitor chooses it and fades between states without restarting on page changes.

Directions intentionally use a Google Maps search for Kamma Bhavan, Kanipakam: an exact venue listing could not be verified. No coordinates or street address are invented. Countdown uses `2026-11-16T04:30:00+05:30` and never shows negative values.

No site has been deployed by this local delivery.

## Page animation preference

The header has a Page flips control. It initially respects the device reduced-motion preference. Guests can explicitly enable the complete 2.2-second book animation; that choice is saved in this browser. Gentle mode changes pages without 3D motion. Desktop shows a two-page spread; mobile brings the book into view during each turn and returns to a readable single page afterward. Navigation completes on the leaf animation-end event, with a timeout fallback.
"# Wedding-Invitation" 
