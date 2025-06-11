/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF', // Main primary color
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#E6F7FF',
          100: '#CCF0FF',
          200: '#99E0FF',
          300: '#66D1FF',
          400: '#33C1FF',
          500: '#00B2FF', // Main secondary color
          600: '#008ECC',
          700: '#006B99',
          800: '#004766',
          900: '#002433',
        },
        accent: {
          50: '#FFF6E6',
          100: '#FFECCC',
          200: '#FFDA99',
          300: '#FFC766',
          400: '#FFB533',
          500: '#FFA200', // Main accent color
          600: '#CC8200',
          700: '#996100',
          800: '#664100',
          900: '#332000',
        },
        success: {
          50: '#E6F9F1',
          100: '#CCF3E2',
          200: '#99E8C6',
          300: '#66DCA9',
          400: '#33D18D',
          500: '#00C570', // Main success color
          600: '#009E5A',
          700: '#007643',
          800: '#004F2D',
          900: '#002716',
        },
        warning: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE699',
          300: '#FFDA66',
          400: '#FFCD33',
          500: '#FFC100', // Main warning color
          600: '#CC9A00',
          700: '#997400',
          800: '#664D00',
          900: '#332700',
        },
        error: {
          50: '#FEEAE9',
          100: '#FDD5D3',
          200: '#FBAAA7',
          300: '#F9807B',
          400: '#F6554F',
          500: '#F42B23', // Main error color
          600: '#C3221C',
          700: '#921A15',
          800: '#62110E',
          900: '#310907',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};