/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0E11",
        foreground: "#E7EDF3",
        muted: "#8B98A5",
        surface: {
          DEFAULT: "#101519",
          hover: "#12181D",
        },
        accent: {
          DEFAULT: "#39D353",
          hover: "#4ADE6A",
        },
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: "1180px",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "drift-l": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "drift-r": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "drift-l": "drift-l 48s linear infinite",
        "drift-r": "drift-r 62s linear infinite",
        "drift-l-slow": "drift-l 74s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
