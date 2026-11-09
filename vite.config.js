import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Update this for a GitHub Pages subpath only when you decide to deploy.
});
