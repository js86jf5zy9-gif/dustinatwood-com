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

- `npm run upload` sources `.env` and needs `SITE` (S3 bucket), `DIS` (CloudFront distribution ID), and `AWS_PROFILE`. Note that `.env.sample` lists `PROFILE`, but the script reads `$AWS_PROFILE`. `index.html` is uploaded with `Cache-Control: no-cache`.
- Both `package-lock.json` and `yarn.lock` are committed. Scripts and README use npm.
- Linting runs only in CI: GitHub Super-Linter (`.github/workflows/linter.yml`) checks changed files on PRs to `main` and on pushes to other branches. There is no local lint config or script.

## Architecture

- **Entry:** `src/index.js` renders `views/App.js` and registers the CRA service worker (`registerServiceWorker.js`). Because assets are served cache-first, users see deployed changes only on their next visit.
- **Routing is data-driven:** `src/routes/index.js` exports an array of `{ path, name, component, hidden? }`. `App` maps it to `<Route exact>`s, with `NoMatch` as the fallback. The same array is passed to `Navbar` and `Footer` to build nav links, and `hidden: true` (e.g. `/thanks`) keeps a route out of the nav. To add a page, add a view in `src/views/` and an entry here.
- **Styling:** Each view or component has a matching JSS style function in `src/styles/<name>Style.js` (`theme => ({...})`), applied with `withStyles(...)`. The global theme lives in `styles/appTheme.js`: dark grey primary and green secondary. `materialize-css` is also imported globally in `App.js`, so `src/index.css` has overrides to undo Materialize styles that clash with MUI inputs.
- **MUI v1 APIs:** Use v1-era names such as `variant="display4"`/`"title"`/`"subheading"`, `Button variant="raised"`, `theme.spacing.unit`, `MuiThemeProvider`, `createMuiTheme`, and `Grid justify=`. Don't use v4/v5 APIs without upgrading the dependency.
- **Content is JSON-driven:**
  - `src/data/skills.json` populates the skills columns on Home.
  - `src/data/projects.json` populates Projects. Each project's image is loaded with `require.context('../images')` as `./<name>.png`, so a new project needs `src/images/<name>.png` matching its `name`. `tech` is a comma-separated string.
  - `src/routes/social.js` holds the social links used in the footer.
- **Contact form:** `views/Contact.js` posts directly to Formspree. A hidden `_next=/thanks` field redirects to the Thanks route. There is no backend.
- Google Analytics (gtag) is loaded in `public/index.html`.
