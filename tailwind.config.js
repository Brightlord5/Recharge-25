/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",  // Black
        secondary: "#FF0000", // Red
        "secondary-light": "#FF3333", // Lighter red
        "secondary-dark": "#CC0000", // Darker red
        background: "#121212", // Dark background
        surface: "#1E1E1E",  // Slightly lighter surface color
        "surface-light": "#2D2D2D", // Even lighter surface for hover states
        "text-primary": "#FFFFFF", // White text
        "text-secondary": "#CCCCCC", // Light gray text
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #FF0000, #CC0000)',
        'text-gradient': 'linear-gradient(to right, #FF0000, #FF3333)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 20px rgba(255, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 