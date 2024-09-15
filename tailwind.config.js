/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(106.63deg, #123d67 0%, #1d5a93 33.33%, #297bca 66.67%, #297bca 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation:{
        "loop-scroll": "loop-scroll 10s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from :{transform: "translateX(0)"},
          to :{transform: "translateX(-100%)"},
        }
      }
    },
  },
  plugins: [],
}

