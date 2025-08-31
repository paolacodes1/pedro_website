/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poiret-one': ['Poiret One', 'cursive'],
        'cormorant-infant': ['Cormorant Infant', 'serif'],
      },
      colors: {
        // Etheria Tarot Brand Colors
        'rich-burgundy': '#800020',
        'deep-maroon': '#722F37', 
        'warm-gold': '#D4AF37',
        'black-pearl': '#1C1C1C',
        'ivory-light': '#F9F7F4',
      },
    },
  },
  plugins: [],
}