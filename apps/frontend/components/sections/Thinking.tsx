"use client";

const thoughts = [
  "Predictability matters more than raw speed.",
  "If you don’t design failure, it designs itself.",
  "Simple systems survive longer.",
];

export default function Thinking() {
  return (
    <section className="min-h-screen bg-black text-white grid grid-cols-[80px_1fr] px-6 md:px-16">
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
      </div>

      <div className="flex items-center">
        <div className="max-w-4xl space-y-16">
          <h2 className="text-4xl md:text-5xl font-medium">Principles</h2>

          <div className="space-y-8 text-xl">
            {thoughts.map((t, i) => (
              <p key={i}>— {t}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
