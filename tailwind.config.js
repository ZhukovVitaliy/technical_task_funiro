/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

// module.exports = withMT({
//   content: ['./pages/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
        gilroyMedium: ['Gilroy-Medium', 'sans-serif'],
        gilroylight: ['Gilroy-light', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
