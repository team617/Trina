import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-coral': '#f8f0e9',
        'soft-clay': '#c09c80',
        'dark-kakao': '#34231a',
        'warm-sand': '#d1bca8',
        'deep-reef': '#014544',
        'soft-sea': '#abc6b5',
      },
      fontFamily: {
        'rustique': ['var(--font-rustique)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'title': ['72px', { lineHeight: '110%', letterSpacing: '0%' }],
        'headline': ['40px', { lineHeight: '110%', letterSpacing: '0%' }],
        'subline': ['16px', { lineHeight: '120%', letterSpacing: '10%' }],
        'body': ['16px', { lineHeight: '110%', letterSpacing: '0%' }],
      },
    },
  },
  plugins: [],
}
export default config
