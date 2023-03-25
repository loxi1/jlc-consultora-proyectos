import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import { remarkReadingTime } from "./src/utils/all";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

const website = 'https://jlcelectricistas.com/'

// https://astro.build/config
export default defineConfig({
  site: website,
  integrations: [
    tailwind(), 
    sitemap( {lasdmod: new Date()} ), 
    prefetch()
  ]
});