# Muskan Bepari — Developer Portfolio

A dark, violet-accented, fully responsive portfolio built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**. Deployed automatically to **GitHub Pages** at <https://muskanbepari04.github.io/>.

- Hybrid hero + bento layout with a custom SVG illustration
- Sections: Hero, About, Skills, Experience, Projects, Services, Resume download, Contact
- Contact form that opens a pre-filled `mailto:` draft — no backend, no third-party form service
- Accessible: semantic landmarks, skip link, labelled controls, keyboard-friendly mobile menu, visible focus rings, `prefers-reduced-motion` support
- SEO: meta description, canonical URL, Open Graph / Twitter tags, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- No environment variables or secrets required

---

## Quick start

Requires **Node.js 20.19+** (22 recommended — see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

---

## Editing content

All content lives in `src/data/` — you shouldn't need to touch components to update the site.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, headline, intro, availability, email, social links, About copy |
| `src/data/skills.ts` | Skill groups (Frontend / Backend / Databases / Tools) and capability list |
| `src/data/experience.ts` | Roles, employers/clients, highlights, achievements |
| `src/data/projects.ts` | Project cards, tags, live/repo links |
| `src/data/services.ts` | Services offered |
| `src/data/navigation.ts` | Navbar / footer links |

**Placeholders** are written as `[Bracketed text]` — search the `src/data` folder for `[` to find every one.

- Keep experience entries **public and non-confidential**: describe your scope and outcomes, not internal systems, client data, or proprietary metrics.
- Leave a project's `liveUrl` / `repoUrl` empty to hide that button.
- One project with `featured: true` plus four entries total fills the grid evenly.
- To hide the Highlights card, set `achievements` to an empty array.

### Resume

Place your resume at **`public/resume.pdf`**. It's linked from the navbar, hero, and Resume section. The deploy workflow prints a warning if the file is missing.

### Styling

Theme tokens (fonts, the `ink` background palette, easing) are in `src/index.css` under `@theme`. Shared component classes (`.card`, `.field`, `.eyebrow`, `.icon-tile`) live in the same file.

---

## Deploying to GitHub Pages

The repo is set up for the **user site** `MuskanBepari04/MuskanBepari04.github.io`, which is served from the domain root — so Vite's `base` is `/`.

### One-time setup

1. **Enable Actions-based Pages.** In the GitHub repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. **Push this project to the repository's `main` branch.**

   If the repository already contains files you want to replace:

   ```bash
   git init
   git add .
   git commit -m "Portfolio: initial build"
   git branch -M main
   git remote add origin https://github.com/MuskanBepari04/MuskanBepari04.github.io.git
   git push -u origin main --force   # replaces the existing contents of main
   ```

   > `--force` overwrites the remote `main` history. Skip it (and `git pull --rebase` first) if you want to keep the existing commits.

### Every deploy after that

Push to `main`. The workflow at `.github/workflows/deploy.yml` will:

1. Install dependencies with `npm ci` (using the Node version in `.nvmrc`)
2. Type-check and build with `npm run build`
3. Upload `dist/` and publish it with the official `actions/deploy-pages` action

Progress appears under the repo's **Actions** tab; the live URL is shown on the `github-pages` environment. You can also trigger a deploy manually via **Actions → Deploy to GitHub Pages → Run workflow**.

### Deploying to a project repo instead

If you ever host this under a project repo (e.g. `username.github.io/portfolio/`), set the base path at build time — add this to the **Build** step in the workflow:

```yaml
        env:
          VITE_BASE: /portfolio/
```

…and update the canonical / Open Graph URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

---

## Security notes

- The site is fully static. There is no backend, no API key, and no form service.
- The workflow uses GitHub's short-lived OIDC token with least-privilege permissions (`contents: read`, `pages: write`, `id-token: write`). No repository secrets are needed.
- `.env*` files are git-ignored. Don't put secrets in `VITE_*` variables — anything prefixed `VITE_` is embedded in the public JavaScript bundle.

---

## Project structure

```
.github/workflows/deploy.yml   CI: build + deploy to GitHub Pages
public/                        Static files served as-is (favicon, robots, sitemap, resume.pdf)
src/
  components/                  Page sections (Hero, About, Skills, …)
    ui/                        Reusable primitives (Button, Card, Section, Icon, Tag, Reveal)
  data/                        All editable content
  hooks/                       useInView, useActiveSection
  lib/                         Helpers (mailto builder, class names, asset paths)
  index.css                    Tailwind import, theme tokens, component classes
index.html                     HTML shell + SEO metadata
vite.config.ts                 Vite + React + Tailwind plugins, base path
```
