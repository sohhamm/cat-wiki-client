module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url('/src/assets/png/hero-lg.png')",
        'hero-md': "url('/src/assets/png/hero-md.png')",
        'hero-sm': "url('/src/assets/png/hero-sm.png')",
      },
      fontFamily: {
        brand: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
