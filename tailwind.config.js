/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aubergine: "#1B1421",
        blackberry: "#382941",
        citron: "#D7F36A",
        papaya: "#FF765E",
        lavender: "#BDA7F8",
        porcelain: "#F5F0E8",
        softwhite: "#FFFFFF",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        orchid: "0 24px 60px -15px rgba(10, 6, 15, 0.55)",
        porcelain: "0 20px 50px -16px rgba(27, 20, 33, 0.14)",
      },
    },
  },
  plugins: [],
};
