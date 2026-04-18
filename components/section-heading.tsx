import { Badge } from "@/components/ui/badge";
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
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
    >
      {pill ? (
        <Badge className={cn("bg-primary/10 text-primary border-0", pillClassName)}>
          {pill}
        </Badge>
      ) : null}
      <h2 className="balanced">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl">{description}</p> : null}
    </div>
  );
}
