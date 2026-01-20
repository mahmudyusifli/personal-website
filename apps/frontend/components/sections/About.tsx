"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative"
      style={{
        paddingLeft: "var(--container-x)",
        paddingRight: "var(--container-x)",
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
      }}
    >
      <div className="hr-subtle absolute inset-x-0 top-0" />

      <div className="grid grid-cols-12 gap-10 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            About
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="max-w-2xl pl-6 border-l border-[var(--border)] space-y-6 text-base leading-relaxed text-[var(--muted)]">
            <p>
              I’m a software engineer with a background in Computer Science and
              a Master’s degree in Artificial Intelligence and Cybersecurity.
            </p>

            <p>
              My work focuses on building and maintaining software systems with
              an emphasis on correctness, performance, and long-term
              maintainability.
            </p>

            <p>
              I’m comfortable working across the stack and adapting to different
              problem domains and technologies as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
