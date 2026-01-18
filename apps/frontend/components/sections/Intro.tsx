"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-16 pb-24">
      <div className="grid grid-cols-12 gap-12">
        {/* LEFT — text */}
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

        {/* RIGHT — system lines */}
        <div className="col-span-12 md:col-span-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-48">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-px bg-black"
                style={{
                  left: `${i * 24}px`,
                  height: "160px",
                }}
                initial={{ y: 0, opacity: 0.3 }}
                animate={{ y: 200, opacity: 0.5 }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
