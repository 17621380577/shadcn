import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '430px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        navy: {
          900: '#1a1f36',
        },
        themecolor: 'var(--themecolor)',
        background: 'var(--background)',
      },
      fontFamily: {
        sans: ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
