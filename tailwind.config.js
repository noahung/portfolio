/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        cursor: {
          bg: '#14120b',
          card: '#1c1a14',
          'card-hover': '#24211a',
          border: '#28261e',
          'border-light': 'rgba(237, 236, 236, 0.12)',
          'border-active': '#454035',
          text: '#edecec',
          'text-sec': '#9b988f',
          'text-dim': '#68655c',
          accent: '#f59e0b',
        },
        gh: {
          bg: '#14120b',
          canvas: '#1c1a14',
          subtle: '#24211a',
          muted: '#28261e',
          border: '#28261e',
          'border-active': '#454035',
          text: '#edecec',
          'text-muted': '#9b988f',
          'text-dim': '#68655c',
          blue: '#58a6ff',
          'blue-hover': '#79b8ff',
          purple: '#bc8cff',
          'purple-glow': '#a371f7',
          green: '#3fb950',
          'green-glow': '#2ea043',
        },
      },
      boxShadow: {
        'gh-card': '0 0 0 1px rgba(240, 246, 252, 0.08), 0 16px 32px rgba(1, 4, 9, 0.7)',
        'gh-glow-purple': '0 0 60px -15px rgba(188, 140, 255, 0.25)',
        'gh-glow-blue': '0 0 60px -15px rgba(88, 166, 255, 0.25)',
        'gh-glow-green': '0 0 60px -15px rgba(63, 185, 80, 0.25)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
