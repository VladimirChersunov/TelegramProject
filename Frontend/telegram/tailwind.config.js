/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
        
      },
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
          "button-inverted": "var( --color-button-inverted)",
          
        },
      },
      borderColor: {
        skin: {
          "border-base": "var(--color-border-base)",
          "border-inverted": "var(--color-border-inverted)",
          "border-error": "var(--color-border-error)",
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
  plugins: [
     require("tailwindcss-autofill"),
     require('tailwind-scrollbar'),
    ],
  darkMode:"class",
  variants: {
    extend: {
      // Enable `autofill` variant for plugins you want
      borderColor: ["autofill"],
      shadowFill: ["autofill"],
      textFill: ["autofill"],
    },
  },
}