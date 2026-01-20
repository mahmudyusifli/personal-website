"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative"
      style={{
        paddingLeft: "var(--container-x)",
        paddingRight: "var(--container-x)",
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
      }}
    >
      <div className="hr-subtle absolute inset-x-0 top-0" />

      <div className="grid grid-cols-12 gap-10 md:gap-12">
        <div className="col-span-12 md:col-span-4 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Skills & Experience
          </h2>

          {/* subtle “index” adds structure without cards */}
          <div className="space-y-2 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--border)]" />
              Backend / APIs
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--border)]" />
              Frontend systems
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--border)]" />
              Data + runtime behavior
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="max-w-2xl pl-6 border-l border-[var(--border)] space-y-6 text-base leading-relaxed text-[var(--muted)]">
            <p>
              Experience building software using modern web and backend
              technologies, working across frontend, backend, and data-focused
              systems.
            </p>

            <p>
              Comfortable designing APIs, integrating services, and working with
              databases, as well as analyzing and improving system behavior
              under real-world conditions.
            </p>

            <p>
              Strong foundation in computer science concepts, combined with
              practical experience applying them to production software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
