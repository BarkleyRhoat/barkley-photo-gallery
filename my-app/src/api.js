// Base URL for the JSON Server API.
// In production (Netlify build), REACT_APP_API_URL is set to the deployed
// Render backend URL via my-app/.env.production. Locally, it falls back to
// the json-server dev server started with `npm run server`.
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
