import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showLabel?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, showLabel = false, ...props }, ref) => {
  const progressValue = value || 0;
  
  return (
    <div className={cn("w-full", className)} {...props}>
      <ProgressPrimitive.Root
        ref={ref}
        className="relative h-full w-full overflow-hidden rounded-full bg-gray-200"
        value={progressValue}
      >
        <ProgressPrimitive.Indicator
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progressValue}%` }}
        />
      </ProgressPrimitive.Root>
      {showLabel && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {progressValue}%
        </div>
      )}
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };