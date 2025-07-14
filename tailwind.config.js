//import typography from '@tailwindcss/typography'
//
//module.exports = {
//  content: ['./hugo_stats.json'],
//  plugins: [typography],
//  darkMode: 'class',
//}

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'library-3am': ['Library 3 AM', 'sans-serif'], // Add this line
      }
    }
  }
}