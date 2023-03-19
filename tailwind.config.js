module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "shake-all": "shake 0.82s cubic-bezier(.36, .07,.19,.97) both",
        "up-dwon": "up-dwon",
      },
      keyframes: {
        "shake-all": {
          "10%, 90%": {
            transfrom: "translate3d(-1px,0,0)",
          },
          "20%, 80%": {
            transfrom: "translate3d(2px,0,0)",
          },
          "30%, 50% , 70%": {
            transfrom: "translate3d(-4px,0,0)",
          },
          "40%, 60%": {
            transfrom: "translate3d(4px,0,0)",
          },
        },
        "up-dwon": {
          "10%, 90%": {
            transfrom: "translate(-1px)",
          },
        },
      },
    },
  },
  plugins: [],
};
