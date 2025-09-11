
import React from "react";
import GallerySlider from "../components/common/GallerySlider";


export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    "https://images.unsplash.com/photo-1524492449090-0b3be6ab1c8b",
    "https://images.unsplash.com/photo-1503437313881-503a91226419",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Gallery</h1>
      <GallerySlider images={images} />
    </div>
  );
}
