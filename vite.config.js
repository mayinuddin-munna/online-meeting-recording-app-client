/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  test: {
    globals: true,
    // environment: "jsdom",
    // setupFiles: "./src/__test__/setup.js",
    css: true,
  },
});

