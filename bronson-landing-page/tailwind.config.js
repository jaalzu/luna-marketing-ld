export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          black: "#0F172B",
          grey: "#62748E",
          primary: "#00ffe0",
          secondary: "#1e40af",
          bgColor: "#f4f8fbff"   
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}