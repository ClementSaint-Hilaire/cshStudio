import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-500': '#0a84ff',
      monochrome: {
        100: '#ffffff',
        200: '#f5f5f7',
        300: '#ddddde',
        400: '#bababd',
        500: '#75757a',
        600: '#3a3a3d',
        700: '#1d1d1e',
        800: '#1d1d1f',
        900: '#000000'
      }
    },
    fontSize: {
      caption: '0.5625rem',
      subbody: '0.875rem',
      body: '1rem',
      heading: '1.25rem',
      subtitle: '1.5rem',
      'title': '2.5rem',
      'display': '3.375rem'
    },
    fontFamily: {
      'satoshi-variable': 'Satoshi Variable'
    },
    borderRadius: {
      'rounded-0': '0rem',
      'rounded-1': '0.0062500000931322575rem',
      'rounded-2': '0.0520833320915699rem',
      'rounded-3': '0.0625rem',
      'rounded-4': '0.09375rem',
      'rounded-5': '0.125rem',
      'rounded-6': '0.15625rem',
      'rounded-7': '0.1875rem',
      'rounded-8': '0.2083333283662796rem',
      'rounded-9': '0.25rem',
      'rounded-10': '0.3125rem',
      'rounded-11': '0.375rem',
      'rounded-12': '0.5rem',
      'rounded-13': '0.5625rem',
      'rounded-14': '0.75rem',
      'rounded-15': '1.5rem',
      'rounded-16': '1.5625rem',
      'rounded-17': '1.625rem',
      'rounded-18': '2.8125rem',
      'rounded-19': '62.4375rem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 