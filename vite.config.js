import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "vocab-builder": resolve(__dirname, "vocab-builder.html"),
        polyglot: resolve(__dirname, "polyglot.html"),
        "rent-a-van": resolve(__dirname, "rent-a-van.html"),
        "stock-picker": resolve(__dirname, "stock-picker.html"),
      },
    },
  },
});
