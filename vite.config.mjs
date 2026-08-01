//vite.config.mjs
import { defineConfig } from 'vite';
import path from 'path';
import VitePluginBrowserSync from 'vite-plugin-browser-sync'

const JS_FILE = path.resolve('assets/src/js/main.js')

// Define where the compiled and minified JavaScript files will be saved
const BUILD_DIR = path.resolve(__dirname, 'assets/dist');

export default defineConfig({
  plugins: [VitePluginBrowserSync()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  build: {
    assetsDir: '', // Will save the compiled JavaScript files in the root of the dist folder
    manifest: true, // Generate manifest.json file (for caching)
    emptyOutDir: true, // Empty the dist folder before building
    outDir: BUILD_DIR,
    rollupOptions: {
      input: JS_FILE,
    },
  },
});