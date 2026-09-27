import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.onyxium.dev',
  output: 'static',
  integrations: [
    starlight({
      title: 'Onyxium',
      sidebar: [{ label: 'Overview', slug: '' }],
    }),
  ],
});
