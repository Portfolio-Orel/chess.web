/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        width: "2px",
        track: "#EDF2F7",
        thumb: "#A0AEC0",
        hover: "#718096",
      },
    },
  },
  plugins: [],
};
