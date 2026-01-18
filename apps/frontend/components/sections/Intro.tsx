"use client";

export default function Intro() {
  return (
    <section className="min-h-screen bg-white text-black px-12 md:px-32 py-32">
      <div className="space-y-24">
        <div className="text-sm uppercase tracking-wide">
          Software Engineering
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-normal leading-snug max-w-4xl">
            I work on software systems.
            <br />
            Mostly the parts that fail
            <br />
            under load, scale, or time.
          </h1>
        </div>

        <div className="text-sm max-w-xl leading-relaxed">
          This usually means performance problems, reliability issues, and the
          consequences of early design decisions.
        </div>
      </div>
    </section>
  );
}
