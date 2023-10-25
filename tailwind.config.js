/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#287feb',
        neutrals: {
          base: '#1b1d1f',
          gray: '#72787f',
          lightGray: '#e8ebed',
          light: '#f7f8f9',
          white: '#ffffff',
        },
        accent: {
          green: '#40908c',
          purple: '#6973db',
          orange: '#d25e00',
        },
        secondary: '#ddefff',
      },
      fontSize: {
        sm: '1rem',
        base: '1.125rem',
        lg: '1.375rem',
        xl: '1.625rem',
        '2xl': '2.3125rem',
        '3xl': '3.25rem',
        '4xl': '4.125rem',
        '5xl': '5rem',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        button: '0px 4px 5px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
