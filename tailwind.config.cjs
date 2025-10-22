/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdece9",
          75: "#f5b2a6",
          100: "#f19381",
          200: "#eb644a",
          300: "#e74425",
          400: "#a2301a",
          500: "#8d2917",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#6b6b6b",
          600: "#474747",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
        "pure-black": "#000000",
        "pure-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
