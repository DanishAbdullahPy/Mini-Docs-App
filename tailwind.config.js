/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
       spacing: {
         '15': '15px',
       },
     },
  },
  plugins: [],
 }
 