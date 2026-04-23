// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://nielg.github.io/",
  base: "/CobaltBlueCoaching",
  integrations: [
    icon({
      iconDir: "src/icons",
      include: {
        local: ["*"],
      },
    }),
  ],
});
