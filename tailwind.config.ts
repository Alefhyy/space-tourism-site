import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)", "serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
        "floral-white": "#FCF8F0",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config
