import { FaLock, FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "JobDock",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "A Laravel-based job portal where users can search, apply and manage jobs efficiently.",
      github: "https://github.com/namansainiii/jobdock",
      live: "https://jobdock.org/",
      isPrivate: false,
    },
    {
      title: "Warehouse Management System",
      tech: ["Laravel", "Google Maps", "MySQL"],
      description:
        "Implemented warehouse onboarding, inventory management and location tracking features.",
      github: null,
      live: "https://downloadappshere.online/",
      isPrivate: true,
    },
    {
      title: "StudyHere",
      tech: ["Symfony", "React", "MySQL"],
      description:
        "A web-based alumni management portal that enables institutions to maintain alumni records, foster networking, and strengthen alumni engagement.",
      github: "https://github.com/namansainiii/studyHere",
      live: "https://github.com/namansainiii/studyHere",
      isPrivate: false,
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Tailwind CSS", "NextJS"],
      description:
        "A sleek and fully responsive developer portfolio built with React and Tailwind CSS, showcasing projects, skills, resume, and contact functionality.",
      github: "https://github.com/namansainiii/portfolio",
      live: "https://github.com/namansainiii/portfolio",
      isPrivate: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 dark:text-teal-400 uppercase tracking-wide">
          Projects
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#151b26] dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-amber-500 dark:text-amber-400 text-center mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 dark:text-slate-300 text-center text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-medium border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto flex items-center justify-between text-sm font-medium">
                {project.isPrivate ? (
                  <span className="flex items-center gap-1.5 text-slate-400 font-normal">
                    <FaLock size={13} className="text-slate-400" />
                    <span>Private Repo</span>
                  </span>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white transition duration-200"
                  >
                    <FaLink size={13} />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span></span>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition duration-200 font-medium"
                  >
                    <span>🚀</span>
                    <span>Live</span>
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


