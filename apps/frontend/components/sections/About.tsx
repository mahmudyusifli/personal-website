"use client";

export default function About() {
  return (
    <section id="about" className="px-12 md:px-32 py-24">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-normal mb-8">About</h2>

        <div className="space-y-6 text-base leading-relaxed text-black/80">
          <p>
            I’m a software engineer with a background in Computer Science and a
            Master’s degree in Artificial Intelligence and Cybersecurity.
          </p>

          <p>
            My work focuses on building and maintaining software systems with an
            emphasis on correctness, performance, and long-term maintainability.
          </p>

          <p>
            I’m comfortable working across the stack and adapting to different
            problem domains and technologies as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
