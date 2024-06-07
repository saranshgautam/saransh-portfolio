/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      // colors: {
      //   primary: '#1c1c22',
      //   accent: {
      //     DEFAULT: '00ff99',
      //     hover: '00e187',
      //   },
      // },

      colors: {
        primary: '#1f2833',
        accent: {
          DEFAULT: '#66FCF1',
          hover: '#45a29e',
        },
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#1f2833',
        'accent': '#66FCF1',
      }),

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}