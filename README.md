# Nosa Omoragbon — Digital Marketing Portfolio

A static portfolio website for digital marketing strategist Nosa Omoragbon. Data-driven: all case studies, skills, testimonials, and showcase content live in `js/data.js` and render into `index.html` and `case-study.html`.

## Tech
- Vanilla HTML / CSS / JavaScript (no build step)
- Deployed as a static site on Vercel

## Structure
- `index.html` — homepage (hero, case studies, showcase, process, skills, testimonials, contact)
- `case-study.html` — case study detail page (loads via `?slug=`)
- `js/data.js` — all site content (edit this to update cases/skills/showcase)
- `js/main.js` — rendering and interactions
- `css/styles.css` — all styles
- `Images/` — per-case-study folders + showcase folders

## Local
Serve the folder with any static server, e.g. `npx serve` or Python's `http.server`.