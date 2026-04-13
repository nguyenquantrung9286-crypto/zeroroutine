"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "circOut" }}
        className="h-px w-full bg-outline-variant/30 origin-center"
      />
    </div>
  );
}
