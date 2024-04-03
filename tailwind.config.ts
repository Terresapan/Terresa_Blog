import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'source-serif': ['Source Serif Pro', 'serif'],
      },
      
      colors: {
        LightSurface: '#FEF7FF', 
        DarkSurface: '#36343A',
        LightPrimary: '#68548E',
        DarkPrimary: '#D3BCFD',
        PrimaryContainer: '#EBDDFF',
        PrimaryContainerDark: '#503D74',
        LightOnPrimary: '#FFFFFF',
        DarkOnPrimary: '#39265C',
        LightAccent: '#7F525D',
        DarkAccent: '#F1B7C5',
        textOnLight: '#1D1B20', 
        textOnLightVariant: '#49454E', 
        textOnDark: '#E7E0E8',
        textOnLightPrimary: '#FFFFFF',
        textOnDarkPrimary: '#000000',
        },
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;

