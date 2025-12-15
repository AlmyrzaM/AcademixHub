/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        midnight: '#0b1021',
        glow: '#7c7dff',
      },
      boxShadow: {
        glow: '0 0 30px rgba(124, 125, 255, 0.25)',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPSdub25lJyB2aWV3Qm94PScwIDAgMjAwIDIwMCc+PHJlY3Qgd2lkdGg9JzIwMCcgaGVpZ2h0PScyMDAnIGZpbGw9JyMwMDAwMDAnLz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9JzAuOCcgbnVtT2N0YXZlcz0nNCcgc3RpdGNoVGlsZXM9JzMnIHN0ZD0nMC4wNScvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJyBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9JzAuNScvPjwvc3ZnPg==')",
        'gradient-radial': 'radial-gradient(circle at 20% 20%, rgba(124,125,255,0.25), transparent 25%), radial-gradient(circle at 80% 0%, rgba(0,212,255,0.15), transparent 30%), radial-gradient(circle at 60% 80%, rgba(255,128,255,0.15), transparent 30%)',
      },
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
