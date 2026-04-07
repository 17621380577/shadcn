import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
  }
>(({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-black text-white hover:bg-gray-800": variant === "default",
          "bg-red-600 text-white hover:bg-red-700": variant === "destructive",
          "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900": variant === "outline",
          "bg-gray-100 text-gray-900 hover:bg-gray-200": variant === "secondary",
          "hover:bg-gray-100 text-gray-900": variant === "ghost",
          "text-blue-600 underline-offset-4 hover:underline": variant === "link",
        },
        {
          "h-9 px-4 py-2": size === "sm",
          "h-10 px-4 py-2": size === "md",
          "h-11 px-8 py-2": size === "lg",
          "h-10 w-10": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
