export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 dark:text-teal-400 uppercase tracking-wide">
          About Me
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-lg border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg">
            Hey, I am{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              Namanpreet Kaur
            </span>
            , a Software Developer specializing in PHP, Laravel, CodeIgniter, ReactJS, MySQL, and modern web application development.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg mt-6">
            I have experience building solutions across diverse domains, including School ERP, Warehouse Management, Hotel Management, and Education platforms. My projects include JobDock, Shift Ninjas, JSMStudy, and several custom web applications. With experience in backend development, APIs, database architecture, dashboards, and responsive web applications, I focus on building scalable and user-friendly solutions.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-8 text-lg mt-6">
            I have completed my MBA in Cyber Security, combining my technical expertise with knowledge of cybersecurity and business management.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="/Namanpreet_Kaur.pdf"
              download
              className="w-48 text-center px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Download CV
            </a>

            <a
              href="/Namanpreet_Kaur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 text-center px-8 py-4 rounded-xl border border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-teal-950/50 transition duration-300"
            >
              View CV
            </a>
          </div> */}

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-teal-50 dark:bg-slate-800/80 rounded-2xl p-5 text-center border border-teal-100/50 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400">3+</h3>

              <p className="text-slate-600 dark:text-slate-300 mt-2">Years Experience</p>
            </div>

            <div className="bg-teal-50 dark:bg-slate-800/80 rounded-2xl p-5 text-center border border-teal-100/50 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400">10+</h3>

              <p className="text-slate-600 dark:text-slate-300 mt-2">Technologies</p>
            </div>

            <div className="bg-teal-50 dark:bg-slate-800/80 rounded-2xl p-5 text-center border border-teal-100/50 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400">3+</h3>

              <p className="text-slate-600 dark:text-slate-300 mt-2">Major Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

