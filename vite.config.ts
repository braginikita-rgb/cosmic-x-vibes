import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      pages: [
        { path: "/" },
        { path: "/tickets" },
        { path: "/shop" },
        { path: "/blog" },
        { path: "/contacts" },
      ],
      prerender: {
        enabled: true,
        crawlLinks: false,
        failOnError: true,
      },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
    }),
    react(),
  ],
  css: {
    transformer: "lightningcss",
  },
  define: Object.fromEntries(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
  ),
});
