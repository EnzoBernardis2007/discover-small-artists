/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adicione todos os arquivos relevantes
  ],
  theme: {
    extend: {
      colors: {
        night: "#0E0E0E"
      }
    },
  },
  plugins: [],
}