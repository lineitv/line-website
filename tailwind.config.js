module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f3f4f6 5px, #f3f4f6 100px);'
      }
    },
    fontFamily: {
      sans: ["'Readex Pro'"],
      mono: ["'Readex Pro'"]
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
