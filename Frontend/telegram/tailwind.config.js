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
          error: "var(--color-text-error)"
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-inverted": "var(--color-fill-inverted)",
          "button-accent": "var( --color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
          "button-inverted-hover": "var(--color-button-inverted-hover)",
          
        },
      },
      borderColor: {
        skin: {
          "border-base": "var(--color-border-base)",
          "border-inverted": "var(--color-border-inverted)",
        },
      },
      stroke:{
        skin:{
          "stroke-base":"var( --color-stroke-base)",
          "stroke-inverted":"var( --color-stroke-inverted)"
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode:"class"
}