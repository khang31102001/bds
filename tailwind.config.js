/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(190, 64%, 22%)',
          dark: 'hsl(190, 64%, 15%)',
          light: 'hsl(190, 64%, 22%)',
        },
        title: 'hsl(190, 64%, 18%)',
        text: 'hsl(190, 24%, 35%)',
        textLight: 'hsl(190, 8%, 60%)',
        input: 'hsl(190, 24%, 97%)',
        body: 'hsl(190, 100%, 99%)',
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        title: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        biggest: '2.5rem',
        h1: '1.5rem',
        h2: '1.25rem',
        h3: '1rem',
        normal: '0.938rem',
        small: '0.813rem',
        smaller: '0.75rem',
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
      },
      spacing: {
        header: '3rem',
      },
      zIndex: {
        tooltip: '10',
        fixed: '100',
      },
    },
  },
  plugins: [],
} 