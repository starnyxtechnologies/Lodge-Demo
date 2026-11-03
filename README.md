# Aaranya Lodge — Website Demo

A standalone, responsive 8-page lodge / retreat website concept created by **StarnyX Technologies**.

## Pages
1. `index.html` — Home, hero, welcome, room previews and stay enquiry calls-to-action.
2. `rooms.html` — Room categories and indicative demo rates.
3. `room-details.html` — Detailed Valley View Suite layout, sample room facts and inclusions.
4. `facilities.html` — Lodge comforts and experience highlights.
5. `gallery.html` — Responsive image gallery with keyboard-accessible lightbox controls.
6. `about.html` — Property story and hospitality values.
7. `offers.html` — Sample stay packages and offers.
8. `contact.html` — Booking enquiry form that prepares a WhatsApp message.

Also included: `404.html`, `styles.css`, `script.js`, `favicon.svg`, `vercel.json`, and this README.

## Features
- Custom illustrated loader: sunrise, layered hills and a small lodge silhouette. It fades out quickly and respects `prefers-reduced-motion`.
- Responsive navigation and fluid layouts from small phones to large desktop displays.
- Rooms, facilities, gallery, about, offers and enquiry pages have their own layouts and content.
- Gallery lightbox supports previous / next buttons, Escape and arrow keys.
- Booking form validates the date range and opens a pre-filled WhatsApp enquiry for the visitor to review and send.
- No backend, login, payment gateway, database, email collection or fake reservation confirmation.
- No heavy animation loop, Canvas, or third-party JavaScript framework.

## Demo content that must be replaced before a real launch
The property name **Aaranya Lodge**, room names, images, location, facilities, room occupancy, prices, package inclusions and operating information are sample placeholders. Do not present them as verified property details. Update them with the real lodge's approved content before publishing.

The sample WhatsApp destination is `+91 73855 85398` (configured in `script.js` and the relevant HTML links). Replace it with the lodge owner's correct number before launch. The form does not store personal information; it creates a WhatsApp message link and the visitor still presses Send in WhatsApp.

## Images and photo credits
The demo uses external image URLs from Unsplash. An internet connection is needed to load the photography. The image pages are labelled free under the Unsplash License; keep the credits or replace with original property images:
- [2H Media — lodge in a lush green forest](https://unsplash.com/photos/a-house-in-the-middle-of-a-lush-green-forest-ACMElze1x00)
- [Anirudh Thakur — cabin in a forest, Himachal Pradesh](https://unsplash.com/photos/a-cabin-nestled-in-the-middle-of-a-forest-5A0ufDkWPmc)
- [Arjun Gupta — house among forest and mountains](https://unsplash.com/photos/a-house-in-the-middle-of-a-forest-with-mountains-in-the-background-GQu8KSuTa04)
- [Sidath Vimukthi — bedroom with a mountain view](https://unsplash.com/photos/a-bedroom-with-a-view-of-the-mountains-outside-the-window-qSB35JVPe0s)
- [Sidath Vimukthi — canopy-bed lodge room](https://unsplash.com/photos/hotel-room-with-canopy-bed-BVsoS63DmUE)
- [Clay Banks — forest-view dining nook](https://unsplash.com/photos/cozy-dining-nook-with-window-view-of-forest-6V-ytvmYMtI)

## Preview locally
Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy as a separate demo
This is a plain static site, not part of the StarnyX company website bundle.

1. Extract this ZIP into its own folder.
2. Create a separate GitHub repository for the Lodge Demo.
3. Upload the contents of this folder to that repository root.
4. Import the repository into Vercel (or enable GitHub Pages).
5. Use Framework Preset **Other**, no build command, and output directory `.`.

No environment variables are required for the static demo.

---
Created by [StarnyX Technologies](https://starnyxtechnologies.in).
