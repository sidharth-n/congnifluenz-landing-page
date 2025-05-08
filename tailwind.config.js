/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ebrima", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1E40AF",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
          light: "#A78BFA",
        },
        accent: {
          DEFAULT: "#3FBCFF",
          dark: "#0CA5E9",
          light: "#7CD3FC",
        },
        background: "#F8F8FF",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        "card-hover":
          "0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
}
