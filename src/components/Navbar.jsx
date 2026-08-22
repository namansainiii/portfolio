"use client";

import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
          Namanpreet Kaur
        </a>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700"
          >
            {mounted && theme === "dark" ? (
              <FaSun size={18} className="text-amber-400" />
            ) : (
              <FaMoon size={18} className="text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700 dark:text-slate-200 text-3xl font-light transition-all duration-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className="hidden md:flex gap-8 text-slate-700 dark:text-slate-200 font-medium items-center">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="py-2 px-3 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="py-2 px-3 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition"
            >
              Skills
            </a>
            <a
              href="#certifications" 
              className="py-2 px-3 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition"
            >
              Certifications
            </a>

            <a
              href="#projects"
              className="py-2 px-3 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="py-2 px-3 rounded-xl hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/50 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col px-6 py-6 gap-3 text-slate-700 dark:text-slate-200 font-medium">
            <a href="#home" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              Skills
            </a>

            <a href="#certifications" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              Certifications
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-600 dark:hover:text-teal-400 transition">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

