module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gilroy: ["Gilroy-Bold", "sans-serif"],
        gilroymedium: ["Gilroy-medium", "sans-serif"],
        gilroyregular: ["Gilroy-regular", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
