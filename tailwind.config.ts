import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button:'#B88E2F',
        text:'#333333',
        pink:'#FFF3E3',
        textwhite:'#FFFFFF',
        blackheading:'#3A3A3A',
        textgray:'#616161',
        bgpink:'#FCF8F3',
        footer:'#9F9F9F',
        bgcard:'#F4F5F7',
        cardtext:'#898989',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        monteserate: ['var(--font-monteserrate)'],
      }
    },
  },
  plugins: [],
};
export default config;
