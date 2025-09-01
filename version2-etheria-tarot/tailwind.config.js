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
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        // Version 1: Urban Spirit Colors
        'warm-ivory': '#F9F5F1',
        'deep-plum': '#7E4C74', 
        'antique-gold': '#C3A27C',
        'sage-blue': '#B2D0D3',
        'charcoal': '#2B2B2B',
      },
    },
  },
  plugins: [],
}