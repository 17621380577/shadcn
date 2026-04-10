import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-block animate-spin",
          !icon && "rounded-full border-2 border-t-transparent",
          size === "sm" && "h-4 w-4",
          size === "md" && "h-8 w-8",
          size === "lg" && "h-12 w-12",
          className
        )}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...props.style
        }}
        {...props}
      >
        {icon}
      </div>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
