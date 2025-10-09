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
          50: "var(--brand-b50)",
          75: "var(--brand-b75)",
          100: "var(--brand-b100)",
          200: "var(--brand-b200)",
          300: "var(--brand-b300)",
          400: "var(--brand-b400)",
          500: "var(--brand-b500)",
        },
        neutral: {
          50: "var(--neutral-n50)",
          100: "var(--neutral-n100)",
          200: "var(--neutral-n200)",
          300: "var(--neutral-n300)",
          400: "var(--neutral-n400)",
          500: "var(--neutral-n500)",
          600: "var(--neutral-n600)",
          700: "var(--neutral-n700)",
          800: "var(--neutral-n800)",
          900: "var(--neutral-n900)",
        },
        "pure-black": "var(--pure-black)",
        "pure-white": "var(--pure-white)",
      },
    },
  },
  plugins: [],
};
