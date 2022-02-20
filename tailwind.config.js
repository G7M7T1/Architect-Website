module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ss': '310px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mss': {'max': '310px'},
      'msm': {'max': '640px'},
      'mmd': {'max': '768px'},
      'mlg': {'max': '1024px'},
      'mxl': {'max': '1280px'},
      'm2xl': {'max': '1536px'},
    }
  },
  plugins: [],
}
