export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/50 to-emerald-50/50 dark:from-slate-950 dark:via-teal-950/20 dark:to-slate-950"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/profile/1.png"
            alt="Namanpreet Kaur"
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl shadow-teal-200/50 dark:shadow-teal-900/30"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 text-sm font-medium mb-6 border border-teal-200/60 dark:border-teal-800/60">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for Freelance Work
          </div>

          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Namanpreet Kaur
          </h1>

          <h2 className="text-xl md:text-3xl text-slate-700 dark:text-slate-200 mb-6 font-semibold">
            Software Developer
          </h2>

          <p className="text-teal-600 dark:text-teal-400 font-medium mb-6">
            PHP • ReactJS • MySQL • Modern Frameworks/Libraries
          </p>

          <p className="max-w-2xl text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 leading-7 md:leading-8">
            Building modern web applications using PHP, Laravel, ReactJS, MySQL
            and scalable backend systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:scale-105 transition duration-300 font-semibold shadow-lg text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-teal-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-800 transition duration-300 font-medium text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

