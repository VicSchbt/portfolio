/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e2e8f0",
        accent: "#38bdf8",
        accentMuted: "#0ea5e9"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(56, 189, 248, 0.3)"
      }
    }
  },
  plugins: []
};


