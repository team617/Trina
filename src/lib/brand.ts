/**
 * Brand Design Tokens
 * Derived from Trina Requena Visual Branding Guidelines
 */

export const brand = {
  colors: {
    whiteCoral: '#f8f0e9',
    softClay: '#c09c80',
    darkKakao: '#34231a',
    warmSand: '#d1bca8',
    deepReef: '#014544',
    softSea: '#abc6b5',
  },

  typography: {
    fonts: {
      heading: 'var(--font-rustique)',
      body: 'var(--font-inter)',
    },
    sizes: {
      title: {
        fontSize: '72px',
        lineHeight: '110%',
        letterSpacing: '0%',
      },
      headline: {
        fontSize: '40px',
        lineHeight: '110%',
        letterSpacing: '0%',
      },
      subline: {
        fontSize: '16px',
        lineHeight: '120%',
        letterSpacing: '10%',
      },
      body: {
        fontSize: '16px',
        lineHeight: '110%',
        letterSpacing: '0%',
      },
    },
  },

  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
    '4xl': '8rem',  // 128px
  },

  radii: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(52, 35, 26, 0.05)',
    md: '0 4px 6px -1px rgba(52, 35, 26, 0.1)',
    lg: '0 10px 15px -3px rgba(52, 35, 26, 0.1)',
    xl: '0 20px 25px -5px rgba(52, 35, 26, 0.1)',
  },
} as const

export type Brand = typeof brand
