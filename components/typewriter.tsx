"use client";

import { motion } from "framer-motion";

export function Typewriter({ 
  text, 
  delay = 0, 
  className 
}: { 
  text: string; 
  delay?: number; 
  className?: string 
}) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.04,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
