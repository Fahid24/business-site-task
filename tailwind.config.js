/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        right: "right",
        left: "left",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        display: ["Aclonica", "sans-serif"],
        title: ["Source Serif Pro", "serif"],
        heading: ["Merriweather", "serif"],
        description: ["Tinos", "serif"],
      },
      boxShadow: {
        "3xl": "rgb(113 122 131 / 11%) 0px 7px 30px 0px",
        "4xl": "0px 3px 10px 0px rgb(248 96 77 / 19%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        "6xl": "0px 4px 16px 0px rgb(248 96 77 / 11%)",
        "7xl": "0px 3px 15px 0px rgb(248 96 77 / 19%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FB2F79",
          "primary-content": "#FB2F79", ///bg colors
          secondary: "#45ECE7", ///p color
          "secondary-content": "rgb(51 65 85 /1)",
          accent: "#6818F3",
          "accent-content": "#6818F3",
          neutral: "#F9EC19",
          "neutral-content": "rgb(15 23 42 /1)", ///h1 color
          "base-100": "#FEE6F4", ///bg main and button text color
          info: "#FD750A",
          "info-content": "#FD750A",
          success: "#06E1E1",
          "success-content": "#06E1E1",
          warning: "rgb(226, 226, 226)",
          "warning-content": "#e2e2e2", ///border colors
          // error: "#176f6b",
          error: "#176f6b",
          "error-content": "#007a70",
          "error-content1": "#c7c7c7",
        },
      },
    ],
  },
  plugins: [require("daisyui", "@tailwindcss/typography")],
};
