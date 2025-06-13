import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'nuxt-charts',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'thecodingmontana-color-mode',
  },
  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
        redirectURL: process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URL,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    rollupConfig: {
      plugins: [vue()],
    },
    experimental: {
      openAPI: true,
    },
    openAPI: {
      route: '/_docs/openapi.json',
      ui: {
        scalar: {
          route: '/_docs/scalar',
        },
        swagger: {
          route: '/_docs/swagger',
        },
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      Components({
        dts: true,
        resolvers: [
          MotionResolver(),
        ],
      }),
    ],
  },
  auth: {
    webAuthn: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      {
        name: 'Nyght',
        src: { url: '/fonts/NyghtSerif-MediumItalic.woff', format: 'woff' },
      },
    ],
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  piniaPluginPersistedstate: {
    storage: 'cookies',
    cookieOptions: {
      sameSite: 'lax',
    },
    debug: true,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
