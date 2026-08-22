import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "AlmaCircle",
      tech: ["Symfony", "React", "MySQL"],
      description:
        "A web-based alumni management portal that enables institutions to maintain alumni records, foster networking, and strengthen alumni engagement.",
      github: "https://github.com/namansainiii/AlmaCircle",
      live: "https://almacircle.com",
    },
    {
      title: "School ERP System",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      description:
        "Worked on Admissions, Examinations, Dashboard and Pre-Admission modules used by schools.",
      github: "https://github.com/namansainiii/School-ERP",
      live: "https://school-erp-demo.com",
    },
    {
      title: "JobDock",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "A Laravel-based job portal where users can search, apply and manage jobs efficiently.",
      github: "https://github.com/namansainiii/JobDock",
      live: "https://jobdock-demo.com",
    },
    {
      title: "Warehouse Management System",
      tech: ["Laravel", "Google Maps", "MySQL"],
      description:
        "Implemented warehouse onboarding, inventory management and location tracking features.",
      github: "https://github.com/namansainiii/Warehouse-Management",
      live: "https://warehouse-demo.com",
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
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Header Bar */}
                <div className="h-4 bg-gradient-to-r from-teal-400 to-emerald-500"></div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    {project.title}
                  </h3>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-sm font-medium border border-teal-100 dark:border-teal-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom GitHub & Live Demo Action Section */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold text-sm flex items-center justify-center gap-2 transition duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                  >
                    <FaExternalLinkAlt size={13} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition duration-300 hover:scale-[1.02]"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
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

