export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-neutral-900 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-400">
          Active Services
        </h2>

        <div className="mt-12 space-y-6 font-mono">
          <Service
            name="Food Delivery Platform"
            stack=".NET, Angular, PostgreSQL"
            load="High"
            status="Stable"
          />
          <Service
            name="Portfolio Platform"
            stack="Next.js, ASP.NET Core"
            load="Moderate"
            status="Stable"
          />
          <Service
            name="Internal Load Simulator"
            stack=".NET, k6, Grafana"
            load="Extreme"
            status="Throttled"
            warning
          />
        </div>
      </div>
    </section>
  );
}

function Service({
  name,
  stack,
  load,
  status,
  warning,
}: {
  name: string;
  stack: string;
  load: string;
  status: string;
  warning?: boolean;
}) {
  return (
    <div className="border border-gray-800 p-6 relative">
      {warning && (
        <span className="absolute top-4 right-4 text-xs text-yellow-400">
          ⚠ Load Spike
        </span>
      )}

      <p className="text-lg">{name}</p>

      <div className="mt-4 text-sm text-gray-400">
        <p>Stack: {stack}</p>
        <p>Load: {load}</p>
        <p>
          Status:{" "}
          <span
            className={
              status === "Stable" ? "text-green-400" : "text-yellow-400"
            }
          >
            {status}
          </span>
        </p>
      </div>
    </div>
  );
}
