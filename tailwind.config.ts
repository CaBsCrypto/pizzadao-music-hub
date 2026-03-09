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
        // Light surfaces (content sections)
        "pizza-bg":           "#FFF7EE",
        "pizza-surface":      "#FFFFFF",
        "pizza-raised":       "#FFF1DC",
        "pizza-border":       "#E8C280",
        // Text
        "pizza-dark":         "#1C0800",
        "pizza-body":         "#6B3810",
        "pizza-muted":        "#A06840",
        "pizza-cream":        "#FFF7EE",
        // Dark section surfaces (Hero, GameSection, Footer)
        "pizza-dark-bg":      "#2A0E04",
        "pizza-dark-surface": "#3D1A0A",
        "pizza-dark-border":  "#5C2E10",
        // Brand colors
        "pizza-red":          "#E8240A",
        "pizza-orange":       "#FF6820",
        "pizza-gold":         "#C9A227",
        "pizza-yellow":       "#FFD740",
        "pizza-green":        "#2D8A4E",
      },
      fontFamily: {
        display:  ["var(--font-playfair)", "Georgia", "serif"],
        accent:   ["var(--font-fredoka)", "cursive"],
        subtitle: ["var(--font-fredoka)", "cursive"],
        body:     ["var(--font-nunito)", "sans-serif"],
      },
      animation: {
        "float":        "float 8s ease-in-out infinite",
        "spin-slow":    "spin 20s linear infinite",
        "pulse-badge":  "pulse-badge 2s ease-in-out infinite",
        "fade-up":      "fadeUp 0.6s ease forwards",
        "vinyl-groove": "vinylGroove 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":      { transform: "translateY(-20px) rotate(5deg)" },
        },
        "pulse-badge": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232,36,10,0.3)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(232,36,10,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        vinylGroove: {
          "0%":  { opacity: "0.12" },
          "50%": { opacity: "0.22" },
          "100%":{ opacity: "0.12" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
