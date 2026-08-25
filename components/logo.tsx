import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center",
        className,
      )}
      aria-label="Zaprill home"
    >
      <Image
        alt="Zaprill"
        src="/logo.png"
        width={100}
        height={32}
        className="brand-wordmark h-[27px] w-auto"
        priority
      />
    </Link>
  );
}
