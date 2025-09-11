import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export default function EventCard({ title, date, description, image }: EventCardProps) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
