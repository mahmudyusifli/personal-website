"use client";

export default function Work() {
  return (
    <section
      id="work"
      className="bg-white text-black px-12 md:px-32 pt-24 pb-32"
    >
      <div className="grid grid-cols-12 gap-12">
        {/* left anchor */}
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Work
        </div>

        {/* content */}
        <div className="col-span-12 md:col-span-7">
          <ul className="space-y-8 text-base leading-relaxed max-w-2xl">
            <li>— Load and stress testing of backend systems</li>
            <li>— Performance analysis and bottleneck investigation</li>
            <li>— Designing systems with predictable failure behavior</li>
            <li>— Refactoring and simplifying overgrown architectures</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
