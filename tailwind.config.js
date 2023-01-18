import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  }
}