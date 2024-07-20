import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      mobile: "410px",
      tablet: "731px",
      lTablet: "985px",
      desktop: "1260px",
      lDesktop: "1400px",
    },
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        sfPro: ["var(--font-sfpro)"],
      },
      backgroundImage: {
        bg: "url('/images/boxing-back.png')",
        person: "url('/images/person.png')",
        boxingBack: "url('/images/back.png')",
        upcoming: "url('/images/upcomingEv.png')",
        ali: "url('/images/ali.png')",
        contactBg: "url('/images/contact.png')",
      },
      colors: {
        link: "#6f6f6f",
        basic: "#000000",
        error: "#ED7272",
        blue: "#2451CE",
        desc: "var(--text-color)",
      },
      boxShadow: {
        shadowBlue: "0px 7px 35px 0px #2451CE",
      },
      backgroundColor: {
        basic: "#0F0F0F",
        darkGray: "#292929",
        white: "#ffffff",
        blue: "#2451CE",
        gray: "#292929;",
        card: "#F4F4F4",
      },
      borderColor: {
        errorInput: "#ED7272",
        gray: "#acacac",
        gray900: "#999999",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
