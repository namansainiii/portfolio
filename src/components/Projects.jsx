export default function Projects() {
  const projects = [
    {
      title: "AlmaCircle",
      tech: ["Symfony", "React", "MySQL"],
      description:
        "A web-based alumni management portal that enables institutions to maintain alumni records, foster networking, and strengthen alumni engagement.",
    },
    {
      title: "School ERP System",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      description:
        "Worked on Admissions, Examinations, Dashboard and Pre-Admission modules used by schools.",
    },
    {
      title: "Jobopia",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      description:
        "A Laravel-based job portal where users can search, apply and manage jobs efficiently.",
    },
    {
      title: "Warehouse Management System",
      tech: ["Laravel", "Google Maps", "MySQL"],
      description:
        "Implemented warehouse onboarding, inventory management and location tracking features.",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 uppercase tracking-wide">
          Projects
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Banner */}
              {/* <div className="h-48 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div> */}

              <div className="h-4 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center"></div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                {/* <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:scale-105 transition">
                    Live Demo
                  </button>

                  <button className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition">
                    GitHub
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
