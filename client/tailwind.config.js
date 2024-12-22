import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        secondary: '#96a0af',
        primary: '#ff4612b0'
      },
      boxShadow: {
        custom: "0px 0px 15px rgba(119, 119, 119, 0.063)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
