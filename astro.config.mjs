import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import { remarkReadingTime } from "./src/utils/all";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [
    tailwind(), 
    sitemap( {lasdmod: new Date()} ), 
    prefetch()
  ]
});