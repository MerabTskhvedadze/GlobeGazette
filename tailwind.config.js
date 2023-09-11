/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Newsreader: 'Newsreader',
    },
    screens: {
      xxl: '1800px',
      xl: '1300px',
      lg: '1024px',
      md: '800px',
      sm: '500px',
      xs: '300px',
      xxs: '200px',
    },
  },
  plugins: [],
};
