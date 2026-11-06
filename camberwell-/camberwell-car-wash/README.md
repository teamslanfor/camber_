# Camberwell Car Wash: website

A 5-page professional business website on a new **"Corporate"** template:
- a clean navy, blue and white design with a top contact bar
- a hero with a quick-enquiry form, a trust strip and service cards with icons
- a location block with a map, FAQs, a call-to-action strip and a standard 4-column footer
- subtle hover states only, with **no cursor-following effects** and no loading animation

It's built from the Yell listing (https://www.yell.com/biz/camberwell-car-wash-london-6555618/) and the details supplied by the client.

| Detail | Value |
|---|---|
| Business | Camberwell Car Wash |
| Address (Yell) | Railway Arch, 350 Camberwell Station Rd, London SE5 9JN |
| Phone | 020 7737 8037 (landline; mobiles get a "call" button, not WhatsApp) |
| Email | camberwellcarwash@gmail.com (see the check list below) |
| Hours, prices | Not listed, so they are not shown. Visitors are asked to call. |

## ✅ How to put it live

Upload the **contents of `public/`**, so that `index.html` sits at the top level. The zip **`camberwell-car-wash-UPLOAD-THIS.zip`** already has exactly this layout.

- **Netlify:** go to https://app.netlify.com/drop and drag in the unzipped folder.
- **cPanel or any web host:** upload everything into `public_html/`.
- **GitHub Pages:** put the files at the top level of the repo, then go to Settings → Pages.
- **To look at it locally:** double-click `index.html`.

All links are relative, so the site works at a domain root, in a sub-folder, or opened from your computer.

## Folder structure

- `public/`: the finished website.
- `src/site.config.js`: business details (phone, email, address; hours slot ready).
- `src/services-data.js`: the 6 services. Add `price: 'From £10'` to any service and it shows on the cards and the Services page.
- `src/pages/*.html`: the content for each page.
- `build.js`: run `npm run build` to rebuild `public/`.
- `server.js`: an optional local preview server, plus live AI chat if `ANTHROPIC_API_KEY` is set.

## Enquiries

The Home and Contact forms, and the chat assistant's quote requests, are emailed through FormSubmit. The **first submission sends a one-time activation email** to the inbox; click its link once, or enquiries won't arrive.

## ⚠️ Check these before launch

1. **Email address.** It was supplied as `camberwellcarwash2gmail.com`, which has no "@". It has been set up as **camberwellcarwash@gmail.com**. If it should be **camberwellcarwash2@gmail.com**, change `email` in `src/site.config.js` and run `npm run build`.
2. **Click the FormSubmit activation email.**
3. **Services and what's included.** These are typical for a UK hand car wash; confirm them, and add prices if wanted.
4. **Opening hours.** Not on Yell. Add them in `site.config.js` once known.
5. **Photos** are royalty-free Unsplash stock images, labelled as stock on the Gallery page. Replace them with real photos of the business.
6. **Domain** (`url` in `site.config.js`).
