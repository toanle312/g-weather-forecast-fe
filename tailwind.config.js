/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 25px -5px rgb(0 0 0/0.2)',
      },
    },
  },
  plugins: [],
};
