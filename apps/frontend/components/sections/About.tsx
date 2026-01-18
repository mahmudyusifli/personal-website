"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black px-12 md:px-32 pt-24 pb-32"
    >
      <div className="grid grid-cols-12 gap-12">
        {/* left anchor */}
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          About
        </div>

        {/* main content */}
        <div className="col-span-12 md:col-span-7 space-y-12">
          <p className="text-xl leading-relaxed max-w-3xl">
            I work close to the core of software systems, where performance,
            reliability, and long-term maintainability matter more than
            surface-level features.
          </p>

          <p className="text-sm leading-relaxed max-w-2xl">
            This often means operating in areas where assumptions break down:
            increased load, unexpected usage patterns, or systems that have
            grown beyond their original design.
          </p>
        </div>
      </div>
    </section>
  );
}
