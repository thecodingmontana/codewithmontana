import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200% 200%',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
