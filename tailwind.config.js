/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0B1220',
          charcoal: '#111827',
          blue: '#1F2937',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D4B475',
        },
        border: '#374151',
        textMain: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
