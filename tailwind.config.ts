import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    screens: {
      mobile: "410px",
      mobileMap: "420px",
      smallTablet: "731px",
      tablet: "985px",
      desktop: "1200px",
      isShowAllElems: "1310px",
      lDesktop: "1400px",
    },
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        sfPro: ['var(--font-sfpro)'],
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
      },
      borderColor: {
        errorInput: "#ED7272",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config