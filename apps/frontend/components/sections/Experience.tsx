"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white text-black px-12 md:px-32 pt-24 pb-32"
    >
      <div className="grid grid-cols-12 gap-12">
        {/* left anchor */}
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Experience
        </div>

        {/* content */}
        <div className="col-span-12 md:col-span-7 space-y-16">
          <p className="text-base leading-relaxed max-w-3xl">
            Experience across different stages of software systems — from early
            development to systems operating under sustained real-world usage.
          </p>

          <p className="text-base leading-relaxed max-w-3xl">
            Exposure to backend services, performance analysis, load testing,
            and the operational side of running software in production.
          </p>

          <p className="text-base leading-relaxed max-w-3xl">
            Comfortable working in environments where trade-offs are unavoidable
            and decisions have long-term impact.
          </p>
        </div>
      </div>
    </section>
  );
}
