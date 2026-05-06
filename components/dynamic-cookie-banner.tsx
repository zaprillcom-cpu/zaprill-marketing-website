"use client";

import dynamic from "next/dynamic";

export const DynamicCookieBanner = dynamic(
  () => import("./cookie-banner").then((mod) => mod.CookieBanner),
  { ssr: false }
);
