import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        bg: {
          DEFAULT: "hsl(var(--bg))",
          elevated: "hsl(var(--bg-elevated))"
        },
        fg: {
          DEFAULT: "hsl(var(--fg))",
          muted: "hsl(var(--fg-muted))"
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          fg: "hsl(var(--accent-fg))"
        }
      },
      boxShadow: {
        glow: "0 0 0.75rem hsl(var(--glow) / 0.35), 0 0 2.25rem hsl(var(--glow) / 0.25)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(900px circle at var(--mx, 50%) var(--my, 20%), hsl(var(--glow) / 0.20), transparent 55%), radial-gradient(650px circle at 20% 10%, hsl(270 95% 68% / 0.18), transparent 55%), radial-gradient(650px circle at 80% 20%, hsl(205 95% 62% / 0.16), transparent 55%)",
        "grid-fade":
          "linear-gradient(to bottom, transparent 0%, hsl(var(--bg) / 0.0) 0%, hsl(var(--bg) / 0.85) 70%, hsl(var(--bg)) 100%), linear-gradient(to right, hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.55) 1px, transparent 1px)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(40%)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.3s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

