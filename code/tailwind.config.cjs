/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        para: '#FFFFFF',
        head: '#D4D4D4',
        orange: '#FE6601',
        dark: '#A8A8A8'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'astrologer-hero': "url('src/assets/image/astrologer-hero.webp')",
        'star-sky': "url('src/assets/image/start_sky.webp')"
      }
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ]
}
