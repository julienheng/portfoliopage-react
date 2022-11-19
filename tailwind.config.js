/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["9.375rem", { fontWeight: "500" }],
        h2: ["6.25rem", { fontWeight: "500" }],
        h3: "3.5rem",
        h4: "2rem",
        h5: [
          "1.75rem",
          {
            letterSpacing: "4.72px",
          },
        ],
        sh1: "1.75rem",
        sh2: ["0.875rem", { letterSpacing: "2.36px" }],
        nav: ["1rem", { letterSpacing: "2.7px" }],
        p: "1.125rem",
      },
      colors: {
        primary: "#243C5A",
        "blue-background": "hsl(222, 26%, 31%)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        secondary: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
