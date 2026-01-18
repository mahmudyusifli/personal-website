"use client";

export default function WhatIDo() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-28 pb-36">
      <div className="grid grid-cols-12 gap-12 relative">
        {/* left rule */}
        <div className="col-span-12 md:col-span-1 relative">
          <div className="absolute top-0 left-0 h-40 w-px bg-black/20" />
        </div>

        {/* label */}
        <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.18em] text-black/70">
          Focus
        </div>

        {/* main content */}
        <div className="col-span-12 md:col-span-6 space-y-16">
          <p className="text-xl leading-relaxed max-w-3xl">
            My work usually begins where systems start to bend — when
            assumptions meet real traffic and real constraints.
          </p>

          <p className="text-[15px] leading-[1.7] text-black/80 max-w-2xl">
            This can involve load testing, performance analysis, or revisiting
            architectural decisions that were once reasonable but no longer
            hold.
          </p>
        </div>

        {/* right detail */}
        <div className="col-span-12 md:col-span-3 text-[12px] leading-relaxed text-black/60">
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
