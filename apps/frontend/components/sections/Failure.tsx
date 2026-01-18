export default function Failure() {
  return (
    <section className="min-h-screen bg-black text-red-500 flex items-center px-6">
      <div className="max-w-4xl font-mono text-sm space-y-2">
        <p>[WARN] Latency threshold exceeded</p>
        <p>[WARN] Dependency response degraded</p>
        <p>[ERROR] Service timeout detected</p>
        <p>[ACTION] Mitigation in progress</p>
        <p className="text-green-400">[RECOVERY] System stabilized</p>
      </div>
    </section>
  );
}
