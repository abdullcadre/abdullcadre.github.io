/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './include/*.html',
    './include/*.js',
    './sessions/*.js',
    './js/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
};
