# YiDD Studio website

A static English-language indie game studio portfolio designed for GitHub Pages.

## Before publishing
1. Open `site-config.js` and put your public contact email between the quotes (or leave it empty and replace the contact button later).
2. Review all game names, descriptions, and development status. The illustrations are CSS-based placeholders, not your existing game assets. Replace them with your real screenshots when ready.
3. The games have no fabricated playable links. Add real links after publishing builds.

## Publish using GitHub Pages
1. On GitHub, create a **public** repository called `yidd-studio` (or another name).
2. Choose **Add file → Upload files** and upload the extracted **contents** of this folder (not the ZIP itself), including `index.html` at the repository root.
3. Commit the files.
4. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Your eventual URL will usually be `https://YOUR-USERNAME.github.io/yidd-studio/` (replace YOUR-USERNAME and repository name). Wait for Pages deployment to complete, then open and verify the website.
6. For a publisher's **Domains** field, if it expects a hostname rather than full URL, enter `YOUR-USERNAME.github.io`; check the platform's exact validation requirements.

This website uses Google Fonts with local sans-serif fallbacks. No build tools required.
