"use client";
import React, { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const illustrations = [
    {
      src: "/images/illustrations/ToriiGate.jpg",
      alt: "Torii Gate",
      className: "",
    },
    {
      src: "/images/illustrations/Nobara.jpg",
      alt: "Nobara",
      className: "",
    },
    {
      src: "/images/illustrations/CookieandCreatures.jpg",
      alt: "Cookie and Creatures",
      className: "",
    },
    {
      src: "/images/illustrations/SettingSun.jpg",
      alt: "Setting Sun",
      className: "",
    },
    {
      src: "/images/illustrations/Luca.jpg",
      alt: "Luca",
      className: "",
    },
    {
      src: "/images/illustrations/Skeleton.jpg",
      alt: "Skeleton",
      className: "",
    },
    {
      src: "/images/illustrations/SpiritedAway.jpg",
      alt: "Spirited Away",
      className: "",
    },
  ];

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-8 lg:p-12 relative">
      {/* Container with improved responsive margins and max-width */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        {illustrations.map((illustration) => (
          <div
            key={illustration.src}
            className="relative group mb-2 sm:mb-4 md:mb-6 lg:mb-8 break-inside-avoid"
            onClick={() => setSelectedImage(illustration.src)}
          >
            {/* Image wrapper with enhanced hover effects */}
            <div className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                priority={illustration.src.includes("ToriiGate")}
              />
              {/* Enhanced hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal with better mobile handling */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected illustration"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl object-contain max-h-[95vh] sm:max-h-[90vh]"
              priority
            />
            {/* Enhanced close button with better mobile tap target */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
