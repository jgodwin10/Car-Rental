/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage : {
        'hero': "url(./images/hero/hero-bg.png)",
        'car': "url(./images/hero/main-car.png)",
        'book': "url(./images/book-car/book-bg.png)",
        'choose': "url(./images/chooseUs/bg.png)",
        'faq': "url(./images/faq/car.png)",
        'contact': "url(./images/banners/bg02.png)",
        'heroPages': "url(./images/hero/heroes-bg.png)"
      }
    },
  },
  plugins: [],
}

