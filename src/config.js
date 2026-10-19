// Build-time settings, read from .env (see .env.sample). CRA only exposes
// variables prefixed with REACT_APP_ to the browser bundle.
const FORMSPREE_PLACEHOLDER = 'REPLACE_WITH_FORMSPREE_FORM_ID';

export const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_ID || FORMSPREE_PLACEHOLDER;
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
export const FORMSPREE_CONFIGURED = FORMSPREE_FORM_ID !== FORMSPREE_PLACEHOLDER;
