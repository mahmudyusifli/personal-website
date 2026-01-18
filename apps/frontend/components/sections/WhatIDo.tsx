"use client";

export default function WhatIDo() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-24 pb-32">
      <div className="grid grid-cols-12 gap-12">
        {/* left anchor */}
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Focus
        </div>

        {/* main content */}
        <div className="col-span-12 md:col-span-7 space-y-12">
          <p className="text-xl leading-relaxed max-w-3xl">
            My work usually sits where systems start to bend: traffic spikes,
            slow degradation, unclear failure modes.
          </p>

          <p className="text-base leading-relaxed max-w-2xl">
            That can mean load testing, performance work, or revisiting
            architectural decisions that made sense early on but don’t hold
            anymore.
          </p>
        </div>

        {/* right pressure */}
        <div className="col-span-12 md:col-span-2 text-sm leading-relaxed">
          Scalability
          <br />
          Reliability
          <br />
          Performance
        </div>
      </div>
    </section>
  );
}
