/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
];
export const theme = {
  extend: {
    colors: {
      neutral: {
        50: '#E8E9EA',
        100: '#B8BABE',
        200: '#96989E',
        300: '#666A72',
        400: '#484D56',
        500: '#1A202C',
        600: '#181D28',
        700: '#12171F',
        800: '#0E1218',
        900: '#0B0D12',
      },
    },
  },
  screens: {
    sm: '640px', // Petit écran (smartphones)
    md: '768px', // Écran moyen (tablettes)
    lg: '1024px', // Grand écran (ordinateurs portables)
    xl: '1280px', // Très grand écran (moniteurs)
    '2xl': '1536px', // Extra grand écran (moniteurs larges)
  },
};
export const plugins = [];
