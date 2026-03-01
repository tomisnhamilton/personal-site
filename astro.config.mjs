import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    shikiConfig: {
      // 'css-variables' allows us to style the code with our Gold accent
      theme: "github-dark",
      wrap: true,
    },
  },
});
