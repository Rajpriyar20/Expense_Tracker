/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      margin: {
        '190': '47.5rem', // 190 divided by 4 to convert to `rem`.
      },
    },
  },
  plugins: [],
}

