import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-v2/",
  plugins: [react()],
  server: {
    allowedHosts: [".loca.lt"],
  },
  preview: {
    allowedHosts: [".loca.lt"],
  },
});
