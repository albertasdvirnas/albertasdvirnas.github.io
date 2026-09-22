import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://albertasdvirnas.github.io',
  // Emit /projects.html etc. so every URL from the old hand-written site keeps working.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [mdx()],
});
