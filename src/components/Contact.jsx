import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-teal-600 uppercase tracking-wide">
          CONTACT
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full mb-12"></div>

        <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-lg">
          <p className="text-center text-slate-600 text-lg mb-10">
            Interested in working together? Let's connect and discuss your next
            project.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-lg transition">
              <FaEnvelope className="text-3xl text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-teal-600 mb-2">Email</h3>

              <a
                href="mailto:namanworks17@gmail.com"
                className="text-slate-600 break-all hover:text-teal-600"
              >
                namanworks17@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-lg transition">
              <FaPhoneAlt className="text-3xl text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-teal-600 mb-2">Phone</h3>

              <a
                href="tel:+918847460756"
                className="text-slate-600 hover:text-teal-600"
              >
                +91 8847460756
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-3xl text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-teal-600 mb-2">Location</h3>

              <p className="text-slate-600">Punjab, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="text-center text-xl font-semibold text-slate-800 mb-6">
              Connect With Me
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.linkedin.com/in/namanpreet-17k/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/namansainiii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://instagram.com/kaurpnmn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}