"use client";
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    (<CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>)
  );
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    (<div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props} />
    </div>)
  );
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    (<div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props} />)
  );
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute  h-8 w-8 bg-transparent rounded-full text-sm xl:text-base font-medium hover:bg-transparent", orientation === "horizontal"
        ? "-left-12 top-1/2 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
        <span className="mx-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.41406 8.34263L7.36406 12.2926C7.54171 12.4821 7.63869 12.7332 7.63448 12.9929C7.63026 13.2526 7.52518 13.5004 7.34146 13.684C7.15775 13.8676 6.90982 13.9725 6.65014 13.9765C6.39045 13.9806 6.13938 13.8834 5.95006 13.7056L0.293058 8.04963C0.199873 7.95697 0.125924 7.84681 0.0754624 7.72548C0.0250011 7.60415 -0.000976563 7.47404 -0.000976562 7.34263C-0.000976562 7.21122 0.0250011 7.08111 0.0754624 6.95977C0.125924 6.83844 0.199873 6.72828 0.293058 6.63563L5.95006 0.978628C6.0423 0.883118 6.15265 0.806936 6.27465 0.754527C6.39666 0.702118 6.52788 0.674531 6.66066 0.673378C6.79344 0.672224 6.92512 0.697525 7.04801 0.747806C7.17091 0.798087 7.28256 0.87234 7.37645 0.966233C7.47035 1.06013 7.5446 1.17178 7.59488 1.29467C7.64516 1.41757 7.67046 1.54925 7.66931 1.68203C7.66815 1.81481 7.64057 1.94603 7.58816 2.06803C7.53575 2.19004 7.45957 2.30038 7.36406 2.39263L3.41406 6.34263H13.0001C13.2653 6.34263 13.5196 6.44798 13.7072 6.63552C13.8947 6.82306 14.0001 7.07741 14.0001 7.34263C14.0001 7.60784 13.8947 7.8622 13.7072 8.04973C13.5196 8.23727 13.2653 8.34263 13.0001 8.34263H3.41406Z" fill="#0F172A"/>
          </svg>
        </span>
        Prev
      <span className="sr-only">Previous slide</span>
    </Button>)
  );
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute h-8 w-8 bg-transparent rounded-full text-sm xl:text-base font-medium hover:bg-transparent", orientation === "horizontal"
        ? "-right-12 top-1/2 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
        
      Next
      <span className="mx-1">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7.68555H13.5H1ZM13.5 7.68555L7.5 1.68555L13.5 7.68555ZM13.5 7.68555L7.5 13.6855L13.5 7.68555Z" fill="#0F172A"/>
            <path d="M13.5 7.68555L7.5 13.6855M1 7.68555H13.5H1ZM13.5 7.68555L7.5 1.68555L13.5 7.68555Z" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </span>
      <span className="sr-only">Next slide</span>
    </Button>)
  );
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
