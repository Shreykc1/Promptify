const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          satoshi: ['Satoshi', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          neue: ['Neue','sans-serif']
        },
        colors: {
          'primary-orange': '#FF5722',
        }
      },
    },
    plugins: [addVariablesForColors],
  };
  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
      ":root": newVars,
    });
  }
