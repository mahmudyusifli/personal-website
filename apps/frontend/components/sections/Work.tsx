"use client";

const work = [
  "Load and stress testing for backend systems",
  "Performance analysis and bottleneck identification",
  "Designing services that fail predictably",
  "Refactoring systems that outgrew their initial assumptions",
];

export default function Work() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-24 pb-32">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Work
        </div>

        <div className="col-span-12 md:col-span-9">
          <ul className="space-y-6 text-base leading-relaxed max-w-2xl">
            {work.map((item, i) => (
              <li key={i}>— {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
