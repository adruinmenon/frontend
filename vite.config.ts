import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  worker: {
    format: "es",
  },
  plugins: [
    process.env.NODE_ENV === "production"
      ? cloudflare({ viteEnvironment: { name: "ssr" } })
      : undefined,
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: ["virtual:react-router/server-build"],
  },
});