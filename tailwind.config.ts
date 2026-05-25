import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#e05a9a",
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#f9a8d4",
          300: "#f472b6",
          400: "#e05a9a",
          500: "#db2777",
          600: "#be185d",
          700: "#9d174d",
          800: "#831843",
          900: "#500724",
          950: "#3b1f3d",
        },
        secondary: {
          DEFAULT: "#a855f7",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
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
