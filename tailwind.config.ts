import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b0b2ff",
        secondary: "#eea9c4",
        "secondary-dark": "#9fefe2",
      },
      fontFamily: {
        heading: ["Montserrat", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        body: ["Lato", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        grid: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
