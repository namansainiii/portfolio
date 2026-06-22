export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 uppercase tracking-wide">
          About Me
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
          <p className="text-slate-600 leading-8 text-lg">
            Hey, I am{" "}
            <span className="font-semibold text-slate-800">
              Namanpreet Kaur
            </span>
            , a Software Developer with experience in PHP, Laravel, CodeIgniter,
            ReactJS, MySQL, and modern web application development.
          </p>

          <p className="text-slate-600 leading-8 text-lg mt-6">
            I have worked on School ERP systems including Admissions,
            Examinations, Dashboard, and Warehouse Management modules, helping
            build scalable solutions used by educational institutions.
          </p>

          <p className="text-slate-600 leading-8 text-lg mt-6">
            Currently, I am pursuing an MBA in Cyber Security while continuously
            enhancing my skills in software development, backend architecture,
            and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/cv/NamanpreetKaur.pdf"
              download
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Download CV
            </a>

            <a
              href="/cv/NamanpreetKaur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition duration-300"
            >
              View CV
            </a>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-teal-50 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-teal-600">3+</h3>

              <p className="text-slate-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-teal-600">10+</h3>

              <p className="text-slate-600 mt-2">Technologies</p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold text-teal-600">3+</h3>

              <p className="text-slate-600 mt-2">Major Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
