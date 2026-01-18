"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white text-black px-12 md:px-32 pt-24 pb-40"
    >
      <div className="grid grid-cols-12 gap-12">
        {/* left anchor */}
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Contact
        </div>

        {/* content */}
        <div className="col-span-12 md:col-span-7 space-y-8">
          <p className="text-xl leading-relaxed max-w-2xl">
            If you’re working on software systems where reliability and scale
            are important, feel free to reach out.
          </p>

          <p className="text-sm leading-relaxed">
            Contact details can be shared on request.
          </p>
        </div>
      </div>
    </section>
  );
}
