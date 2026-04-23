// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/icons",
      include: {
        local: ["*"],
      },
    }),
  ],
});
