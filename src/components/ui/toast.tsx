"use client";

import * as React from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, children, variant = "info", ...props }, ref) => {
    const variantStyles = {
      success: "border-green-500 bg-green-50 text-green-800",
      error: "border-red-500 bg-red-50 text-red-800",
      warning: "border-yellow-500 bg-yellow-50 text-yellow-800",
      info: "border-blue-500 bg-blue-50 text-blue-800",
    };

    const getIcon = () => {
      switch (variant) {
        case "success":
          return <CheckCircle className="h-4 w-4" />;
        case "error":
          return <AlertCircle className="h-4 w-4" />;
        case "warning":
          return <AlertTriangle className="h-4 w-4" />;
        case "info":
          return <Info className="h-4 w-4" />;
        default:
          return <Info className="h-4 w-4" />;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "fixed left-1/2 transform -translate-x-1/2 top-4 z-50 flex w-full max-w-sm items-center gap-3 rounded-lg border p-4 text-sm shadow-lg transition-all",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {getIcon()}
        <div className="flex-1">{children}</div>
        <button className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    );
  }
);
Toast.displayName = "Toast";

const ToastAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md border bg-background px-3 py-1.5 text-sm font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
ToastAction.displayName = "ToastAction";

const ToastTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-semibold", className)}
      {...props}
    />
  )
);
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
);
ToastDescription.displayName = "ToastDescription";

export {
  Toast,
  ToastAction,
  ToastTitle,
  ToastDescription,
};