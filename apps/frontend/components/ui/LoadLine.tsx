"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LoadLine() {
  const { scrollYProgress } = useScroll();

  const height = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    ["#22c55e", "#eab308", "#ef4444", "#ffffff"],
  );

  return (
    <div className="fixed left-6 top-0 h-screen w-1 z-50">
      <motion.div
        style={{ height, backgroundColor: color }}
        className="w-full origin-top rounded-full"
      />
    </div>
  );
}
