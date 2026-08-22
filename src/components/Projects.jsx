"use client";

import {
  FaLock,
  FaGithub,
  FaExternalLinkAlt,
  FaLayerGroup
} from "react-icons/fa";
import {
  SiLaravel,
  SiReact,
  SiSymfony,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      id: "jobdock",
      title: "JobDock",
      badge: "Fullstack Web App",
      tech: [
        { name: "Laravel", icon: <SiLaravel className="text-rose-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> }
      ],
      description:
        "A Laravel-based job portal where users can search, apply, and manage job applications efficiently.",
      github: "https://github.com/namansainiii/jobdock",
      live: "https://jobdock.org/",
      isPrivate: false,
    },
    {
      id: "warehouse",
      title: "Warehouse Management",
      badge: "Enterprise Platform",
      tech: [
        { name: "Laravel", icon: <SiLaravel className="text-rose-500" /> },
        { name: "Google Maps", icon: null },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> }
      ],
      description:
        "Inventory management platform featuring warehouse onboarding, stock tracking, and location mapping.",
      github: null,
      live: "https://downloadappshere.online/",
      isPrivate: true,
    },
    {
      id: "studyhere",
      title: "StudyHere",
      badge: "Educational Q&A Portal",
      tech: [
        { name: "Laravel", icon: <SiSymfony className="text-slate-800 dark:text-white" /> },
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> }
      ],
      description:
        "An interactive learning portal for teachers and students where teachers post questions and assignments for students to answer online.",
      github: "https://github.com/namansainiii/studyHere",
      live: "https://studyhere-48lj.onrender.com",
      isPrivate: false,
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      badge: "Developer Portfolio",
      tech: [
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "NextJS", icon: <SiNextdotjs className="text-slate-800 dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> }
      ],
      description:
        "Responsive developer portfolio built with React and Tailwind CSS featuring dynamic theme toggling.",
      github: "https://github.com/namansainiii/portfolio",
      live: "https://namanpreet.vercel.app/",
      isPrivate: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">PROJECTS</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-4"></div>

          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            A collection of full-stack web applications, enterprise systems, and modern web platforms.
          </p>
        </div>

        {/* Compact Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-500/50 dark:hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Top Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 text-[11px] font-medium">
                    <FaLayerGroup size={10} className="text-teal-600 dark:text-teal-400" />
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                    >
                      {t.icon}
                      <span>{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                {project.isPrivate ? (
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                    <FaLock size={11} className="text-amber-500" />
                    <span>Private Repo</span>
                  </div>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition duration-200 border border-slate-200 dark:border-slate-700"
                  >
                    <FaGithub size={13} />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <div></div>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}






