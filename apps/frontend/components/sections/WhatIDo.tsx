"use client";

export default function WhatIDo() {
  return (
    <section className="min-h-screen bg-black text-white grid grid-cols-[80px_1fr] px-6 md:px-16">
      {/* spine */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
      </div>

      <div className="flex items-center">
        <div className="max-w-4xl grid md:grid-cols-2 gap-20">
          <h2 className="text-4xl md:text-5xl font-medium">Focus</h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <p>Systems designed for real traffic, not demos.</p>
            <p>Software with explicit failure modes and operational clarity.</p>
            <p>
              Performance treated as a design constraint, not an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
