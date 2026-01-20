"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LoadLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div aria-hidden className="fixed right-6 top-0 h-screen w-[2px] z-40">
      {/* track */}
      <div className="absolute inset-0 bg-[var(--border)]" />

      {/* progress */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute inset-0 bg-[var(--accent)]"
      />
    </div>
  );
}
