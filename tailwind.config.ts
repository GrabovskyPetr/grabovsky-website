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
        "primary": "var(--color-primary)",
        "primary-alpha": "var(--color-primary-alpha)",
        "secondary": "var(--color-secondary)",
        "accent-one": "var(--color-accent-one)",
        "accent-two": "var(--color-accent-two)",
        "accent-three": "var(--color-accent-three)",
      },
    },
  },
  plugins: [],
};
export default config;
