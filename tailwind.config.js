/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './src/**/**/*.tsx', //я знаю что творю хуйню здесь, иди нахуй с придьявами
        './src/**/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
