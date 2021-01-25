module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'architect': [
          'Architects Daughter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"']
      },
      maxWidth: {
        'smd': '26rem'
      },
      colors: {
        'content': 'var(--contentColor)',
        'background': 'var(--backgroundColor)',
        'background-hover': 'var(--backgroundHoverColor)',
        'content-hover': 'var(--contentHoverColor)',
        'small-content': 'var(--smallTextColor)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
