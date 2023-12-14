// import HelloWorld from './src/integration/HelloWorld';
// use resolve will cause pre building fail
import HelloWorld from '@/integration/HelloWorld';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    HelloWorld()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
