import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, excerpt, image, category }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      
      {/* Image Section */}
      <div className="overflow-hidden h-56 rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
          <p className="text-sm text-blue-600 mb-4">{date}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
        </div>
        <a
          href="#"
          className="mt-auto inline-block text-blue-700 font-medium hover:text-blue-900 transition-colors"
        >
          Read More &rarr;
        </a>
      </div>

      {/* Hover overlay for extra UX */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
    </div>
  );
};

export default BlogCard;
