import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  className?: string;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblings?: number;
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, totalPages, currentPage, onPageChange, siblings = 1 }, ref) => {
    const paginationRange = React.useMemo(() => {
      const range: (number | string)[] = [];
      const totalNumbers = siblings * 2 + 3;
      const totalBlocks = totalNumbers + 2;

      if (totalPages <= totalBlocks) {
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
        return range;
      }

      const leftSiblingIndex = Math.max(currentPage - siblings, 1);
      const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);

      const showLeftDots = leftSiblingIndex > 2;
      const showRightDots = rightSiblingIndex < totalPages - 1;

      if (!showLeftDots && showRightDots) {
        const leftRange = Array.from({ length: totalNumbers - 1 }, (_, i) => i + 1);
        return [...leftRange, "...", totalPages];
      }

      if (showLeftDots && !showRightDots) {
        const rightRange = Array.from({ length: totalNumbers - 1 }, (_, i) => totalPages - (totalNumbers - 2) + i);
        return [1, "...", ...rightRange];
      }

      if (showLeftDots && showRightDots) {
        const middleRange = Array.from({ length: totalNumbers - 2 }, (_, i) => leftSiblingIndex + i);
        return [1, "...", ...middleRange, "...", totalPages];
      }

      return range;
    }, [totalPages, currentPage, siblings]);

    return (
      <div ref={ref} className={cn("flex items-center justify-center space-x-1", className)}>
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-muted"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </button>

        {paginationRange.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="flex h-9 w-9 items-center justify-center text-sm font-medium">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </span>
            );
          }

          return (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(Number(page))}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                currentPage === Number(page)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-muted"
          )}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    );
  }
);
Pagination.displayName = "Pagination";

export { Pagination };