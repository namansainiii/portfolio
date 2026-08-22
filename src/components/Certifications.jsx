export default function Certifications() {
  const certifications = [
    {
      title: "Advanced JavaScript",
      issuer: "Coursera",
      year: "2026",
      link: "/certificates/js.pdf",
      image: "/certificates/js.png",
    },
    {
      title: "ReactJS Development",
      issuer: "Coursera",
      year: "2026",
      link: "/certificates/reactjs.pdf",
      image: "/certificates/reactjs.png",
    },
    {
      title: "NextJS Development",
      issuer: "Coursera",
      year: "2026",
      link: "/certificates/nextjs.pdf",
      image: "/certificates/nextjs.png",
    },
    {
      title: "Laravel Development",
      issuer: "Coursera",
      year: "2026",
      link: "/certificates/laravel_development.pdf",
      image: "/certificates/laravel_development.png",
    },
    {
      title: "Full Stack PHP Web Development",
      issuer: "Coursera",
      year: "2026",
      link: "/certificates/php_development.pdf",
      image: "/certificates/php_development.png",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400 uppercase tracking-wide">
          Certifications
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <div className="h-44 overflow-hidden rounded-2xl mb-5 border border-slate-200 dark:border-slate-700">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                </a>

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {cert.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>

                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{cert.year}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:scale-105 transition shadow-md"
              >
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

