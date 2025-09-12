
import React from "react";
import BlogCard from "../components/common/BlogCard";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";


export default function BlogPage() {
  const blogs = [
    {
      title: "Top 5 Nursing Study Tips",
      date: "Sept 15, 2025",
      excerpt: "Discover the best strategies to excel in nursing school.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "The Future of Healthcare",
      date: "Aug 30, 2025",
      excerpt: "AI and technology are reshaping healthcare faster than ever.",
      image: "https://images.unsplash.com/photo-1587502537745-84d9988d6a52",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Blog</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
