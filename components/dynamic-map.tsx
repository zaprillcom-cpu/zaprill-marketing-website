"use client";

import dynamic from "next/dynamic";

export const DynamicMap = dynamic(
  () => import("./ui/map").then((mod) => mod.Map),
  { ssr: false }
);
