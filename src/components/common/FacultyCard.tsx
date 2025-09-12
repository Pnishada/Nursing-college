import React from "react";

interface FacultyCardProps {
  name: string;
  title: string;
  qualification: string;
  photo?: string;
}

export default function FacultyCard({ name, title, qualification, photo }: FacultyCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100">
      <div className="relative h-44">
        <img
          src={photo || "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-full object-cover group-hover:brightness-110 transition"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-blue-800">{name}</h3>
        <p className="text-gray-600 mt-1">{title}</p>
        <p className="text-gray-400 mt-1 text-sm">{qualification}</p>
      </div>
    </div>
  );
}
