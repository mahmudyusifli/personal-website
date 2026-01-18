"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

export default function Intro() {
  const [open, setOpen] = useState(false);

  function handleNavigate(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative bg-white text-black px-12 md:px-32 pt-16 pb-24">
      {/* MENU BUTTON — ALWAYS ON TOP */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        className="fixed top-16 right-12 md:right-32 z-[60] w-8 h-6"
      >
        {/* TOP */}
        <span
          className={`absolute left-0 w-full h-[2px] bg-black transition-transform duration-150 ${
            open ? "top-1/2 rotate-45" : "top-0"
          }`}
        />
        {/* MIDDLE */}
        <span
          className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-opacity duration-150 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* BOTTOM */}
        <span
          className={`absolute left-0 w-full h-[2px] bg-black transition-transform duration-150 ${
            open ? "top-1/2 -rotate-45" : "bottom-0"
          }`}
        />
      </button>

      {/* INTRO CONTENT */}
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-7 space-y-12">
          <div className="text-sm uppercase tracking-wide">
            Software Engineering
          </div>

          <h1 className="text-4xl md:text-6xl font-normal leading-snug max-w-4xl">
            I work on software systems.
            <br />
            Mostly the parts that fail
            <br />
            under load, scale, or time.
          </h1>

          <p className="text-sm max-w-xl leading-relaxed">
            This usually means performance problems, reliability issues, and the
            consequences of early design decisions.
          </p>
        </div>
      </div>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
          >
            <div className="px-12 md:px-32 pt-32">
              <nav className="space-y-12">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavigate(s.id)}
                    className="block text-4xl md:text-6xl font-normal tracking-tight hover:opacity-60 transition-opacity duration-150"
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
