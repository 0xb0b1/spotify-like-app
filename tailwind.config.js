module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
