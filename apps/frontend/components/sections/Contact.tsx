"use client";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-black grid grid-cols-[80px_1fr] px-6 md:px-16">
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-black" />
      </div>

      <div className="flex items-center">
        <div className="max-w-4xl space-y-12">
          <h2 className="text-5xl md:text-6xl font-medium">Contact</h2>

          <p className="text-xl max-w-xl">
            If reliability and scale actually matter, let’s talk.
          </p>

          <a href="mailto:youremail@example.com" className="text-lg underline">
            youremail@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
