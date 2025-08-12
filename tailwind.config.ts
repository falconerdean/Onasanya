import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            color: 'rgb(2, 52, 54)', // midnight-green
            h2: {
              color: 'rgb(2, 52, 54)', // midnight-green
            },
            h3: {
              color: 'rgb(2, 52, 54)', // midnight-green
            },
            strong: {
              color: 'rgb(2, 52, 54)', // midnight-green
            },
            a: {
              color: 'rgb(4, 154, 143)', // persian-green
              '&:hover': {
                color: 'rgb(0, 191, 179)', // light-sea-green
              },
            },
          },
        },
      },
      colors: {
        // New color palette from reference site
        'light-sea-green': 'rgb(0, 191, 179)',
        'pine-green': 'rgb(42, 124, 111)',
        'midnight-green': 'rgb(2, 52, 54)', // for primary text
        'persian-green': 'rgb(4, 154, 143)', // for primary buttons and accents
        'evergreen-green': '#2A7C6F', // new evergreen color
        // Legacy colors (keeping for UI components that still need them)
        primary: {
          DEFAULT: '#536c46',
          dark: '#3a4d31',
        },
        orange: {
          DEFAULT: '#e8963f',
          dark: '#d17e2f',
        },
        text: {
          dark: '#333333',
          light: '#666666',
        }
      },
      fontFamily: {
        // New font families from reference site
        serif: ['Cormorant Garamond', 'serif'], // for headings
        sans: ['Inter', 'sans-serif'], // for body text
        // Legacy fonts (keeping for backward compatibility)
        'legacy-serif': ['Josefin Sans', 'sans-serif'],
        'legacy-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;