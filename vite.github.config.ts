import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";

const repositoryBase = "/sabahholding/";
const repositoryPrefix = repositoryBase.replace(/\/$/, "");

function githubPagesAssets(): Plugin {
  return {
    name: "github-pages-assets",
    enforce: "pre",
    transform(code, id) {
      const normalizedId = id.replace(/\\/g, "/");

      if (normalizedId.endsWith("/app/globals.css")) {
        return code.replace(
          /url\((["'])\/(fonts|media)\//g,
          'url($1../public/$2/',
        );
      }

      if (/\/app\/(?:SabahSite|PortfolioSections|portfolioContent)\.(?:ts|tsx)$/.test(normalizedId)) {
        return code
          .replaceAll('"/media/', `"${repositoryPrefix}/media/`)
          .replaceAll('"/sabah-logo', `"${repositoryPrefix}/sabah-logo`);
      }

      return null;
    },
  };
}

export default defineConfig({
  root: "github-pages",
  base: repositoryBase,
  publicDir: "../public",
  plugins: [githubPagesAssets(), react()],
  resolve: {
    alias: [
      {
        find: "next/image",
        replacement: fileURLToPath(new URL("./github-pages/next-image.tsx", import.meta.url)),
      },
      {
        find: "next/link",
        replacement: fileURLToPath(new URL("./github-pages/next-link.tsx", import.meta.url)),
      },
    ],
  },
  build: {
    outDir: "../dist-github-pages",
    emptyOutDir: true,
  },
});
