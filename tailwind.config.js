/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-bg':'#184bc8',
        'birus-bg':'#e8edf9',
        'header-bg':'#184bc8',
        'primary': '#194BC8',
        'arrow-pg': '#1d4dc9',
        'header-ta': '#1d4dc9',
        'header-text':'#194BC8',
        'table-item':'#d1dbf4',
        'status-color':'#e5e5e5',
        'videoplayer-bg':'#f3f6fc',
        'modal-remind':'#ddecd9',
        'medium-green':'#32AF00'
      },
      fontFamily: {
        'main': ['Source Sans Pro'],
        'inter': ['Inter'],
        'sans': ['Inter var']
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
