import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c", // Deep charcoal/near-black
        foreground: "#f4f4f5", // White/light-gray
        primary: {
          DEFAULT: "#06b6d4", // Electric cyan
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#3b82f6", // Subtle blue
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(24, 24, 27, 0.7)", // Glassmorphism panels
          foreground: "#f4f4f5",
        },
        border: "rgba(255, 255, 255, 0.1)", // Thin glowing borders
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
