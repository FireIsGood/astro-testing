import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/astro-testing",
});
