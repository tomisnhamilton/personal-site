import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      // 'css-variables' allows us to style the code with our Gold accent
      theme: "github-dark",
      wrap: true,
    },
  },
});
