import { Badge } from "@/components/ui/badge";

export function SectionHeader({
  kicker,
  title,
  description
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Badge variant="glow">{kicker}</Badge>
      <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-fg-muted">{description}</p>
    </div>
  );
}

