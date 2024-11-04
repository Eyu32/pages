/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        PrimaryBg : '#f3f3f3',
        PriRed: '#f7420b',
        PriBlue: '#0f59f8',
        BtnColor: '#4640de'
      },
      blur:{
        '4xl': '160px'
      },
      animation: {
        'random-rotate': 'randomRotate 5s infinite ease-in-out',
        'complexMove': 'complexMove 15s ease-in-out infinite',
      },
      keyframes: {
        randomRotate: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '25%': { transform: 'rotateX(45deg) rotateY(-20deg) rotateZ(30deg)' },
          '50%': { transform: 'rotateX(-30deg) rotateY(50deg) rotateZ(-10deg)' },
          '75%': { transform: 'rotateX(20deg) rotateY(30deg) rotateZ(-45deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        },
        complexMove: {
         '0%': { transform: 'translateX(0) translateY(0)' },
          '13%': { transform: 'translateX(70%) translateY(-90%)' },
          '23%': { transform: 'translateX(150%) translateY(40%)' },
          '43%': { transform: 'translateX(-30%) translateY(200%)' },
          '58%': { transform: 'translateX(200%) translateY(-50%)' },
          '73%': { transform: 'translateX(-10%) translateY(180%)' },
          '88%': { transform: 'translateX(250%) translateY(-120%)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
    },
  },
  plugins: [],
}
}
