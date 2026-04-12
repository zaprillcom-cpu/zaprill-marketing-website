import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        accent: {
          green: "var(--accent-green)",
          greenDark: "var(--accent-green-dark)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        surface: "var(--surface)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },
        error: "var(--error)"
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
        xl: "16px"
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        hover: "0 4px 24px rgba(37,99,235,0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
