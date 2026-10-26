# Verification — 26 October 2026

- Production: `npm run build` passes TypeScript and Vite compilation.
- Browser: actual local site opened in the in-app Chromium browser. Welcome, couple reveal, families, reception, ceremony and finale screenshots saved in `screenshots/`.
- Navigation: opening, direct page selection, Back and Replay exercised successfully. Double-clicking Open settled correctly on the couple page. Transition locking prevents concurrent page turns.
- Mobile: checked widths 320, 360, 390 and 430; tablet 768 and desktop 1280. No horizontal document overflow in measured states. Every inner page checked at 320px; tight couple-page spacing corrected and rechecked (content fits available 522px).
- Images: supplied original loads successfully on reveal and finale. Framing corrected to use contain sizing and space above the portrait, preserving faces and full proportions.
- Content: bride/groom and respective parents confirmed in rendered family page. Ceremony displays Monday, 16 November 2026, 4:30 AM–6:00 AM; reception displays Sunday, 15 November 2026, 7:30 PM–9:30 PM.
- Browser logs: no warning/error entries during captured checks.
- Directions: Google Maps search URL inspected; exact venue listing unverified. No fabricated address.
- Sharing: Web Share, clipboard fallback and WhatsApp link implemented. No message was actually sent to a guest.
- Reduced motion: CSS disables 3D animation and JavaScript shortens navigation to 100ms. Source checked; OS reduced-motion behavior was not exercised in this browser session.
- Music: disabled intentionally because no licensed soundtrack was supplied. Audio fade behavior remains untested until a track is configured.
- Limits: no physical Android/iOS device, touch-hardware performance, external share-sheet completion, or post-deployment social-preview validation performed. This is a local deliverable, not a deployed website.

The preview uses real page turns with a left/right hinge, front/back faces, hidden backfaces and moving shadows. Visual snapshots verify settled layouts; they do not constitute a frame-by-frame performance benchmark.

## Book animation revision

The in-app browser reported prefers-reduced-motion: reduce, explaining why the earlier implementation skipped every fold. Added an explicit persisted Page flips control while retaining a gentle default for reduced-motion visitors. Enabled full motion in the user preview.

Rebuilt the presentation as a bound two-page book. Verified actual intermediate rotation matrices across a live forward turn (approximately 11, 79, and 160 degrees), with navigation disabled until completion. Saved successive screenshots as flip-frame-0.jpg through flip-frame-3.jpg. The cover-opening frame and page-turn frame show the leaf physically raised above the spread; the back face stays readable.

Verified backward rotation, Replay/close, rapid double-click Open settling on page 1, mobile animation at 390px, all inner-page content fit at 320px, and gentle-mode navigation with no animated leaf. Full animation restored and persisted after tests. No browser warning/error logs observed.
