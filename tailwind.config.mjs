// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Lora"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      },
      fontSize: {
        // Titulares hero
        hero: ['4rem', { lineHeight: '1.1' }], // 64px
        h1: ['3rem', { lineHeight: '1.15' }], // 48px
        h2: ['2rem', { lineHeight: '1.2' }], // 32px
        h3: ['1.5rem', { lineHeight: '1.3' }], // 24px
        // Textos
        body: ['1rem', { lineHeight: '1.75' }], // 16px
        lead: ['1.25rem', { lineHeight: '1.75' }], // 20px
        small: ['0.875rem', { lineHeight: '1.5' }], // 14px
        micro: ['0.75rem', { lineHeight: '1.5' }], // 12px
      },
      spacing: {
        section: '6rem', // 96px padding entre secciones
        sectionSm: '3rem', // 48px para mobile
        gapLarge: '4rem', // 64px gaps importantes
        gapMedium: '2rem', // 32px gaps medios
      },
      colors: {
        muted: '#6B7280', // gris para textos suaves
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
