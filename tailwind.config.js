/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'primary' : ['Poppins, sans-serif'],
      'secondary' : ['Montserrat, sans-serif'] 
     },
    extend: {},
  },
  plugins: [],
}

