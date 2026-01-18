"use client";

import { motion } from "framer-motion";

const work = [
  {
    role: "Senior Software Engineer",
    context: "High-traffic distributed systems",
    notes: [
      "Designed load testing strategies for peak traffic scenarios",
      "Improved system stability under sustained load",
      "Worked closely with SRE on incident response patterns",
    ],
  },
];

export default function Work() {
  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-4xl space-y-20">
        {work.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-medium text-neutral-900">
                {item.role}
              </h3>
              <p className="text-sm text-neutral-500">{item.context}</p>
            </div>

            <ul className="space-y-3 text-neutral-600">
              {item.notes.map((note, idx) => (
                <li key={idx} className="relative pl-4">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-neutral-400 rounded-full" />
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
