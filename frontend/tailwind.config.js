/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['DM Sans','SF Pro', 'Helvetica', 'Arial', 'sans-serif'],
//         'serif': ['Georgia', 'Times New Roman', 'serif'],
//         'mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
//         'body': ['"SF Pro"', 'Arial', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [
//     formsPlugin
//   ],
// }
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans','SF Pro', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'body': ['"SF Pro"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    formsPlugin
  ],
});