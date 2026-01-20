"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative"
      style={{
        paddingLeft: "var(--container-x)",
        paddingRight: "var(--container-x)",
        paddingTop: "var(--section-y)",
        paddingBottom: "calc(var(--section-y) + 2rem)",
      }}
    >
      <div className="hr-subtle absolute inset-x-0 top-0" />

      <div className="grid grid-cols-12 gap-10 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
            Contact
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="max-w-2xl pl-6 border-l border-[var(--border)] space-y-6">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              If you’d like to get in touch about software development, systems
              work, or collaboration opportunities, feel free to reach out by
              email.
            </p>

            {/* a minimal “action” without looking like a button kit */}
            <a
              href="mailto:yusiflicode@gmail.com"
              className="inline-flex items-center gap-3 text-base text-[var(--fg)] hover:opacity-75 transition-opacity"
            >
              <span className="font-mono">yusiflicode@gmail.com</span>
              <span className="h-px w-10 bg-[var(--border-strong)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
