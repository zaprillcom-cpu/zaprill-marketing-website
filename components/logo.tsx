import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-[22px] font-bold",
        className,
      )}
    >
      <Image alt="Zaprill" src={"/logo.png"} width={100} height={100} className="h-8 w-auto md:h-9" loading="eager" />
    </Link>
  );
}
