/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: "var(--color-accent)",
        accentMuted: "var(--color-accent-muted)",
        slate: {
          50: "var(--color-slate-50)",
          200: "var(--color-slate-200)",
          300: "var(--color-slate-300)",
          400: "var(--color-slate-400)",
          800: "var(--color-slate-800)",
          900: "var(--color-slate-900)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          accent: "var(--color-border-accent)",
        },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "system-ui", "sans-serif"],
        yellowtail: ["Yellowtail", "system-ui", "ui-sans-serif", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(56, 189, 248, 0.3)",
      },
    },
  },
  plugins: [],
};
