"use client";

const experience = [
  {
    period: "Recent",
    text: "Working on production systems with sustained traffic, focusing on reliability, performance, and operational clarity.",
  },
  {
    period: "Before",
    text: "Building backend services, shipping features, and handling the realities of production failures.",
  },
  {
    period: "Earlier",
    text: "Full-stack development and developing intuition for long-term system trade-offs.",
  },
];

export default function Experience() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-28 pb-36">
      <div className="grid grid-cols-12 gap-12">
        {/* left rule */}
        <div className="col-span-12 md:col-span-1 relative">
          <div className="absolute top-0 left-0 h-full w-px bg-black/15" />
        </div>

        {/* label */}
        <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.18em] text-black/70">
          Experience
        </div>

        {/* timeline */}
        <div className="col-span-12 md:col-span-9 space-y-20">
          {experience.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3 text-[13px] text-black/60">
                {item.period}
              </div>

              <div className="col-span-12 md:col-span-9 text-[15px] leading-[1.7] text-black/80 max-w-3xl">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
