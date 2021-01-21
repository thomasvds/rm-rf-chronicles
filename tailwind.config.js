module.exports = {
  theme: {
    scale: {
      101: '1.01',
    },
  },
  purge: {
    options: {
      whitelist: [
        'bg-pink-500',
        'hover:bg-pink-600',
        'focus:ring-pink-500',
        'bg-blue-500',
        'hover:bg-blue-600',
        'focus:ring-blue-500',
      ],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
