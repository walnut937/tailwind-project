/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors:{
        'primary-strong-cyan' : 	'#26baa4',
        'primary-light-blue'  :   '#6173ff',
        'primary-dark-gray' : 	'#4c545d',
        'primary-grayish-blue' :'#9fabb2',
        'primary-footer': '#f4f7f8',
      },
      fontFamily:{
        bai: ['Bai Jamjuree', 'sans-serif']
      },
    },
  },
  plugins: [],
}
