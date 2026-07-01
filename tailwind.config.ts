import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B12",
          muted: "#5B5F6B",
          faint: "#8A8E99",
        },
        fog: {
          DEFAULT: "#9AA3B8",
          dim: "#6D7488",
        },
        surface: {
          dark: "#08090F",
          "dark-2": "#0E0C1B",
          "dark-3": "#141127",
          light: "#FAFAF8",
          card: "#12111F",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.09)",
          light: "rgba(11,11,18,0.09)",
        },
        accent: {
          blue: "#4C8DF7",
          violet: "#8B5CF6",
          lilac: "#B4A6FF",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #4C8DF7 0%, #8B5CF6 100%)",
        "grad-text": "linear-gradient(135deg, #7FB0FF 0%, #B4A6FF 60%, #C9B8FF 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(139,92,246,0.25)",
        "glow-sm": "0 0 24px rgba(76,141,247,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -18px)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-24px, 16px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        driftSlow: "driftSlow 12s ease-in-out infinite",
        pulseLine: "pulseLine 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
