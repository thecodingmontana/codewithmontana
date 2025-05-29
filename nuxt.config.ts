import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [
      // @ts-expect-error just expect an error
      tailwindcss()
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "thecodingmontana-color-mode",
  },

  future: {
    compatibilityVersion: 4,
  },
  fonts: {
    families: [
      { name: "Geist", provider: "google" },
      {
        name: "Nyght",
        src: { url: "/fonts/NyghtSerif-MediumItalic.woff", format: "woff" },
      },
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
