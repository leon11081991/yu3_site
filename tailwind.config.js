/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '992px',
      xl: '1920px'
    },
    extend: {
      colors: {
        primary: {
          '01': '#1A1A1A',
          '02': '#FFFFFF'
        },
        secondary: {
          '01': '#00FFB2',
          '02': '#FFA92D',
          '03': '#FF576F',
          '04': '#237AFC'
        },
        gray: {
          '01': '#2C2C2C',
          '02': 'rgba(255, 255, 255, 0.2)',
          '03': 'rgba(255, 255, 255, 0.5)',
          '04': 'rgba(255, 255, 255, 0.7)',
          '05': '#9A9A9A'
        }
      },
      fontSize: {
        h1: ['1.75rem', '45px'],
        h2: ['1rem', '1.5rem'],
        h3: ['.875rem', '1rem'],
        h4: ['.875rem', '2rem'],
        p1: ['.875rem', '1.75rem'],
        p2: ['.75rem', '1.125rem']
      },
      letterSpacing: {
        h1: '1px',
        h2: '0.5px',
        h3: '0.5px',
        h4: '0.5px',
        p1: '0.5px',
        p2: '0.5px'
      }
    }
  },
  plugins: []
}
