import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/60 bg-bg-elevated/25 px-2.5 py-1 text-xs font-semibold text-fg-muted backdrop-blur-xl",
  {
    variants: {
      variant: {
        default: "",
        glow: "text-fg border-border/60 shadow-[0_0_0.75rem_hsl(var(--glow)/0.22)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

