/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#6C63FF",               
        "secondary": "#efefef",
        "accent": "#fff",
        "neutral": "#58585D",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

