# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, etc.) when working with code in this repository.

## Overview

Personal portfolio site for dustinatwood.com. A Create React App (`react-scripts` 1.1.4) single-page app using React 16, React Router v4, and Material-UI **v1** (`@material-ui/core@^1.1.0`). It is deployed as static files to AWS S3 behind CloudFront.

## Commands

```sh
npm install        # README targets Node v8.11.1 / npm 6.1.0. react-scripts 1.x may fail on modern Node.
npm start          # dev server at http://localhost:3000
npm run build      # production bundle in ./build
npm test           # CRA Jest runner (jsdom). There are currently no test files.
npm test -- -t "name"   # run a single test by name once tests exist
npm run deploy     # clean build, then upload to S3 and invalidate CloudFront
```

- Copy `.env.sample` to `.env` and replace the `REPLACE_WITH_*` values. `npm run upload` sources it for `SITE` (S3 bucket), `DIS` (CloudFront distribution ID), and `AWS_PROFILE`. CRA reads the same file at build time for `REACT_APP_FORMSPREE_ID`. `index.html` and `service-worker.js` are uploaded with `Cache-Control: no-cache`.
- Both `package-lock.json` and `yarn.lock` are committed. Scripts and README use npm, and `yarn.lock` is not kept in sync.
- Linting runs only in CI: GitHub Super-Linter (`.github/workflows/linter.yml`) checks changed files on PRs to `main` and on pushes to other branches. There is no local lint config or script.

## Architecture

- **Entry:** `src/index.js` renders `views/App.js` and registers the CRA service worker (`registerServiceWorker.js`). Assets are served cache-first. The worker re-checks for a new deploy when the tab regains focus and hourly, then dispatches `SW_UPDATE_EVENT`, which `components/UpdateNotice.js` turns into a "Refresh" snackbar.
- **Background:** `components/Starfield.js` draws an animated, parallax star field on a fixed `<canvas>` behind `.app-shell`. Layers move with scroll and pointer at different rates. It pauses when the tab is hidden and renders one static frame under `prefers-reduced-motion`.
- **Routing is data-driven:** `src/routes/index.js` exports an array of `{ path, name, component, hidden? }`. `App` maps it to `<Route exact>`s, with `NoMatch` as the fallback. The same array is passed to `Navbar` and `Footer` to build nav links, and `hidden: true` (e.g. `/thanks`) keeps a route out of the nav. To add a page, add a view in `src/views/` and an entry here.
- **Styling:** Each view or component has a matching JSS style function in `src/styles/<name>Style.js` (`theme => ({...})`), applied with `withStyles(...)`. The dark theme lives in `styles/appTheme.js` (periwinkle primary, teal secondary, Inter font). CSS variables, the sky layers, the `.page` container and the `.fade-up` entrance animation are in `src/index.css`. `components/GlassCard.js` is the shared translucent card. Layouts use CSS grid/flex rather than MUI `Grid`.
- **MUI v1 APIs:** Use v1-era names such as `variant="display4"`/`"title"`/`"subheading"`, `Button variant="raised"`, `theme.spacing.unit`, `MuiThemeProvider`, `createMuiTheme`, and `Grid justify=`. Don't use v4/v5 APIs without upgrading the dependency.
- **Content is JSON-driven:**
  - `src/data/profile.json` holds the bio copy, the fact list on About, and the role/experience line in the Home hero.
  - `src/data/skills.json` has `highlights` (the "What I bring" cards) and `groups` (the skill chips) on Home.
  - `src/data/projects.json` populates Projects. Each project's image is loaded with `require.context('../images')` as `./<name>.png`, so a new project needs `src/images/<name>.png` matching its `name`. `tech` is a comma-separated string.
  - `src/routes/social.js` holds the social links used in the footer.
- **Contact form:** `views/Contact.js` submits from the browser straight to Formspree (`https://formspree.io/f/<REACT_APP_FORMSPREE_ID>`, see `src/config.js`), then routes to the hidden `/thanks` page. There is no backend. Without the env var, submitting shows an inline "not configured" message.
- Google Analytics (gtag) is loaded in `public/index.html`.
