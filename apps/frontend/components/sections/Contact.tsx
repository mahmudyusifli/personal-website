"use client";

export default function Contact() {
  return (
    <section className="bg-white text-black px-12 md:px-32 pt-24 pb-40">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-3 text-sm uppercase tracking-wide">
          Contact
        </div>

        <div className="col-span-12 md:col-span-9 space-y-8">
          <p className="text-xl max-w-2xl leading-relaxed">
            If you’re dealing with scale, reliability, or systems that are
            starting to strain, feel free to reach out.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="text-base underline"
          >
            youremail@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
