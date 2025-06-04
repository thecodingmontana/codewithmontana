// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    name: 'thecodingmontana/tailwind',
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'vue/no-v-html': 'off',
    },
  },
)
