/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var( --color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
          
        },
      },
      borderColor: {
        skin: {
          "border-base": "var(--color-border-base)",
        },
      },
      stroke:{
        skin:{
          "stroke-base":"var( --color-stroke-base)",
          "stroke-inverted":"var( --color-stroke-inverted)"
        },
      },
    },
  },
  plugins: [],
  darkMode:"class"
}