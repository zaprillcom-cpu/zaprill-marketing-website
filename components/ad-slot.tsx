"use client";

import { useEffect } from "react";

import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSlotProps = {
  slot: string;
  label?: string;
  className?: string;
};

export function AdSlot({ slot, label = "Sponsored", className }: AdSlotProps) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!adsenseClient) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore duplicate ad render attempts during development.
    }
  }, [adsenseClient, slot]);

  if (!adsenseClient) {
    return (
      <div className={cn("rounded-xl border border-dashed border-border bg-surface p-6 text-center", className)}>
        <p className="label mb-2">{label}</p>
        <p className="text-sm text-text-secondary">
          Responsive AdSense slot placeholder. Set{" "}
          <code>NEXT_PUBLIC_ADSENSE_CLIENT</code> and the production slot IDs to
          enable ads.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
