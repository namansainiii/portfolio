import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />

      <About />

      <Skills />
      <Certifications />
      <Projects />

      <Contact />

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center bg-white dark:bg-slate-950 transition-colors duration-300">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © 2026 Namanpreet Kaur. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

