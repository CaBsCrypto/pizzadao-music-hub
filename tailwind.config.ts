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
        // V5 Oliva Mediterráneo — cream + olive + gold
        "pizza-bg":           "#FFFDF5",
        "pizza-sky-mid":      "#F2EDD5",
        "pizza-surface":      "#FFFFFF",
        "pizza-raised":       "#FEFCF8",
        "pizza-border":       "#C0B878",
        // Text (warm dark on cream)
        "pizza-dark":         "#1A1A0A",
        "pizza-body":         "#2D2A1F",
        "pizza-muted":        "#7A7040",
        "pizza-cream":        "#FFFDF5",
        // Dark sections (Game + Footer → deep olive)
        "pizza-dark-bg":      "#1E2A1A",
        "pizza-dark-surface": "#2D3D26",
        "pizza-dark-border":  "#566B45",
        // Brand accents — olive primary, gold secondary
        "pizza-red":          "#4A7040",
        "pizza-red-hover":    "#3D5A34",
        "pizza-orange":       "#E85D20",
        "pizza-gold":         "#C9A227",
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
