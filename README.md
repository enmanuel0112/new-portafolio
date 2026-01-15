# Portfolio — Cesar Ogando

Personal portfolio built with React and SCSS. It includes about, projects, and experience sections, smooth scrolling, and active-section highlighting via `IntersectionObserver`.

### Demo
- Production (GitHub Pages): https://enmanuel0112.github.io/new-portafolio/
- Local dev: http://localhost:3000

## Requirements
- Node.js 18+ (recommended)
- npm (comes with Node)

## Scripts
- `npm start` — Run the dev server.
- `npm run build` — Create an optimized build in `build/`.
- `npx gh-pages -d build -b gh-pages` — Publish the build to the `gh-pages` branch (the `homepage` is already set).

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development:
   ```bash
   npm start
   ```
3. Open http://localhost:3000 in your browser.

## Deploy to GitHub Pages
1. Build the app:
   ```bash
   npm run build
   ```
2. Publish the build:
   ```bash
   npx gh-pages -d build -b gh-pages
   ```
The `homepage` is set to `https://enmanuel0112.github.io/new-portafolio`, so asset paths resolve correctly.

## Tech stack
- React 18 + Context API
- SCSS
- react-icons
- Create React App

## Quick structure
- `src/componentes/` — Main sections: `Header`, `About`, `Project`, `Experience`, nav buttons.
- `src/context/` — Shared refs and active-section state.
- `src/scss/` — Global and section styles.

## Maintenance notes
- Lint warns about an unused import in `src/componentes/Header.jsx` (`MdEmail`); remove it if not needed.
- If you see `start` flex warnings, switch the value to `flex-start` in the relevant styles.
