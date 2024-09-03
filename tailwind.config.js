/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 10px 100px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        gocolor: '#f5b456',
        darker: '#b3643f',
        gomarket: '#3672ba',
        godarker: '#e48c2b'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(180px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        opacityUp: {
          '0%': { opacity: '0'},
          '100%': { opacity: '0.6' }
        }
      },
      animation: {
        slideUp: 'slideUp 1s ease-out forwards',
        slideUp2: 'slideUp 1.4s ease-out forwards',
        slideUp3: 'slideUp 1.2s ease-out forwards',
        slideRight0: 'slideRight 1s ease-out forwards',
        slideRight1: 'slideRight 1.2s ease-out forwards',
        slideRight2: 'slideRight 1.4s ease-out forwards',
        slideRight3: 'slideRight 1.6s ease-out forwards',
        slideRight4: 'slideRight 1.8s ease-out forwards',
        slideRight5: 'slideRight 2s ease-out forwards',
        slideRight6: 'slideRight 2.2s ease-out forwards',
        opacityUp: 'opacityUp 1.5s ease-in-out forwards'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}