"use client";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const teamData = [
  {
    Name: "Emraan Hasan Hayat",
    Position: "MERN Stack Developer",
    Bio: "I'm Hayat a skilled MERN stack developer with a strong background in front-end and back-end development, I'm dedicated to building robust and innovative solutions for today's digital world.",
    Github: "https://github.com/HayatEmraan",
    Discord: "https://discord.com/users/hayatemraan",
    Linkedin: "https://www.linkedin.com/in/hayatemraan/",
    portfolio: "https://emraan.me/",
    PhotoURL:
      "https://res.cloudinary.com/dkozp31ij/image/upload/v1692171117/bhgywbrz4jqxnq5j6xyt.jpg",
  },
  {
    Name: "Muhammad Arman Sikder",
    Position: "MERN Stack Developer",
    Bio: "I'm Arman a skilled MERN stack developer with a strong background in front-end development, I'm dedicated to building robust and innovative solutions for today's digital world.",
    Github: "https://github.com/Armans07",
    Discord: "https://discord.com/users/arman1264",
    Linkedin: "https://www.linkedin.com/in/muhammad-arman-71a736184/",
    portfolio: "https://arman-portfolio-3e3ed.web.app/",
    PhotoURL: "https://i.ibb.co/MRZFnmc/IMG-20221120-0001.jpg",
  },
  {
    Name: "Md Raju Ahammed",
    Position: "Front-end Developer",
    Bio: "Hi there! My name is Md Raju Ahammed, and I am a dedicated FRONT-END DEVELOPER. I am enthusiastic about entering the field and eager to learn and grow in front-end development.",
    Github: "https://github.com/raju720190r",
    Discord: "https://discord.com/users/raju7201490r",
    Linkedin: "https://www.linkedin.com/in/md-raju-ahammed-199226211/",
    portfolio: "https://raju-ahammed.web.app/",
    PhotoURL:
      "https://i.ibb.co/Q9v7RDN/received-6509815639101223.jpg?fbclid=IwAR1T0cbuCoGNylZMB3N_TUobLmnqIHhg9FQlU778OXEZhGMHezFiThMR9eA",
  },
  {
    Name: "Joyanti Chowdhury",
    Position: "MERN Stack Developer",
    Bio: "Hi there! This is Joyanti Chowdhury. I am a passionate and dedicated MERN Stack DEVELOPER. I am enthusiastic about entering the field.Always try to grab the new features and technology.",
    Github: "https://github.com/ChowdhuryJoyanti",
    Discord: "https://discord.com/users/joyantichowdhury_74143",
    Linkedin: "https://www.linkedin.com/in/joyanti-chowdhury-a89574247/",
    portfolio: "https://jolly-gelato-7b9bf0.netlify.app/",
    PhotoURL:
      "https://i.ibb.co/RDJN6D5/JOYANTI-300x300.jpghttps://i.ibb.co/3S5MmM4/JOYANTI-300x300.jpg",
  },
  {
    Name: "Md Mehedi Hasan Hridoy",
    Position: "Front-end Developer",
    Bio: "I'm Md Mehedi Hasan Hridoy, a Front-End Developer. I specialize in creating visually appealing and user-friendly websites. With a passion for design and a knack for coding, I bring ideas to life on the web.",
    Github: "https://github.com/Mehedi001",
    Discord: "https://discord.com/users/mehedihridoy",
    Linkedin: "https://www.linkedin.com/in/mehedihridoy/",
    portfolio: "https://mehedii.netlify.app/",
    PhotoURL: "https://i.ibb.co/pdKqfYq/mehedi.jpg",
  },
  {
    Name: "Md. Habibur Rahman",
    Position: "MERN stack Developer",
    Bio: "I am a detail oriented MERN stack developer with a strong knowledge of client and backed development. I passionate about building functional,responsive and future rich web applications ",
    Github: "https://github.com/habibur-pro",
    Discord: "https://discordapp.com/users/habiburrahman01",
    Linkedin: "https://www.linkedin.com/in/md-habibur-rahman4542",
    portfolio: "https://habibur-rahman-portfolio.netlify.app/",
    PhotoURL: "https://i.ibb.co/GWGRb8L/Profile-habibur1100.jpg",
  },
  {
    Name: "Nimai Chandra Roy",
    Position: "MERN Stack Developer",
    Bio: "I'm Nimai, a mern stack web developer with a strong foundation in front-end development, I'm a hard working person and I love to work in a challenging situation",
    Github: "https://github.com/nimairoy",
    Discord: "https://discord.com/users/1135095906409127996",
    Linkedin: "https://www.linkedin.com/in/nimai-chandra-roy-b850971bb/",
    portfolio: "https://nimai-portfolio.netlify.app/",
    PhotoURL: "https://i.ibb.co/XV7p3YV/nimair.png",
  },
];

const Team = () => {
  return (
    <div>
      {/* Team */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Team{" "}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>

        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map(
            ({
              Name,
              Position,
              Bio,
              Github,
              Discord,
              portfolio,
              Linkedin,
              PhotoURL,
            }) => {
              return (
                <div
                  key={Name}
                  className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700"
                >
                  <div className="flex items-center gap-x-4">
                    <img
                      className="rounded-full w-20 h-20"
                      src={PhotoURL}
                      alt="Image Description"
                    />
                    <div className="grow">
                      <h3 className="font-medium text-gray-800 dark:text-gray-200">
                        {Name}
                      </h3>
                      <p className="text-xs uppercase text-gray-500">
                        {Position}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-500">{Bio}</p>
                  {/* Social Brands */}
                  <div className="mt-3 space-x-1">
                    <a
                      target="_blank"
                      className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
                      href={Github}
                    >
                      <FaGithub></FaGithub>
                    </a>
                    <a
                      target="_blank"
                      className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
                      href={Linkedin}
                    >
                      <FaLinkedin></FaLinkedin>
                    </a>
                    <a
                      className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
                      href={Discord}
                    >
                      <FaDiscord></FaDiscord>
                    </a>
                    <a
                      target="_blank"
                      className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
                      href={portfolio}
                    >
                      <CiGlobe></CiGlobe>
                    </a>
                  </div>
                  {/* End Social Brands */}
                </div>
              );
            }
          )}

          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="/contact-team"
          >
            <h3 className="text-lg text-gray-800 dark:text-gray-200">
              We are hiring!
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
                See all opening positions
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </a>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Team */}
    </div>
  );
};

export default Team;
