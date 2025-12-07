import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fineye.co.za',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  vite: {
    optimizeDeps: {
      exclude: ['plausible-tracker']
    }
  }
});
