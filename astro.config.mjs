import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkGfm from "remark-gfm";

export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      // 'css-variables' allows us to style the code with our Gold accent
      theme: "github-dark",
      wrap: true,
    },
  },
});
