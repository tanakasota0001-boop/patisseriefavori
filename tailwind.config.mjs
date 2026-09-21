/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f6f2ea',
          200: '#eee6d8',
          300: '#e2d8c4',
          400: '#d1c4aa',
          500: '#b8a88c',
          900: '#2b2620',
        },
        gold: {
          50: '#fcf7f2',
          100: '#f8ecdf',
          200: '#eed6bd',
          300: '#e1bd95',
          400: '#d2a472',
          500: '#c4935f',
          600: '#b4824d',
          700: '#966735',
          800: '#754d24',
          900: '#4d3014',
          DEFAULT: '#b4824d',
        },
        orange: {
          50: '#fcf7f2',
          100: '#f8ecdf',
          200: '#eed6bd',
          300: '#e1bd95',
          400: '#d2a472',
          500: '#c4935f',
          600: '#b4824d',
          700: '#966735',
          800: '#754d24',
          900: '#4d3014',
          DEFAULT: '#b4824d',
        },
        brand: {
          50: '#fcf7f2',
          100: '#f8ecdf',
          200: '#eed6bd',
          300: '#e1bd95',
          400: '#d2a472',
          500: '#c4935f',
          600: '#b4824d',
          700: '#966735',
          800: '#754d24',
          900: '#4d3014',
          DEFAULT: '#b4824d',
        },
        noir: {
          800: '#24211e',
          900: '#1a1816',
          950: '#121110',
        },
        berry: {
          50: '#fdf6f7',
          100: '#fbe9ec',
          700: '#963d50',
          800: '#7c2c3e',
          900: '#5c1b2b',
        },
        blue: {
          50: '#f4f7f9',
          600: '#4a6b82',
          700: '#385366',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        sans: ['"Cinzel"', '"Montserrat"', '"Hiragino Sans"', 'sans-serif'],
        display: ['"Playfair Display"', '"Shippori Mincho"', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '.25em',
        'mega-wide': '.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
