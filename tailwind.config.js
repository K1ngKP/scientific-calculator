module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
      },
      colors: {
        'blue-500': '#3B82F6',
        'purple-500': '#8B5CF6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
