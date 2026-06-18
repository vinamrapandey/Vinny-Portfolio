import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#EBEAE6", // page background — warm light gray
        surface: "#FFFFFF", // cards
        ink: "#0F0F0F", // near-black text
        muted: "#8A8A85", // secondary / gray heading words
        line: "rgba(15, 15, 15, 0.10)", // hairline borders
        dark: "#0E0E0E", // dark sections (contact, footer)
        accent: "#FF5436", // orange highlight, used sparingly
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-instrument)", "serif"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
