"use client";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-3xl mx-auto py-24">
      <h2 className="text-2xl font-normal mb-8">About</h2>

      <div className="space-y-6 text-base leading-relaxed text-black/80">
        <p>
          I work on software systems with a focus on reliability, performance,
          and long-term maintainability.
        </p>

        <p>
          My work often involves understanding how systems behave under
          real-world conditions, where assumptions are tested and design
          decisions start to matter.
        </p>

        <p>
          I’m particularly interested in the parts of systems that are hardest
          to reason about: load, failure, and gradual degradation over time.
        </p>
      </div>
    </section>
  );
}
