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
        // V6 Trattoria Italiana — dark brick + gingham red + candle gold
        "pizza-bg":           "#1C0C08",
        "pizza-sky-mid":      "#160A06",
        "pizza-surface":      "#FFFFFF",
        "pizza-raised":       "#FEFCF8",
        "pizza-border":       "#5A1010",
        // Text (dark on light cards — NOT for dark sections)
        "pizza-dark":         "#1A0A00",
        "pizza-body":         "#3D2B1F",
        "pizza-muted":        "#8B6B4A",
        "pizza-cream":        "#FEFCF8",
        // Dark sections (Game + Footer → deepest dark wood)
        "pizza-dark-bg":      "#0E0605",
        "pizza-dark-surface": "#1C0C08",
        "pizza-dark-border":  "#5A1010",
        // Brand accents — Italian red + candle gold
        "pizza-red":          "#C41C1C",
        "pizza-red-hover":    "#A01515",
        "pizza-orange":       "#E85D20",
        "pizza-gold":         "#E8A830",
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
