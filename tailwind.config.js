module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#dedede", 500: "#9a9da5", "500_01": "#9c9c9c" },
        blue_gray: { 600: "#5e6282", 900: "#181e4b", "800_3f": "#474a573f" },
        blue: { 500: "#23a6f0" },
        indigo: {
          A200_19: "#4475f219",
          A200: "#4475f2",
          A700: "#4737ff",
          A200_3f: "#4475f23f",
        },
        black: { 900: "#000000", "900_19": "#00000019", "900_05": "#00000005" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "0px 30px  60px 0px #474a573f",
        bs: "0px 15px  30px 0px #4475f219",
        bs3: "0px 15px  30px 0px #00000019",
        bs2: "0px 2.77px  2px 0px #00000005",
      },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
