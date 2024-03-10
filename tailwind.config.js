/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#15616D",
          10: "#15616D10",
          20: "#15616D20",
          30: "#15616D30",
          40: "#15616D40",
          50: "#15616D50",
          60: "#15616D60",
          70: "#15616D70",
          80: "#15616D80",
          90: "#15616D90",
        },
        secondary: {
          DEFAULT: "#FF7D00",
          10: "#FF7D0010",
          20: "#FF7D0020",
          30: "#FF7D0030",
          40: "#FF7D0040",
          50: "#FF7D0050",
          60: "#FF7D0060",
          70: "#FF7D0070",
          80: "#FF7D0080",
          90: "#FF7D0090",
        },
        third: "#F5F3EE",
        text: "#001524",
      },
      animation: {
        amine: 'swipe 20000ms linear infinite backwards'
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
