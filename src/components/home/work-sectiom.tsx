// components/work-section/work-section.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface WorkItem {
  id: number;
  images: string[];
  title: string;
  description: string;
  category: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    images: [
      "/images/projects/link/link1.png",
      "/images/projects/link/link2.png",
      "/images/projects/link/link3.png",
    ],
    title: "Link The People",
    description:
      "Secure and user-friendly banking application with advanced financial tracking features.",
    category: "Mobile Design",
  },
  {
    id: 2,
    images: [
      "/images/projects/fukazee/fukazee1.png",
      "/images/projects/fukazee/fukazee2.png",
      "/images/projects/fukazee/fukazee3.png",
    ],
    title: "Fukazee",
    description:
      "Complete brand overhaul including logo, typography, and visual identity system.",
    category: "Brand Design",
  },
  {
    id: 3,
    images: [
      "/images/projects/letaji/let1.png",
      "/images/projects/letaji/let2.png",
      "/images/projects/letaji/let3.png",
    ],
    title: "Letaji",
    description:
      "A modern e-commerce solution with seamless user experience and intuitive product discovery.",
    category: "UI/UX Design",
  },
  {
    id: 4,
    images: [
      "/images/projects/mediapal/pal3.png",
      "/images/projects/mediapal/pal1.png",
      "/images/projects/mediapal/pal2.png",
    ],
    title: "Media Pal",
    description:
      "Responsive website with online ordering system and menu management.",
    category: "Web Design",
  },
];

export function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === workItems.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, nextSlide]);

  const currentWork = workItems[currentIndex];

  return (
    <section className="px-4 relative overflow-hidden w-full flex flex-col gap-6 h-fit">
      <p className="pt-6 pb-2 border-b border-gray-200 w-full text-2xl">Work</p>

      <div className="w-full ">
        {/* Work Carousel */}
        <div
          className="relative w-full mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Work Item */}
          <div className=" transition-all duration-500 ease-in-out">
            {/* Category Badge */}

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
              {currentWork.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden group h-full"
                >
                  <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300 h-full"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="w-full flex flex-col items-end justify-end text-right">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {currentWork.title}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {currentWork.description}
              </p>

              <Button variant="ghost" className="text-gray-600">
                See project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white border-gray-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white border-gray-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
