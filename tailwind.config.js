module.exports = {
  mode: 'jit',
  purce: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
