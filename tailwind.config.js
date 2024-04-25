/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        raleway: ['"Raleway"', 'serif'],
      },
      colors: {
        // Base Colors
        'ceramic-bg': '#efeeed', // Base Background Color
        'terra-cotta': '#c66e4e', // Terra Cotta
        'sage-green': '#8aa093', // Sage Green
        'sandy-beige': '#d5c9b1', // Sandy Beige
        'ocean-blue': '#66a5ad', // Ocean Blue
        'text-gray': '#333333', // Text Color

        // Terra Cotta
        'terra-cotta-50': '#fcefe8',
        'terra-cotta-100': '#f9dec9',
        'terra-cotta-200': '#f6cba9',
        'terra-cotta-300': '#f3b989',
        'terra-cotta-400': '#f0a669', // Base Color
        'terra-cotta-500': '#ed9449',
        'terra-cotta-600': '#b86f36',
        'terra-cotta-700': '#8c5729',
        'terra-cotta-800': '#603e1c',
        'terra-cotta-900': '#34250f',

        // Sage Green
        'sage-green-50': '#f0f6f3',
        'sage-green-100': '#d5e0d5',
        'sage-green-200': '#b9ccb7',
        'sage-green-300': '#9eb89a',
        'sage-green-400': '#8aa093', // Base Color
        'sage-green-500': '#679060',
        'sage-green-600': '#4f7550',
        'sage-green-700': '#3b5c3e',
        'sage-green-800': '#283e2d',
        'sage-green-900': '#14201b',

        // Sandy Beige
        'sandy-beige-50': '#f7f4f2',
        'sandy-beige-100': '#e6ddd3',
        'sandy-beige-200': '#d5c5b4',
        'sandy-beige-300': '#c4ae96',
        'sandy-beige-400': '#d5c9b1', // Base Color
        'sandy-beige-500': '#a27f58',
        'sandy-beige-600': '#826446',
        'sandy-beige-700': '#644e36',
        'sandy-beige-800': '#413324',
        'sandy-beige-900': '#201a12',

        // Ocean Blue
        'ocean-blue-50': '#ebf6f8',
        'ocean-blue-100': '#cde8ed',
        'ocean-blue-200': '#afdbe3',
        'ocean-blue-300': '#91cdd8',
        'ocean-blue-400': '#66a5ad', // Base Color
        'ocean-blue-500': '#55b3c2',
        'ocean-blue-600': '#43909f',
        'ocean-blue-700': '#326d7d',
        'ocean-blue-800': '#214a5a',
        'ocean-blue-900': '#102738',

        // Text Color
        'text-gray-50': '#f9f9f9',
        'text-gray-100': '#f2f2f2',
        'text-gray-200': '#e5e5e5',
        'text-gray-300': '#cccccc',
        'text-gray-400': '#b3b3b3',
        'text-gray-500': '#999999',
        'text-gray-600': '#666666',
        'text-gray-700': '#4d4d4d',
        'text-gray-800': '#333333',
        'text-gray-900': '#1a1a1a',
      },
    },
  },
  plugins: [require("daisyui")],
}