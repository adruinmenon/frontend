import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    process.env.PLATFORM === "cloudflare" ? cloudflare({ viteEnvironment: { name: "ssr" } }) : undefined,
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  build: {
    target: "esnext",
  },
  ...process.env.PLATFORM === "cloudflare" ? {
    optimizeDeps: {
      exclude: ["virtual:react-router/server-build"],
    },
  } : {},

});