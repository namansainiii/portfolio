import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <About />

      <Skills />
      <Certifications />
      <Projects />

      <Contact />

      <footer className="border-t border-slate-200 py-8 text-center bg-white">
        <p className="text-slate-500">
          © 2026 Namanpreet Kaur. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
