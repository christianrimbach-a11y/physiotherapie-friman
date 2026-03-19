import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        offWhite: "#F8F7F5",
        black: "#000000",
        gray: {
          900: "#111111",
          800: "#333333",
          600: "#666666",
          500: "#888888",
          200: "#EAEAEA",
          100: "#F5F5F4",
        },
      },
      maxWidth: {
        content: "1200px",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.75rem,5vw,4rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        section: "0.12em",
      },
      borderRadius: {
        card: "1rem",
        button: "0.75rem",
      },
      keyframes: {
        heroFadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        heroFadeUpButton: {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "hero-title": "heroFadeUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0s both",
        "hero-subtitle": "heroFadeUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both",
        "hero-cta": "heroFadeUpButton 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both",
      },
    },
  },
  plugins: [],
};

export default config;
