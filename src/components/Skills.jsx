"use client";

import { useState, useRef } from "react";

import {
  FaPhp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiPostman,
  SiSymfony,
  SiPostgresql,
  SiPhpmyadmin,
  SiFilezilla,
  SiNextdotjs,
  SiVite,
  SiAlpinedotjs,
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);
  const databaseRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (window.innerWidth < 768) {
      setTimeout(() => {
        const navbarHeight = 180;

        if (category === "Frontend" && frontendRef.current) {
          window.scrollTo({
            top: frontendRef.current.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }

        if (category === "Backend" && backendRef.current) {
          window.scrollTo({
            top: backendRef.current.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }

        if (category === "Tools" && toolsRef.current) {
          window.scrollTo({
            top: toolsRef.current.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }

        if (category === "Database" && databaseRef.current) {
          window.scrollTo({
            top: databaseRef.current.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };
  const skillCategories = {
    Frontend: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500" size={40} />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500" size={40} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" size={40} />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-sky-500" size={40} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" size={40} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className="text-cyan-500" size={40} />,
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs className="text-black" size={40} />,
      },
    ],

    Backend: [
      {
        name: "PHP",
        icon: <FaPhp className="text-indigo-500" size={40} />,
      },
      {
        name: "Symfony",
        icon: <SiSymfony className="text-black" size={40} />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className="text-red-500" size={40} />,
      },
      {
        name: "CodeIgniter",
        icon: <SiCodeigniter className="text-orange-500" size={40} />,
      },
    ],

    Database: [
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-500" size={40} />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-700" size={40} />,
      },
    ],

    Tools: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" size={40} />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-black" size={40} />,
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-500" size={40} />,
      },
      {
        name: "Alpine.js",
        icon: <SiAlpinedotjs className="text-sky-500" size={40} />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" size={40} />,
      },
      {
        name: "FileZilla",
        icon: <SiFilezilla className="text-orange-500" size={40} />,
      },
      {
        name: "Phpmyadmin",
        icon: <SiPhpmyadmin className="text-orange-500" size={40} />,
      },
    ],
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 uppercase tracking-wide">
          Skills
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* Categories */}
          <div className="space-y-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`w-full text-left px-6 py-4 rounded-full transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Skills
            </button>

            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-6 py-4 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills */}
          <div className="lg:col-span-3 space-y-8">
            {Object.entries(skillCategories).map(([category, skills]) => {
              const sectionRef =
                category === "Frontend"
                  ? frontendRef
                  : category === "Backend"
                    ? backendRef
                    : category === "Database"
                      ? databaseRef
                      : toolsRef;

              return (
                <div
                  key={category}
                  ref={sectionRef}
                  className={`scroll-mt-40 transition-all duration-500 ${
                    activeCategory === "All" || activeCategory === category
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div className="flex flex-wrap gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white border border-slate-200 rounded-full px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-teal-500 hover:-translate-y-1 transition-all duration-300"
                      >
                        {skill.icon}

                        <span className="text-slate-700 text-sm font-medium whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
