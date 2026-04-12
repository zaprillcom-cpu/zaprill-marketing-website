"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SpringButton({ 
  href, 
  children, 
  className 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17, 
        mass: 1 
      }}
      className="inline-block"
    >
      <Link href={href} className={cn("inline-flex items-center justify-center whitespace-nowrap outline-none", className)}>
        {children}
      </Link>
    </motion.div>
  );
}
