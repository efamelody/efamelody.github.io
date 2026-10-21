import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Overrides Tailwind's stock pink scale so every `pink-*` utility in
        // the codebase resolves to the portfolio's warm, high-contrast ramp.
        pink: {
          50: "#FFF8FC", // warm white — page canvas and subtle surfaces
          100: "#F8D8E8", // blush — chips, soft fills
          200: "#F3BCD3", // borders
          300: "#EE93BC", // decorative
          400: "#EC5FA0", // light accent
          500: "#E83E91", // signature pink — interactive accents
          600: "#C92C6F", // accessible accent for small text
          700: "#A81E58",
          800: "#7E1442",
          900: "#5A0E30",
          950: "#4B1029", // deep burgundy — headings and primary text
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#E83E91",
          50: "#FFF8FC",
          100: "#F8D8E8",
          200: "#F3BCD3",
          300: "#EE93BC",
          400: "#EC5FA0",
          500: "#E83E91",
          600: "#C92C6F",
          700: "#A81E58",
          800: "#7E1442",
          900: "#5A0E30",
          950: "#4B1029",
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
        heading: [
          "var(--font-heading)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      typography: {
        primary: {
          css: {
            "--tw-prose-body": "#4B1029",
            "--tw-prose-headings": "#4B1029",
            "--tw-prose-links": "#C92C6F",
            "--tw-prose-bold": "#4B1029",
            "--tw-prose-code": "#A81E58",
            "--tw-prose-quotes": "#7E1442",
            "--tw-prose-quote-borders": "#F3BCD3",
            "--tw-prose-hr": "#F3BCD3",
            "--tw-prose-th-borders": "#F3BCD3",
            "--tw-prose-td-borders": "#F8D8E8",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
