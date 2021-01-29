const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'hsl(270, 7%, 64%)',
        'violet-pale': 'hsl(276, 100%, 81%)',
        'violet-moderate': 'hsl(276, 55%, 52%)',
        'violet-dark': 'hsl(271, 15%, 43%)',
        'violet-darkest': 'hsl(271, 36%, 24%)',
        blue: 'hsl(206, 6%, 79%)',
      },
      secondary: {
        DEFAULT: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        'violet-light': 'hsl(270, 20%, 96%)',
        'violet-dark': 'hsl(271, 36%, 24%)',
        magenta: 'hsl(289, 100%, 72%)',
      },
      gradient: {
        magenta: 'hsl(293, 100%, 63%)',
        violet: 'hsl(264, 100%, 61%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heading: '2.5rem',
      },
      width: {
        chat: '15.4375rem',
        bg: '31.875rem',
      },
      height: {
        chat: '31.5625rem',
        bg: '63.625rem',
      },
      inset: {
        '-128': '-32rem',
      },
      opacity: {
        3: '.03',
      },
    },
  },
}
