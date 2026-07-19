/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about/**/*.html",
    "./learn/**/*.html",
    "./privacy/**/*.html",
    "./terms/**/*.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'vb-dark':  '#1C1008',
        'vb-brown': '#4A2C18',
        'vb-tan':   '#8B6B4A',
        'vb-cream': '#F6EEE3',
        'vb-beige': '#EAD9C2',
        'vb-warm':  '#FAF7F2',
        'vb-card':  '#F0E6D4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    }
  },
  plugins: []
};
