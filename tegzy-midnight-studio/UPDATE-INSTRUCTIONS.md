# Midnight Studio — design and content update

This is an update to the existing site. It keeps your uploaded GLB models and Vercel setup.

## What changed

- Graphite, warm white and red replace the green palette.
- Archivo and IBM Plex Mono replace the previous typography.
- The homepage introduces Samuel Onoriode directly.
- Project stories now feature Mac Solutions, Black Edition Rentals, Serene Scripture and Midnight Studio.
- Mac Solutions and the reader use real interface captures. The rental artwork uses the hero photograph from its repository; it is not presented as a screenshot.
- The case studies distinguish prototypes and simulated payments from production features.
- Public email, GitHub, Substack and TikTok destinations are included, with a working copy-email button.
- The original 3D scene remains, with revised colours and monitor artwork.
- The fallback for browsers without WebGL is now a usable project index.

## Update GitHub without adding another nested folder

1. Extract the update ZIP.
2. Open the repository `Tegzy142/Tegzy-Midnight-studio` on GitHub at its top level, where you can see the existing `tegzy-midnight-studio` folder.
3. Choose **Add file → Upload files**.
4. Drag the extracted `tegzy-midnight-studio` folder onto the upload page. This merges the changed files at their existing paths. Do not upload the ZIP itself.
5. Commit. Keep Vercel’s Root Directory set to the same `tegzy-midnight-studio` folder. Build command remains `npm run build`; output remains `dist`.
6. Let the connected Git deployment run, or redeploy the latest commit in Vercel.

The ZIP contains changed and new files only. Keep all existing files not included in this update, especially `dist/assets/*.glb`, `package.json`, `package-lock.json`, and `vercel.json`.

## Exact files

- `tegzy-midnight-studio/src.js`
- `tegzy-midnight-studio/portfolio-content.js`
- `tegzy-midnight-studio/dist/index.html`
- `tegzy-midnight-studio/dist/style.css`
- `tegzy-midnight-studio/dist/app.js`
- `tegzy-midnight-studio/dist/icon.svg`
- `tegzy-midnight-studio/dist/assets/projects/mac-solutions.jpg`
- `tegzy-midnight-studio/dist/assets/projects/black-edition.jpg`
- `tegzy-midnight-studio/dist/assets/projects/serene-scripture.jpg`
- `tegzy-midnight-studio/scripts/dev.mjs`
- `tegzy-midnight-studio/README.md`
- `tegzy-midnight-studio/UPDATE-INSTRUCTIONS.md`

## Contact details in this revision

Email: onoriodesamuel688@gmail.com
GitHub: https://github.com/Tegzy142
Substack: https://substack.com/@tegzythedeveloper
TikTok: https://www.tiktok.com/@tegzyweb

These were recovered from your previously supplied public profile information. Edit `portfolio-content.js` and the homepage footer if needed. No phone number, LinkedIn URL, or Instagram URL was invented.

## Verification

JavaScript syntax checks, production bundling, project asset checks, and local browser checks passed. Work navigation, project details, Contact navigation and the email-copy action were tested in the browser. This browser does not support WebGL, so the fallback and HTML portfolio were visually verified; the updated 3D palette and camera scene need review on a WebGL-capable laptop or phone. The Vercel preview URL required authentication in this browser. Your Vercel deployment is unchanged until this update is committed to your repository.
