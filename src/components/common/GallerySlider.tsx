import React, { useState } from "react";

interface GallerySliderProps {
  images: string[];
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 bg-white/70 rounded-full px-2 py-1 shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 bg-white/70 rounded-full px-2 py-1 shadow"
      >
        ▶
      </button>
    </div>
  );
}
