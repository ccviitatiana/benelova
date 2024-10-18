'use client';
import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const [activeIndex, setActiveIndex] = useState(0); // Active index state
  const carouselLength = 6; // Length of the carousel (6 items)
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<gsap.core.Tween | null>(null);

  // Function to update the carousel
  const updateCarousel = useCallback((direction: number) => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll('.carousel-item');
      gsap.to(items, {
        duration: 0.5,
        x: `${-100 * direction}%`,
        onComplete: () => {
          // Reset positions
          gsap.set(items, { x: '0%' });

          // Update active index based on direction
          setActiveIndex((prevIndex) => {
            const newIndex = (prevIndex + direction + carouselLength) % carouselLength;
            return newIndex;
          });

          // Rearrange the items
          if (direction > 0) {
            carouselRef.current?.appendChild(items[0]); // Move the first item to the end
          } else {
            carouselRef.current?.prepend(items[items.length - 1]); // Move the last item to the front
          }
        },
      });
    }
  }, [carouselLength]);

  // Handler for the next button
  const handleNext = useCallback(() => updateCarousel(1), [updateCarousel]);

  // GSAP interval for automatic sliding
  useEffect(() => {
    intervalRef.current = gsap.to({}, {
      duration: 3,
      repeat: -1,
      onRepeat: handleNext,
    });

    return () => {
      if (intervalRef.current) {
        intervalRef.current.kill();
      }
    };
  }, [handleNext]);

  return (
    <div className="flex justify-center items-center mt-20">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent ref={carouselRef} className="flex transition-transform duration-500">
          {Array.from({ length: carouselLength }).map((_, index) => (
            <CarouselItem
              key={index}
              className={`carousel-item md:basis-1/5 lg:basis-1/5 ${index === activeIndex ? 'active' : ''}`} // Apply "active" class to active item
            >
              <Card className="h-48 w-full">
                <CardContent className="relative h-full w-full">
                  <Image
                    src={`/carousel-${index + 1}.jpg`} 
                    alt={`carousel-${index + 1}`} 
                    fill
                    className="object-cover rounded-2xl" // Fill the card and maintain the aspect ratio
                    priority
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
