export default function About() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white flex items-center px-6">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-widest text-gray-400">
          System Metrics
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <Metric label="Status" value="Stable" accent="text-green-400" />
          <Metric label="Uptime" value="99.98%" />
          <Metric label="Primary Role" value="Load Engineer / Software Dev" />
          <Metric label="Focus" value="Performance & Reliability" />
          <Metric label="Backend" value=".NET, Distributed Systems" />
          <Metric label="Frontend" value="Next.js, React, Tailwind" />
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="border border-gray-800 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`mt-2 text-lg ${accent ?? ""}`}>{value}</p>
    </div>
  );
}
