"use client";

import { motion } from "framer-motion";
import React from "react";

export function Float({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
