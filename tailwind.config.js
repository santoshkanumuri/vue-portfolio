/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          dark: '#ff8533',
          light: '#ff8533',
        },
        secondary: {
          DEFAULT: '#ff8533',
          dark: '#ff6b00',
          light: '#ff6b00',
        },
        accent: {
          DEFAULT: '#ff8533',
          dark: '#ff6b00',
          light: '#ff6b00',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#000000',
        },
        text: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(255, 107, 0, 0.1), 0 10px 20px -2px rgba(255, 107, 0, 0.05)',
        'soft-dark': '0 2px 15px -3px rgba(255, 107, 0, 0.2), 0 10px 20px -2px rgba(255, 107, 0, 0.15)',
      },
      maxWidth: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}
