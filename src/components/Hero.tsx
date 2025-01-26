import HeroSvg from "../assets/icons/HeroSvg";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
export function Hero() {
  const socials = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/Rappykyun",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ralph-vincent-rodriguez-205a6b241/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://web.facebook.com/ralphvincent.rodriguez.9",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ralphvincentrodriguez@sksu.edu.ph",
    },
  ];
  return (
 
      <section className="flex flex-col lg:flex-row items-start justify-between gap-16">
        <div className="lg:w-3/5">
          <div className="mb-8 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500/20 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 animate-gradient"></div>
            </div>
          </div>

          <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
            Computer Science Student and Aspiring Software Engineer based in
            Sultan Kudarat, Philippines.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
            I am Ralph Vincent C. Rodriguez a Computer Science student at Sultan
            Kudarat State University and I am passionate about software
            development. I am currently learning web development and I am
            looking for opportunities to work with a team of developers to learn
            and grow.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-zinc-600 hover:text-green-700 hover:scale-110 hover:shadow-lg dark:text-zinc-400 dark:hover:text-green-400 transition-all duration-300 ease-in-out rounded-lg p-2"
              >
                <social.icon size={20} className="sm:w-6 sm:h-6 transform hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium font-incognito">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5 flex justify-center items-center">
          <div className="animate-float mt-16 lg:mt-24 lg:p-20">
            <HeroSvg />
          </div>
        </div>
      </section>

  );
}
