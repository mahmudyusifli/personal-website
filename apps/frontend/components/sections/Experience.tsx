"use client";

const experience = [
  {
    years: "2022 — Now",
    detail:
      "Designing and operating systems under sustained load, owning reliability and performance outcomes.",
  },
  {
    years: "2019 — 2022",
    detail:
      "Building backend services, scaling infrastructure, and responding to production failures.",
  },
  {
    years: "Earlier",
    detail:
      "Full-stack development and learning how abstractions break at scale.",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-white text-black grid grid-cols-[80px_1fr] px-6 md:px-16">
      {/* spine */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-black" />
      </div>

      <div className="flex items-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-medium mb-24">Experience</h2>

          <div className="space-y-20">
            {experience.map((e, i) => (
              <div key={i} className="grid md:grid-cols-[160px_1fr] gap-10">
                <span className="text-sm">{e.years}</span>
                <p className="text-lg leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
