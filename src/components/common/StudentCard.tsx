import React, { useState } from "react";
import Modal from "../model/StudentLifeModel";


interface CardProps {
  title: string;
  description: string;
  icon: string;
  images: string[];
  videoUrl?: string; 
}

export default function Card({ title, description, icon, images, videoUrl }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative bg-white rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div className="relative p-8 flex flex-col items-center text-center space-y-4">
          <div className="text-5xl">{icon}</div>
          <h2 className="text-2xl font-bold text-blue-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
          {videoUrl && <p className="text-blue-500 text-sm mt-1">🎥 Video Available</p>}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        images={images}
        videoUrl={videoUrl}
      />
    </>
  );
}
