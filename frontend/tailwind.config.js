/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C3AC9',        // Fundo principal (roxo claro)
        primaryDark: '#7B2CBF',    // Stepper e botões (roxo escuro)
        card: '#FFFFFF',           // Card branco
        stepperCircle: '#FFFFFF',  // Círculo ativo do stepper
        stepperInactive: '#B39DDB',// Círculo inativo do stepper
        text: '#22223B',           // Texto principal
        gray: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
} 