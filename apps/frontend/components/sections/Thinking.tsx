"use client";

const thoughts = [
  "Systems rarely fail all at once. They degrade.",
  "Performance issues are usually design issues in disguise.",
  "If something only works in ideal conditions, it doesn’t really work.",
];

export default function Thinking() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-24 pb-32">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          How I think
        </div>

        <div className="col-span-12 md:col-span-9 space-y-10 max-w-3xl">
          {thoughts.map((t, i) => (
            <p key={i} className="text-xl leading-relaxed">
              — {t}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
