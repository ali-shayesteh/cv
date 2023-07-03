/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vsgray: {
          10: "#f3f3f3",
          20: "#ececec",
          30: "#dddddd",
          40: "#bbbbbb",
          50: "#cccccc",
          75: "#c4c4c4",
          100: "#a9a9a9",         
          200: "#7b9096",
          250: "#858585",
          300: "#454646",
          350: "#404040",
          400: "#3c3c3c",
          500: "#2d2d2d",
          600: "#333333",
          700: "#252526",
          800: "#1e1e1e"
        },
        vscode: {
          "blue": "#007acc"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
