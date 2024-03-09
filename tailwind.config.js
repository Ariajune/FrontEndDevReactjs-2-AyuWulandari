module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#fcf3f3", 500: "#9c9c9c", 700: "#725959", "500_01": "#b39696", "100_01": "#faf4f4" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9", 900: "#121853" },
        deep_purple: { 900: "#231194" },
        green: { 800: "#239421", A700: "#24cc2b" },
        red: { 50: "#fcf1f1", 800: "#cc2424" },
        indigo: { 900: "#162574", "900_01": "#032457" },
      },
      boxShadow: { xs: "0px 4px  4px 0px #0000003f", sm: "0px 4px  4px 0px #0c070760" },
      fontFamily: { istokweb: "Istok Web", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
