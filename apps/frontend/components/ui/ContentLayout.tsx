export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      {/* super subtle noise layer (optional, but gives “not flat” feeling) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-noise" />

      <div className="relative">{children}</div>

      {/* footer spacer (keeps last section from hugging viewport bottom) */}
      <div aria-hidden className="h-24" />
    </main>
  );
}
