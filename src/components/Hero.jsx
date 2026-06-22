export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white"
    >
      {/* Background Glow */}{" "}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50 to-emerald-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/profile/1.jpeg"
            alt="Namanpreet Kaur"
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-xl shadow-teal-200"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available for Freelance Work
          </div>

        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
  Namanpreet Kaur
</h1>

          <h2 className="text-xl md:text-3xl text-slate-700 mb-6 font-semibold">
  Software Developer
</h2>

<p className="text-teal-600 font-medium mb-6">
  PHP • Laravel • Symfony • ReactJS • MySQL
</p>

          <p className="max-w-2xl text-base md:text-lg text-slate-500 mb-8 leading-7 md:leading-8">
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
              className="px-8 py-4 rounded-xl border border-teal-200 text-slate-700 hover:bg-teal-50 transition duration-300 font-medium text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
