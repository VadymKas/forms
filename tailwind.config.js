/** @type {import('tailwindcss').Config} */
import { colors } from './tailwind.colors'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      blue: '#212c44',
      'blue-medium': '#313c52'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
