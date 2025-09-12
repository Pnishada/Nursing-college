import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  videoUrl?: string; // optional video
}

export default function Modal({ isOpen, onClose, title, description, images, videoUrl }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const prevImage = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-800"
          onClick={onClose}
        >
          ×
        </button>

        {/* Media Section */}
        <div className="relative mb-4">
          {videoUrl ? (
            <iframe
              className="w-full h-60 rounded-2xl"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                className="w-full h-60 object-cover rounded-2xl"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white"
                  >
                    ›
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
