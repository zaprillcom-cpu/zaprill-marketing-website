"use client";

import { useEffect, useRef } from "react";

export function LazyAd({ slot }: { slot?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[280px] w-full flex justify-center items-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4010004205574660"
        data-ad-slot={slot || "auto"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
