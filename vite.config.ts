import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteMinifyPlugin } from "vite-plugin-minify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin()],
  root: "src",
  publicDir: "../public",
  build: {
    cssMinify: true,
    outDir: "../dist",
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        booleans_as_integers: true,
      },
    },
  },
});
