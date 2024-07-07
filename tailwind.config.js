/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      dropShadow: {
        'custom-red': '0 4px 6px rgba(255, 0, 0, 0.5)', // Red drop shadow
        'custom-green': '0 4px 6px rgba(0, 255, 0, 0.5)', // Green drop shadow
        'custom-blue': '0 4px 6px rgba(0, 0, 255, 0.5)', // Blue drop shadow
      },
      animation: {
        "loop-scroll": "loop-scroll 5s ease-in infinite",
      },
      keyframes: {
        "loop-scroll": {
        from : { transform: 'translateX(0%)'},
        to : { transform: 'translateX(-100%)'},
        },
      },
      spacing: {
        '46': '11.5rem', 
      },
      colors: {
          primary : '#4A3AFF',
          customBlue: '#009FE3',
          bgBlue: '#F0ECF9',
          customPink:'#F0ECF9',
          customPeach:'#DDDDDD'
      },
      fontFamily: {
        'futura': ['futura-Bold', 'futura-Book', 'sans-serif'],
        'Poppins': ['Poppins-Regular', 'sans-serif'],
      },
      dropShadow: {
        'black-xl': '0 10px 15px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'half-red-yellow': 'linear-gradient(to top, #E2EAF4 50%, #f7f7f7 50%)',
        'custom-gradient': 'linear-gradient( -5deg,  #E2E8F0 50%, blue 50%)',

        

      },

      // gayatr's config

      borderRadius: {
        'none': '0',
       
      },
      boxShadow: {
        'blue-left-bottom': '4px 4px 0 0 rgba(59, 130, 246, 0.5)',
        'blue-right-top': '-6px -6px 0 0 rgba(59, 130, 246, 0.3)',
      },
      borderWidth: {
        '4': '1px',
      },
      skew: {
        '10': '10deg',
        '-10': '-10deg',
      },
    },
  },
  plugins: [],
};

