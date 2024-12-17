import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a"
        },
        text: {
          // DEFAULT: "#E2E8F0",
          DEFAULT: "#fff",
          100: "#94A3B8"
        }
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
