/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.source.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'btn': ['0.9375rem', { lineHeight: '1.25', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
