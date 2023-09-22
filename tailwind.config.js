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
  darkMode: 'class',
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
//   {0
//     Name: "Emraan Hasan Hayat",
//     Position: "MERN Stack Developer",
//     Bio: "I'm Hayat a skilled MERN stack developer with a strong background in front-end and back-end development, I'm dedicated to building robust and innovative solutions for today's digital world.",
//     Github: "https://github.com/HayatEmraan",
//     Discord: "https://discord.com/users/hayatemraan",
//     Linkedin: "https://www.linkedin.com/in/hayatemraan/",
//     portfolio: "https://emraan.me/",
//     PhotoURL:
//       "https://res.cloudinary.com/dkozp31ij/image/upload/v1692171117/bhgywbrz4jqxnq5j6xyt.jpg",
//   },
//   {
//     Name: "Muhammad Arman Sikder",
//     Position: "MERN Stack Developer",
//     Bio: "I'm Arman a skilled MERN stack developer with a strong background in front-end development, I'm dedicated to building robust and innovative solutions for today's digital world.",
//     Github: "https://github.com/Armans07",
//     Discord: "https://discord.com/users/arman1264",
//     Linkedin: "https://www.linkedin.com/in/muhammad-arman-71a736184/",
//     portfolio: "https://arman-portfolio-3e3ed.web.app/",
//     PhotoURL: "https://i.ibb.co/MRZFnmc/IMG-20221120-0001.jpg",
//   },
//   {
//     Name: "Md Raju Ahammed",
//     Position: "Front-end Developer",
//     Bio: "Hi there! My name is Md Raju Ahammed, and I am a dedicated FRONT-END DEVELOPER. I am enthusiastic about entering the field and eager to learn and grow in front-end development.",
//     Github: "https://github.com/raju720190r",
//     Discord: "https://discord.com/users/raju7201490r",
//     Linkedin: "https://www.linkedin.com/in/md-raju-ahammed-199226211/",
//     portfolio: "https://raju-ahammed.web.app/",
//     PhotoURL:
//       "https://i.ibb.co/Q9v7RDN/received-6509815639101223.jpg?fbclid=IwAR1T0cbuCoGNylZMB3N_TUobLmnqIHhg9FQlU778OXEZhGMHezFiThMR9eA",
//   },
// ];
