import { transform } from "framer-motion";
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        fader:{
          '0%': { opacity: "1.0"},
          '5%':{ opacity: "0.5"},
          '10%':{ opacity: "1.0"},
          '15%':{ opacity: "0.5"},
          '20%':{ opacity: "0.3"},
          '90%':{ opacity: "0.3"},
        },
        faderMd:{
          '0%, 100%':{ opacity: "0.4"},
          '50%':{ opacity: "0.4"},
          '55%': { opacity: "0.75"},
          '60%':{ opacity: "0.4"},
          '65%':{ opacity: "0.75"},
          '70%':{ opacity: "0.4"},
          '90%':{ opacity: "0.4"},
        },
        onOff:{
          '0%': { opacity: ".6"},
          '49%':{ opacity: ".6"},
          '50%':{ opacity: "0"},
          '99':{ opacity: "0"},
          '100%':{ opacity: "0"},
        },
        starShift:{
          '0%': { transform: "scale(1.0)"},
          '50%':{ transform: "scale(1.2)"},
        },
        up: {
          '0%' : { transform: 'translateY(20vh) rotate(0deg)' },
          '50%': { transform: 'translateY(-50vh)' },
          '55%': { transform: 'translateY(-10vh)' , filter: "blur(0)" },
          '65%': { transform: 'translateY(-250vh) rotate(0deg)', filter: "blur(15px)" },
          '66%': { transform: 'translateY(-120vh) rotate(180deg)', filter: "blur(10px)" },
          '75%': { transform: 'translateY(-10vh) rotate(0deg)', filter: "blur(0)" },
          '100%': { transform: 'translateY(20vh)' },
        },
        float: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0) perspective(1000px) rotate(0deg) rotateZ(90deg) rotateX(0deg) rotateY(180deg)', opacity: "1"},
          '25%': { transform: 'scale(0.5) translate(200px, -200px)' , opacity: "0.7" },
          '50%': { transform: 'scale(0.1) translate(-200px, 200px)' , opacity: "0.1" },
          '75%': { transform: 'scale(0.5) translate(150px, -150px) rotate(100deg) rotateZ(180deg) rotateX(180deg) rotateY(90deg)' },
        },
        snitchFloat: {
          '0%': { transform: 'scale(1) translate(0, 0) rotate(0deg) rotateZ(0deg) rotateX(0deg) rotateY(0deg)' , filter: "blur(0)" },
          '5%': { transform: 'scale(0.2) translate(200vh, 200vh)', filter: "blur(0)" },
          '20%': { transform: 'scale(0.8) translate(-200vh, -400vh)' },
          '30%': { transform: 'scale(0.1) translate(400vh, 200vh)', filter: "blur(15px)" },
          '40%': { transform: 'scale(0.3) translate(0vh, 500vh) rotate(360deg)', filter: "blur(1px)" },
          '50%': { transform: 'scale(0.2) translate(-100vh, -100vh)', filter: "blur(3px)" },
          '60%': { transform: 'scale(0.4) translate(600vh, 1200vh)' , filter: "blur(2px)"},
          '70%': { transform: 'scale(0.1) translate(200vh, 200vh)' , filter: "blur(15px)"},
          '75%': { transform: 'scale(0.3) translate(100vh, -150vh) rotate(100deg) rotateZ(180deg) rotateX(20deg) rotateY(20deg)' , filter: "blur(5px)"},
          '85%': { transform: 'scale(1.5) translate(0vh, 0vh)', filter: "blur(0px)" },
          '89%': { transform: 'scale(1.5) translate(30vh, 0vh)', filter: "blur(0px)" },
          '97%': { transform: 'scale(0.8) translate(800vh, 200vh)', filter: "blur(0px)" },
          '100%': { transform: 'scale(0.8) translate(-200vh, 500vh)' , filter: "blur(0px)" },
        },
        faceFloat: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0) rotate(0deg) rotateZ(0deg) rotateX(0deg) rotateY(0deg)', filter: "blur(0px)" },
          '25%': { transform: 'scale(0.2) translate(200px, -200px)', filter: "blur(10px)"  },
          '50%': { transform: 'scale(0.1) translate(-200px, 200px)' },
          '75%': { transform: 'scale(0.3) translate(300px, -300px) rotate(20deg) rotateZ(40deg) rotateX(20deg) rotateY(20deg)' },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        fader: "fader 6s ease-in-out infinite",
        faderMd: "faderMd 4s ease-in-out infinite",
        starShift: "starShift 25s ease-in-out infinite",
        float: 'float 10s infinite',
        snitchFloat: 'snitchFloat 40s infinite',
        faceFloat: 'faceFloat 10s infinite',
        up: 'up 40s infinite',
        onOff: 'onOff 1s infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;