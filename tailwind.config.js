module.exports = {
  purge: {
    content: ['./views/**/*.pug'],
    options: {
      keyframes: true
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  separator: '_',
}
