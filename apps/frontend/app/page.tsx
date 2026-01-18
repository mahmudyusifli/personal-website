import { getHealth } from "@/lib/api";

export default async function Home() {
  const health = await getHealth();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Personal Website</h1>
      <p className="mt-4">
        Backend status: <strong>{health.status}</strong>
      </p>
    </main>
  );
}
