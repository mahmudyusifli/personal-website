export async function getHealth() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Backend not healthy");
  }

  return res.json();
}
