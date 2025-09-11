import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export default function BlogCard({ title, date, excerpt, image }: BlogCardProps) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{excerpt}</p>
        <button className="mt-3 text-blue-600 font-medium hover:underline">Read More</button>
      </div>
    </div>
  );
}
