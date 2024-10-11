/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { createThemes } from 'tw-colors';

const config: Config = {
  important: true,
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['Oswald'],
      },
      container: {
        center: true,
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        // 'cool-orange': '#EF9B4B',
        // 'cool-orange': '#000000',

        black: colors.black,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        lime: colors.lime,
        rose: colors.rose,
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss/colors'),
    createThemes({
      light: {
        primary: '#0073D1',
        secondary: '#003EAD',

      },
      dark: {
        primary: '#0073D1',
        secondary: '#003EAD',
      },
    },
      {
        produceThemeVariant: (themeName) => `theme-${themeName}`,
      }),
  ],
};

export default config;