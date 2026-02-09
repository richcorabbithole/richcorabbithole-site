// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://richcompton1705.github.io',
  base: '/richcorabbithole-site',
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});
