import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          red: "#7A0E12",
          "red-dark": "#5C0A0D",
          "red-light": "#9B1B1B",
          gold: "#C8A24B",
          "gold-light": "#D4AF37",
          "gold-soft": "#E8D9A8",
          cream: "#FBF7EE",
          "cream-dark": "#F2E9D8",
          ink: "#16110D",
          "ink-soft": "#2A211A",
        },
      },
      fontFamily: {
        heading: ["var(--font-kanit)", "system-ui", "sans-serif"],
        body: ["var(--font-prompt)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(22, 17, 13, 0.25)",
        gold: "0 12px 40px -10px rgba(200, 162, 75, 0.45)",
        card: "0 18px 50px -20px rgba(92, 10, 13, 0.35)",
      },
      backgroundImage: {
        "temple-radial":
          "radial-gradient(120% 120% at 50% 0%, #2A211A 0%, #16110D 55%, #0E0A07 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent 0%, #C8A24B 20%, #E8D9A8 50%, #C8A24B 80%, transparent 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
