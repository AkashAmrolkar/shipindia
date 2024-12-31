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
        primary: '#ff6b41'
      },
      boxShadow: {
        custom: "0px 0px 15px rgba(119, 119, 119, 0.063)",
      },
      keyframes: {
        move: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)' },
          '25%': { transform: 'rotateX(15deg) rotateY(-15deg) translateZ(10px)' },
          '50%': { transform: 'rotateX(-10deg) rotateY(10deg) translateZ(20px)' },
          '75%': { transform: 'rotateX(10deg) rotateY(-5deg) translateZ(10px)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)' },
        },
      },
      animation: {
        move: 'move 10s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
