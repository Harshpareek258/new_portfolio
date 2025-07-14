/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#33b8ff',
        secondary: '#11efd0',
        accent: '#ff6b6b',
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a'
        },
        foreground: {
          DEFAULT: '#1e293b',
          dark: '#f1f5f9'
        },
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#334155'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};