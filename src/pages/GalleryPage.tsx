import React, { useState } from "react";
import GallerySlider from "../components/common/GallerySlider";

export default function GalleryPage() {
  const images = [
  { 
    url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    title: "Workshop Moment",
    description: "Capturing our interactive workshops."
  },
  { 
    url: "https://images.unsplash.com/photo-1524492449090-0b3be6ab1c8b?auto=format&fit=crop&w=800&q=80",
    title: "Campus Life",
    description: "Students enjoying campus activities."
  },
  { 
    url: "https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=800&q=80",
    title: "Career Fair",
    description: "Networking with top recruiters."
  },
  { 
    url: "https://images.unsplash.com/photo-1581092160621-6f2f8a7ff8e2?auto=format&fit=crop&w=800&q=80",
    title: "Health Seminar",
    description: "Learning about wellness and mental health."
  },
];


  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Gallery</h1>
        <p className="text-gray-500 text-lg">
          Explore moments from our workshops, events, and campus life.
        </p>
      </div>

      <GallerySlider images={images} />

      {/* Thumbnails with Hover Captions */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-full h-40 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform ${
              idx === currentSlide ? "scale-105 border-4 border-blue-600" : "hover:scale-105"
            }`}
            onClick={() => setCurrentSlide(idx)}
          >
            <img
              src={img.url}
              alt={img.title || `Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex flex-col justify-end p-3 backdrop-blur-sm">
              <h3 className="text-white font-semibold text-sm">{img.title}</h3>
              <p className="text-white text-xs line-clamp-2">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
