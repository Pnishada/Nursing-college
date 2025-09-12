import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";

// Modern BlogCard Component
const BlogCard: React.FC<{
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
}> = ({ title, date, excerpt, image, category }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-300"></div>

      {/* Category Badge */}
      {category && (
        <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs text-gray-200">{date}</p>
        <p className="mt-1 text-sm line-clamp-2">{excerpt}</p>
      </div>
    </div>
  );
};

// BlogPage Component
interface Blog {
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  image: string;
  category?: string;
}

export default function BlogPage() {
  const blogs: Blog[] = [
    {
      title: "Top 5 Nursing Study Tips",
      date: "Sept 15, 2025",
      excerpt: "Discover the best strategies to excel in nursing school.",
      content:
        "Full blog content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      category: "Tips",
    },
    {
      title: "The Future of Healthcare",
      date: "Aug 30, 2025",
      excerpt: "AI and technology are reshaping healthcare faster than ever.",
      content:
        "Full blog content here... AI and technology are transforming hospitals, clinics, and patient care rapidly.",
      image: "https://images.unsplash.com/photo-1587502537745-84d9988d6a52",
      category: "Technology",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl text-blue-700/80">
            Latest insights, tips, and news from the world of nursing and healthcare.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} onClick={() => setSelectedBlog(blog)}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative transform-gpu"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image with modern close button */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover"
                />

                {/* Modern Icon Close Button */}
                <button
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                  onClick={() => setSelectedBlog(null)}
                  aria-label="Close Modal"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-blue-800">{selectedBlog.title}</h2>
                <p className="text-sm text-blue-600">{selectedBlog.date}</p>
                <p className="text-gray-700 leading-relaxed">{selectedBlog.content || selectedBlog.excerpt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
