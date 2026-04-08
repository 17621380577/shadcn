import * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyProps {
  className?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, icon, title, description, action }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8",
          className
        )}
      >
        {icon && <div className="mb-4">{icon}</div>}
        {title && (
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-muted-foreground mb-6">{description}</p>
        )}
        {action && action}
      </div>
    );
  }
);
Empty.displayName = "Empty";

export { Empty };