import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.onyxium.dev',
  output: 'static',
  integrations: [
    starlight({
      title: 'Onyxium',
      components: {
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
        { label: 'Overview', slug: '' },
        { label: 'Setting up', slug: 'setting-up' },
        {
          label: 'Developers',
          items: [
            { label: 'Working with Commands', slug: 'developers/working-with-commands' },
          ],
        },
      ],
    }),
  ],
});
