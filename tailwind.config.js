/** @type {import('tailwindcss').Config} */
export default {
   darkMode:'class',
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteRight:'#FAFAFA',
        whiteLeft:'#FFFFFF',
        borderBetween:'#E9EAEB',
        logoColor:'#818181',
        borderHorizontalBetween:'#E9EAEB',
        textSigninColor:'#181D27',
        button1:'#1570EF',
        textColorSignin:'#414651',
        buttonBorder:'#D8DAE5',
        buttonTextColor:'#171717',
        repoColor:'#181D27',
        repoTailerColor:'#414651',
        searchButtonBorder:'#D5D7DA',
        publicPvtButtonColor:'#EFF8FF',
        publicPvtButtonBorder:'#B2DDFF',
        publicPvtButtonText:' #175CD3',
        onFocusColor:'#F5F5F5'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}