import React from "react";

interface FacultyCardProps {
  name: string;
  title: string;
  qualification: string;
  photo?: string;
}

export default function FacultyCard({ name, title, qualification, photo }: FacultyCardProps) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center hover:shadow-lg transition">
      <img
        src={photo || "https://via.placeholder.com/150"}
        alt={name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-blue-700">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-gray-500 text-sm">{qualification}</p>
    </div>
  );
}
