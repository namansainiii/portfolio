"use client";

import { useState } from "react";

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
  SiPostman,
  SiSymfony,
  SiPostgresql,
  SiPhpmyadmin,
  SiFilezilla,
  SiNextdotjs
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" size={40} />,
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
        icon: <SiNextdotjs className="text-cyan-500" size={40} />,
      },
    ],

    Backend: [
      { name: "PHP", icon: <FaPhp className="text-indigo-500" size={40} /> },
      { name: "Symfony", icon: <SiSymfony className="text-black" size={40} /> },
      {
        name: "Laravel",
        icon: <SiLaravel className="text-red-500" size={40} />,
      },
      {
        name: "CodeIgniter",
        icon: <SiCodeigniter className="text-orange-500" size={40} />,
      },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" size={40} /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-700" size={40} />,
      },
    ],

    Tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" size={40} /> },
      { name: "GitHub", icon: <FaGithub className="text-black" size={40} /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" size={40} />,
      },
      {
        name: "phpMyAdmin",
        icon: <SiPhpmyadmin className="text-orange-500" size={40} />,
      },
      {
        name: "FileZilla",
        icon: <SiFilezilla className="text-red-500" size={40} />,
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
          {/* Left Side Categories */}
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
                onClick={() => setActiveCategory(category)}
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

          {/* Skills Area */}
          <div className="lg:col-span-3 space-y-4">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div
                key={category}
                className={`transition-all duration-500 ${
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
