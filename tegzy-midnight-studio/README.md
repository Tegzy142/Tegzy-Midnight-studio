# Tegzy — Midnight Studio

An interactive personal portfolio built with JavaScript, Three.js, HTML and CSS. No backend, API keys, database or ChatGPT service is required to run it.

## What is included

- An architectural 3D room, city window, desk and custom chair.
- The supplied monitor, keyboard and lamp models, with artist credits.
- Camera transitions, monitor selection, direct navigation, optional ambient sound and lighting controls.
- Work, About, Services, Elsewhere and Contact sections, with detail pages for Mac Solutions, Black Edition Rentals, Serene Scripture and Midnight Studio.
- Reduced-motion handling, WebGL fallback content, mobile layouts, frame-rate-aware cursor damping, cached shadows and an adaptive render resolution.

## Upload to GitHub — step by step

1. Extract this ZIP on your computer.
2. Open GitHub and create a new repository (for example `tegzy-studio`).
3. Choose **Add file → Upload files**. Upload the **contents** of the extracted project folder, including `dist`, `scripts`, `src.js`, `portfolio-content.js`, `package.json`, `package-lock.json` and `vercel.json`.
4. Commit the upload. Do not upload the ZIP itself and do not upload a `node_modules` folder.

The ZIP includes the built `dist/app.js`. Uploading via GitHub's website skips dotfiles such as `.gitignore`; you can add the supplied `.gitignore` separately, or use Git locally.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Keep **Root Directory** at the repository root (the folder containing `package.json`).
3. Framework preset: **Other**. Build command: `npm run build`. Output directory: `dist`. The included `vercel.json` already specifies these values.
4. Deploy. No environment variables are required.
5. Future commits to the connected production branch will trigger new deployments according to your Vercel project settings.

Your public site will use the domain Vercel assigns, or your own custom domain. There is no dependency on the private preview host.

## Run locally

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. To build only, run `npm run build`. Any static web server can serve `dist/`; opening `index.html` directly with a file URL can prevent model loading.

## Change the portfolio

- **Main copy, stories, project links:** `portfolio-content.js`.
- **Opening headline and page structure:** `dist/index.html`.
- **Colours, typography, responsive layout:** `dist/style.css`.
- **Scene, cameras, lights, monitor artwork:** `src.js`.
- **3D props:** `dist/assets/`.

HTML and CSS are intentionally maintained inside `dist/`; the build regenerates only `dist/app.js`. Keep the asset files when uploading. Rebuild after changes to JavaScript. Contact includes your public email, GitHub, Substack and TikTok. Elsewhere links to your writing and video profiles. See UPDATE-INSTRUCTIONS.md for the design revision and upload instructions.

## Model credits

- **Monitor | Computer | Realistic Computer Monitor**, Model Wala: https://sketchfab.com/3d-models/monitor-computer-realistic-computer-monitor-384ff6cf0bb947af9690529008f843a4 — CC BY 4.0, https://creativecommons.org/licenses/by/4.0/. Rescaled, duplicated and overlaid with custom screen artwork.
- **Desk lamp**, KaramellGlass: https://sketchfab.com/3d-models/desk-lamp-7377ec591df04445a1aae370017aaa13 — CC BY 4.0. Rescaled and relit.
- **Mechanical Keyboard**, Flexryhe: https://sketchfab.com/3d-models/mechanical-keyboard-95d050e7a5954ff6ac7fbe4ac5301b3c — Sketchfab Standard licence as recorded in the supplied GLB. Rescaled and repositioned.

The uploaded noncommercial chair is excluded. Room, desk, chair, skyline, screen artwork and interactions are original scene code. Three.js and esbuild use the MIT licence. Fonts are DM Sans and Manrope, loaded from Google Fonts with local system fallbacks. Preserve artist credits when publishing.

## Verification

JavaScript syntax checks, the production build, internal portfolio-route checks and a clean extracted-package build were performed. The HTML portfolio, case-study navigation, contact page, and email-copy action were tested in a browser. WebGL was unavailable in that browser, so review the 3D room and motion on a capable laptop or phone.
