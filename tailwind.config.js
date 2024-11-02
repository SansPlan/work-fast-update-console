/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './example/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: 'var(--c-header-height)',
        'header-less': 'calc(100vh - var(--c-header-height))',
        content:
          'calc(100vh - var(--c-header-height) - var(--c-tabbar-height))',
      },
    },
  },
  plugins: [],
}
