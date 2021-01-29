const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#A39DA9',
        'violet-pale': '#D99EFF',
        'violet-moderate': '#9341C8',
        'violet-dark': '#6E5D7E',
        'violet-darkest': '#3E2753',
        'violet-light': '#EEE5F4',
        'violet-lightest': '#F5F3F7',
        blue: '#C5C9CC',
      },
      secondary: {
        DEFAULT: '#FAFAFA',
        white: '#FFF',
        'violet-dark': '#3E2753',
        magenta: '#E472FF',
      },
      gradient: {
        magenta: '#E844FF',
        violet: '#8739FF',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heading: '2.5rem',
        message: ['.5rem', 1.375],
        profile: ['.6875rem', 1.18],
        textbox: ['.5625rem', 1.18],
      },
      width: {
        chat: '15.4375rem',
        bg: '31.875rem',
        top: '8.0625rem',
        circle: '.125rem',
        send: '1.5625rem',
        'send-arrow': '.375rem',
        '11/10': '110%',
      },
      height: {
        bg: '63.625rem',
        top: '1.8125rem',
        arrow: '.625rem',
        circle: '.125rem',
        screen: '21.625rem',
        textbox: '2.125rem',
        send: '1.5625rem',
        'send-arrow': '.625rem',
        '3/5': '60%',
        '2/5': '40%',
        '1/5': '20%',
      },
      gap: {
        circle: '.0625rem',
      },
      maxWidth: {
        message: '8rem',
        'message-activity': '10rem',
      },
      inset: {
        '-128': '-32rem',
        '-1/20': '-5%',
        '11/20': '55%',
        '13/20': '65%',
      },
      opacity: {
        3: '.03',
      },
      boxShadow: {
        DEFAULT: '0px 30px 60px -10px rgba(62, 39, 83, 0.251202)',
        profile: '0px 0px 13px rgba(62, 39, 83, 0.251202)',
        message: '0px 10px 5px -5px rgba(62, 39, 83, 0.045318)',
      },
      borderRadius: {
        'chat-outer': '1.875rem',
        'chat-inner': '1.25rem',
        message: '.625rem',
        'message-small': '.25rem',
        top: '.875rem',
        profile: '.375rem',
      },
      padding: {
        'chat-y': '.6875rem',
        'chat-x': '.59375rem',
        'chat-inner': '.0625rem',
        message: '.375rem',
        'message-price': '.625rem',
        profile: '1.875rem',
        'screen-x': '.375rem',
        'screen-t': '.6875rem',
        'screen-b': '.5625rem',
      },
      gridTemplateColumns: {
        profile: 'auto auto 1fr auto',
      },
      translate: {
        60: '60%',
      },
      rotate: {
        '-28': '-28deg',
        28: '28deg',
        '-45': '-45deg',
        45: '45deg',
      },
    },
  },
}
