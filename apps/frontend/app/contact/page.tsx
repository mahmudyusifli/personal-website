"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      e.currentTarget.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full border p-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full border p-2"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          className="w-full border p-2"
        />

        <button type="submit" className="bg-black text-white px-4 py-2">
          Send
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
