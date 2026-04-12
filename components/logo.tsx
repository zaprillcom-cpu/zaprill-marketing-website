import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2 text-[22px] font-bold", className)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-primary"
      >
        <path d="M13.8 2.5 5.6 13.2a1 1 0 0 0 .8 1.6h4l-1.2 6.7a1 1 0 0 0 1.8.7l8.2-10.7a1 1 0 0 0-.8-1.6h-4l1.2-6.7a1 1 0 0 0-1.8-.7Z" />
      </svg>
      <span className="text-text-primary">Zaprill</span>
    </Link>
  );
}
