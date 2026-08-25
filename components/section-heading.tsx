import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  pill?: string;
  pillClassName?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  pill,
  pillClassName,
  title,
  description,
  className,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      {pill ? (
        <div className={cn("eyebrow", pillClassName)}>
          {pill}
        </div>
      ) : null}
      <h2>{title}</h2>
      {description ? (
        <p className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
