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
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <section className="relative">
      {/* Top boundary line */}
      <div className="hr-subtle" />

      <div
        className="relative"
        style={{
          paddingLeft: "var(--container-x)",
          paddingRight: "var(--container-x)",
          paddingTop: "clamp(3.5rem, 5vw, 5rem)",
          paddingBottom: "clamp(4rem, 6vw, 6rem)",
        }}
      >
        {/* MENU BUTTON — ALWAYS ON TOP */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="fixed z-[60] w-8 h-6"
          style={{
            top: "clamp(2.5rem, 4vw, 4rem)",
            right: "var(--container-x)",
          }}
        >
          {/* TOP */}
          <span
            className={`absolute left-0 w-full h-[2px] bg-[var(--fg)] transition-transform duration-150 ${
              open ? "top-1/2 rotate-45" : "top-0"
            }`}
          />
          {/* MIDDLE */}
          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-[var(--fg)] transition-opacity duration-150 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* BOTTOM */}
          <span
            className={`absolute left-0 w-full h-[2px] bg-[var(--fg)] transition-transform duration-150 ${
              open ? "top-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </button>

        {/* HERO */}
        <div className="grid grid-cols-12 gap-10 md:gap-12">
          <div className="col-span-12 md:col-span-8 space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Software Engineering
              </span>
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <h1 className="text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.15] font-normal tracking-[-0.02em]">
              I work on software systems.
              <br />
              Mostly the parts that fail
              <br />
              under load, scale, or time.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Performance problems, reliability issues, and the consequences of
              early design decisions — with a bias toward clarity and long-term
              maintainability.
            </p>

            {/* subtle metadata row (adds depth without being “designed”) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
              <span className="font-mono">systems</span>
              <span className="font-mono">performance</span>
              <span className="font-mono">reliability</span>
              <span className="font-mono">security</span>
            </div>
          </div>
        </div>
      </div>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
          >
            {/* overlay surface */}
            <div className="absolute inset-0 bg-[var(--bg)]" />

            {/* subtle top border + depth */}
            <div className="absolute inset-x-0 top-0 h-px bg-[var(--border)]" />

            <div
              className="relative"
              style={{
                paddingLeft: "var(--container-x)",
                paddingRight: "var(--container-x)",
                paddingTop: "clamp(6rem, 10vw, 8.5rem)",
              }}
            >
              <nav className="space-y-10">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavigate(s.id)}
                    className="group block text-[clamp(1.7rem,3.4vw,3.2rem)] font-normal tracking-tight transition-opacity duration-150 hover:opacity-70"
                  >
                    <span className="inline-flex items-center gap-4">
                      <span className="h-px w-10 bg-[var(--border-strong)] group-hover:bg-[var(--accent)] transition-colors" />
                      {s.label}
                    </span>
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
