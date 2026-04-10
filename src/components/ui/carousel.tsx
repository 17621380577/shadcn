import * as React from "react";
import { cn } from "@/lib/utils";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  direction?: 'horizontal' | 'vertical';
  infinite?: boolean;
  customIndicators?: boolean;
  itemsToShow?: number;
}

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      className,
      autoplay = false,
      interval = 3000,
      showIndicators = true,
      showControls = true,
      direction = 'horizontal',
      infinite = false,
      customIndicators = false,
      itemsToShow = 1,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const items = React.Children.toArray(children);
    const totalItems = items.length;

    React.useEffect(() => {
      if (!autoplay) return;

      const timer = setInterval(() => {
        if (infinite) {
          setCurrentIndex((prev) => (prev + 1) % totalItems);
        } else {
          setCurrentIndex((prev) => Math.min(prev + 1, totalItems - itemsToShow));
        }
      }, interval);

      return () => clearInterval(timer);
    }, [autoplay, interval, totalItems, infinite, itemsToShow]);

    const next = () => {
      if (infinite) {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, totalItems - itemsToShow));
      }
    };

    const prev = () => {
      if (infinite) {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    // 为无缝轮播准备重复的项目
    const infiniteItems = infinite ? [...items, ...items.slice(0, itemsToShow)] : items;
    const scrollWidth = 100 / itemsToShow;

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden h-full", className)}
        {...props}
      >
        <div
          className={cn(
            "transition-transform duration-500 ease-in-out h-full",
            direction === 'horizontal' ? "flex" : "flex flex-col"
          )}
          style={
            direction === 'horizontal'
              ? { transform: `translateX(-${currentIndex * scrollWidth}%)` }
              : { transform: `translateY(-${currentIndex * 100}%)` }
          }
        >
          {infiniteItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "flex-shrink-0",
                direction === 'horizontal' ? `w-[${scrollWidth}%]` : "h-full"
              )}
              style={direction === 'horizontal' ? { width: `${scrollWidth}%` } : {}}
            >
              {item}
            </div>
          ))}
        </div>

        {showControls && (
          <>
            {direction === 'horizontal' ? (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-black z-10"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-black z-10"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={prev}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-black z-10"
                  aria-label="Previous slide"
                >
                  ↑
                </button>
                <button
                  onClick={next}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-black z-10"
                  aria-label="Next slide"
                >
                  ↓
                </button>
              </>
            )}
          </>
        )}

        {showIndicators && (
          <div className={cn(
            "absolute left-0 right-0 flex justify-center gap-2 z-10",
            direction === 'horizontal' ? "bottom-4" : "right-4 top-1/2 transform -translate-y-1/2 flex-col"
          )}>
            {Array.from({ length: infinite ? totalItems : totalItems - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-colors",
                  direction === 'horizontal' 
                    ? "w-2.5 h-2.5 rounded-full"
                    : "w-2.5 h-2.5 rounded-full",
                  currentIndex === index ? "bg-white" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full h-full", className)} {...props}>
      {children}
    </div>
  )
);
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselItem };
