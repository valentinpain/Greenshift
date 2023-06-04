/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|violet|zinc|orange)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(red|green|blue|yellow|violet|zinc|orange)-(100|200|300|400|500|600|700|800|900)/,
    },
        {
      pattern: /text-(red|green|blue|yellow|violet|zinc|orange)-(100|200|300|400|500|600|700|800|900)/,
    }
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        outfit : 'var(--outfit)',
      },
      colors : {
        'primary' : {
          DEFAULT : "#02C39A"
        },
        'secondary': {
          DEFAULT : "#08394C"
        },
        'tertiary' : {
          DEFAULT : "#ACACAC"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
