/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#B9D9EB', 
        secondary: '#3399FF', 
        tertiary: '#33FF57', 
      },
      screens: {
        xs: '320px',
        sm: '427px', 
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

