/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f2fe',
          pink: '#fe2c55',
          purple: '#9d4edd',
          yellow: '#ffe600',
          blue: '#25F4EE',
          glow: '#00f2fe'
        },
        dark: {
          bg: '#1e2029',
          surface: '#272935',
          card: 'rgba(38, 40, 52, 0.72)',
          border: 'rgba(255, 255, 255, 0.15)'
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 242, 254, 0.4)',
        'neon-pink': '0 0 20px rgba(254, 44, 85, 0.4)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      }
    },
  },
  plugins: [],
}
