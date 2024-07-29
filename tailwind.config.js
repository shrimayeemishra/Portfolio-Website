module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "375px",
        s: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
        // Custom breakpoints
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        customColor: "#f0f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font family
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
