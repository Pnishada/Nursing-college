import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageItem {
  url: string;
  title?: string;
  description?: string;
}

interface GallerySliderProps {
  images: ImageItem[];
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current].url}
          src={images[current].url}
          alt={images[current].title || `Slide ${current}`}
          className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsModalOpen(true)}
        />
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
        aria-label="Previous Slide"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
        aria-label="Next Slide"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.img
            src={images[current].url}
            alt={images[current].title || `Slide ${current}`}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
    </div>
  );
}
