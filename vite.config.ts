import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "src");

function regexChecker(regex: RegExp, fileName: string): boolean {
  return regex.test(fileName) ? true : false;
}

export default defineConfig({
  appType: "spa",
  plugins: [
    react(),
    cesium(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(root, "src"),
      assets: path.resolve(root, "assets"),
      components: path.resolve(root, "components"),
      constants: path.resolve(root, "constants"),
      i18n: path.resolve(root, "i18n"),
      store: path.resolve(root, "store"),
      types: path.resolve(root, "types"),
      utils: path.resolve(root, "utils"),
      "web-components": path.resolve(root, "web-components")
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].[hash].js",
        chunkFileNames: "js/[name].[hash].js",
        assetFileNames: (chunkInfo) => {
          const chunkInfoNames: string[] = chunkInfo.names;

          if (chunkInfoNames) {
            for (let i = 0; i < chunkInfoNames?.length; ++i) {
              const chunkInfoName: string = chunkInfoNames[i];
              if (regexChecker(/\.(css)$/, chunkInfoName)) return "css/[name].[hash].[ext]";
              if (regexChecker(/\.(svg)$/, chunkInfoName)) return "assets/svg/[name].[hash].[ext]";
              if (regexChecker(/\.(jpg|jpeg)$/, chunkInfoName)) return "assets/jpg/[name].[hash].[ext]";
              if (regexChecker(/\.(png)$/, chunkInfoName)) return "assets/png/[name].[hash].[ext]";
              if (regexChecker(/\.(gif)$/, chunkInfoName)) return "assets/gif/[name].[hash].[ext]";
              if (regexChecker(/\.(woff|woff2)$/, chunkInfoName)) return "assets/fonts/[name].[hash].[ext]";
              if (regexChecker(/\.(worker)\.(js)$/, chunkInfoName)) return "js/[name].[hash].js";
            }
          }

          return "assets/[name].[hash].[ext]";
        },
      },
    },
  },
});
