/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dwelling-theme-color": "#FF385C",
        "dwelling-light-black": "#222222",
        "dwelling-light-gray": "#717171",
      },
      gridTemplateRows: {
        "new-listing": "10vh 80vh 10vh",
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin"), require("rippleui")],
};

// const team = [
//   {
//     Name: "Emraan Hasan Hayat",
//     Position: "MERN Stack Developer",
//     Bio: "I'm Hayat a skilled MERN stack developer with a strong background in front-end and back-end development, I'm dedicated to building robust and innovative solutions for today's digital world.",
//     Github: "https://github.com/HayatEmraan",
//     Discord: "https://discord.com/users/hayatemraan",
//     Linkedin: "https://www.linkedin.com/in/hayatemraan/",
//     portfolio: "https://hayatemraan.netlify.app/",
//     PhotoURL:
//       "https://res.cloudinary.com/dkozp31ij/image/upload/v1692171117/bhgywbrz4jqxnq5j6xyt.jpg",
//   },
// ];
