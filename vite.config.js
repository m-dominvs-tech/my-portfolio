import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/my-portfolio/", // 👈 Dejamos solo esta línea agregada de forma correcta
});
