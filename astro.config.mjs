import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  output: 'static',
  // TODO: Set `site` to the production URL after creating the Pages project.
  integrations: [
    starlight({
      title: 'Onyxium',
      sidebar: [{ label: 'Overview', slug: '' }],
    }),
  ],
});
