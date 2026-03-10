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
        // Warm cream backgrounds — Italian pizzeria
        "pizza-bg":           "#FFF8F0",
        "pizza-sky-mid":      "#FDF3E4",
        "pizza-surface":      "#FFFFFF",
        "pizza-raised":       "#FEFCF8",
        "pizza-border":       "#E8D5B7",
        // Text (warm dark on cream)
        "pizza-dark":         "#1A0A00",
        "pizza-body":         "#3D2B1F",
        "pizza-muted":        "#8B6B4A",
        "pizza-cream":        "#FFF8F0",
        // Dark sections (Game + Footer → deep burgundy)
        "pizza-dark-bg":      "#3D0C0C",
        "pizza-dark-surface": "#5C1A1A",
        "pizza-dark-border":  "#8B3A3A",
        // Brand accents — Italian RED is primary
        "pizza-red":          "#C8281E",
        "pizza-red-hover":    "#A01C14",
        "pizza-orange":       "#E85D20",
        "pizza-gold":         "#D4860A",
        "pizza-yellow":       "#F5C235",
        "pizza-green":        "#1A6B3A",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(220,38,38,0.3)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(220,38,38,0)" },
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
