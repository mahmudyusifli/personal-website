"use client";

const experience = [
  {
    period: "Recent years",
    text: "Working on production systems with real traffic, where reliability and performance are non-negotiable.",
  },
  {
    period: "Before that",
    text: "Building backend services, shipping features, and learning how systems actually fail in production.",
  },
  {
    period: "Early work",
    text: "Full-stack development and forming a strong intuition for trade-offs and long-term maintenance.",
  },
];

export default function Experience() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-24 pb-32">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Experience
        </div>

        <div className="col-span-12 md:col-span-9 space-y-16">
          {experience.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3 text-sm">
                {item.period}
              </div>

              <div className="col-span-12 md:col-span-9 text-base leading-relaxed max-w-3xl">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
