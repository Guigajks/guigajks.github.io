import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://guigajks.github.io",
  trailingSlash: "never",
  redirects: {
    "/": "/en",
  },
});
