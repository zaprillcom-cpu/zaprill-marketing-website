"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  prefix = "",
  suffix = "",
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span className={className} ref={ref}>
      {prefix}{Intl.NumberFormat("en-IN").format(displayValue)}{suffix}
    </span>
  );
}
