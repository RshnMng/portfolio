import { defineConfig } from "vite";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    copy({
      targets: [
        {
          src: resolve(__dirname, "_redirects"),
          dest: resolve(__dirname, "dist"),
        },
      ],
      hook: "closeBundle",
    }),
  ],
  build: {
    outDir: "dist", // Ensure this matches your build directory
  },
});
