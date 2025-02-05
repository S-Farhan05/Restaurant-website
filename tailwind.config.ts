import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        backimg :"url('/greenvegebackground.png')",
        backtom:"url('/backgroundToma.png')",
        backsand:"url('/backSandwic.png')",
        backshop:"url('/Shopback.png')",

      },
      fontFamily:{
        title :["Great Vibes","Arial", "Helvetica", "sans-serif"],
        inter : ["Inter"],
        
    },
    },
  },
  plugins: [],
} satisfies Config;
