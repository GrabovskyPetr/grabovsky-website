import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary": "url('/primary-background.svg')",        
      },
      backgroundSize: {
        "primary-size": "1536px 1024px",
      },
      backgroundPosition: {
        "primary-position": "-30rem 0rem",
      },
      colors: {
        "secondary": "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
