import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EAE6DE',
          light: '#F5F1EB',
          dark: '#DDD8CE',
        },
        secondary: {
          DEFAULT: '#226192',
          light: '#357BAF',
          dark: '#18476B',
        },
        tertiary: {
          DEFAULT: '#EF8557',
          light: '#F49F7B',
          dark: '#D86B3E',
        },
        surface: {
          DEFAULT: '#EAE6DE',
          card: '#FFFFFF',
          alt: '#F5F1EB',
          border: '#D6D0C4',
          'border-light': '#E5E0D6',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
        },
      },
      fontFamily: {
        heading: ['Arial', 'Helvetica Neue', 'sans-serif'],
        body: ['Arial', 'Helvetica Neue', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        hero: '-0.075em',
        h2: '-0.065em',
        tightest: '-0.05em',
      },
      lineHeight: {
        tightest: '0.85',
        tight: '1.0',
        relaxed: '1.85',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
