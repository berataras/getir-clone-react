module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false,
   theme: {
    extend: {
      colors: {
            "primary-color": "#5d3ebc",
            "secondary-color": "#7849f7",
            "brand-color": "#5d3ebc",
            "brand-yellow": "#FFD301"
      },
    },
   },
   variants: {},
   plugins: [],
 }