import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
import OpenIde from "vite-inspector";

export default defineConfig({
  base: "/swapi-characters",
  plugins: [
    OpenIde({
      framework: "react",
    }),
    react(),
    Inspect(),
  ],
});