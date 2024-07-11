import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import "package-does-not-exist";

export default defineConfig({ plugins: [solidPlugin()] });
