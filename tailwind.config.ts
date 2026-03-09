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
        // Sky blue backgrounds
        "pizza-bg":           "#C8E9FF",
        "pizza-sky-mid":      "#A8D4EA",
        "pizza-surface":      "#FFFFFF",
        "pizza-raised":       "#F0F8FF",
        "pizza-border":       "#D1D5DB",
        // Text (dark on light)
        "pizza-dark":         "#111827",
        "pizza-body":         "#374151",
        "pizza-muted":        "#6B7280",
        "pizza-cream":        "#FFFFFF",
        // Dark sections (Game + Footer → navy blue)
        "pizza-dark-bg":      "#1E3A5F",
        "pizza-dark-surface": "#2D5282",
        "pizza-dark-border":  "#4A7FC1",
        // Brand accents — RED is primary
        "pizza-red":          "#DC2626",
        "pizza-red-hover":    "#B91C1C",
        "pizza-orange":       "#F97316",
        "pizza-gold":         "#F59E0B",
        "pizza-yellow":       "#FCD34D",
        "pizza-green":        "#16A34A",
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
