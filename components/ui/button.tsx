"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 border border-transparent shadow-sm",
        secondary:
          "border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5",
        ghost:
          "border border-transparent bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white",
        success:
          "bg-emerald-500 text-white hover:bg-emerald-400 border border-transparent shadow-sm",
        inverted:
          "border border-slate-900 bg-white text-slate-900 hover:bg-slate-50"
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-3.5 text-base",
        full: "w-full px-6 py-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
}

export { buttonVariants };
