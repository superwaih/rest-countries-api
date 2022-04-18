module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkmodetext": "hsl(0, 0%, 100%)",
        "DarkModeElement": "hsl(209, 23%, 22%)",
        "LightModeText": "hsl(200, 15%, 8%)",
        "white": "hsl(0, 0%, 100%)",
        "LightModeInput": "hsl(0, 0%, 52%)",
        "lightGray":  "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
}