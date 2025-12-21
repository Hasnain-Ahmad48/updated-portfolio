// import {Outfit} from "next/font/google";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         lightHover: "#646464ff",
//         darkHover: "#2a004a",
//         darkTheme: "#11001f",
//       },
//       fontFamily: {
//         Outfit: ["Outfit", "sans-serif"],
//         Ovo: ["Ovo", "serif"],
//       },
//       boxShadow: {
//         black: "4px 4px 0 #000",
//         white: "4px 4px 0 #fff",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#646464ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        // outfit: ["Outfit", "sans-serif"],
        ovo: ["Ovo", "serif"],
         outfit: ["var(--font-outfit)"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  plugins: [],
};