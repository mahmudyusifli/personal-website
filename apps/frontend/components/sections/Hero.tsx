"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6">
      <div className="max-w-4xl w-full">
        {/* SYSTEM STATUS */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-widest text-green-400"
        >
          ● SYSTEM ONLINE
        </motion.p>

        {/* NAME / ROLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-5xl md:text-7xl font-bold leading-tight"
        >
          Mahmudyusifli
          <br />
          <span className="text-gray-400">
            Load Engineer
            <br />& Software Developer
          </span>
        </motion.h1>

        {/* BOOT LOG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm font-mono text-gray-400 space-y-1"
        >
          <p>[BOOT] Initializing services…</p>
          <p>[BOOT] Allocating resources…</p>
          <p>[BOOT] Monitoring enabled</p>
          <p className="text-green-400">[OK] System ready for load</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-medium"
          >
            View Services
          </a>

          <a href="#contact" className="px-6 py-3 border border-gray-600">
            Open Incident
          </a>
        </motion.div>
      </div>
    </section>
  );
}
