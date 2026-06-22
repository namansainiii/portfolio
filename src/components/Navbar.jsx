"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {" "}
        <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
          Namanpreet Kaur{" "}
        </h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700 text-3xl font-light transition-all duration-300"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="py-3 rounded-xl hover:text-teal-600 hover:bg-teal-50 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="py-3 rounded-xl hover:text-teal-600 hover:bg-teal-50 transition"
          >
            Skills
          </a>
          <a href="#certifications" 
             className="py-3 rounded-xl hover:text-teal-600 hover:bg-teal-50 transition">
            Certifications
          </a>

          <a
            href="#projects"
            className="py-3 rounded-xl hover:text-teal-600 hover:bg-teal-50 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="py-3 rounded-xl hover:text-teal-600 hover:bg-teal-50 transition"
          >
            Contact
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col px-6 py-6 gap-3 text-slate-700 font-medium">
            <a href="#home" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              Skills
            </a>

            <a href="#certifications" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              Certifications
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
