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
          'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#f4f5e9',
        'light-4': '#5C5C7B',
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
