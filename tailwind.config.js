/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
      },
      colors: {
        'sp-metal': '#565584',
        'sp-green': '#0ead69',
        'sp-red': '#F31559',
        'sp-blue': '#0072ff',
        'blue-sky': '#1363DF',
        'light-gray': '#ECEBFF',
        'darker-gray': '#18181B',
        'dark-gray': '#27272A',
        'dark-metal': '#293462',
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
        // card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        card: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'
      },
      fontSize: {
        xs: "0.75rem",        // 12px
        sm: "0.875rem",       // 14px
        base: "1rem",         // 16px
        lg: "1.125rem",       // 18px 
        xl: "1.25rem",        // 20px
        "2xl": "1.5rem",      // 24px
        "3xl": "1.875rem",    // 30px
        "4xl": "2.25rem",     // 36px
        "5xl": "3rem",        // 48px
        "6xl": "4rem",        // 64px
      }
    },
  },
  plugins: [],
}