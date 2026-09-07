import { defineConfig } from "astro/config";

export default defineConfig({
  trailingSlash: "never",
  redirects: {
    "/": "/en",
  },
});
