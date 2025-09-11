import React, { useState } from "react";
import { Link } from "react-router-dom";

const allNews = [
  {
    id: 1,
    title: "New Nursing Diploma Intake Open",
    date: "Sept 5, 2025",
    category: "Admissions",
    description: "Applications are now open for the upcoming nursing diploma. Enroll now to start your career in healthcare.",
    image: "https://images.unsplash.com/photo-1588776814546-6c3e32d252db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Institute Receives National Accreditation",
    date: "Aug 20, 2025",
    category: "Accreditation",
    description: "Our institute has received national accreditation for our outstanding nursing programs.",
    image: "https://images.unsplash.com/photo-1606813908914-4d29ec52bb0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Free Healthcare Workshop Announced",
    date: "July 10, 2025",
    category: "Workshop",
    description: "Join our free healthcare workshop to gain practical knowledge in patient care and safety.",
    image: "https://images.unsplash.com/photo-1588776814380-411cc0c95a35?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Alumni Meet 2025 Scheduled",
    date: "June 15, 2025",
    category: "Alumni",
    description: "Connect with our alumni and hear their inspiring success stories.",
    image: "https://images.unsplash.com/photo-1596496052532-cd64ed94fbe0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "New Online Nursing Courses Launched",
    date: "May 30, 2025",
    category: "Admissions",
    description: "Explore our newly launched online nursing courses and enhance your skills from home.",
    image: "https://images.unsplash.com/photo-1588776814286-2d9872a07197?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Healthcare Conference 2025 Highlights",
    date: "April 18, 2025",
    category: "Workshop",
    description: "Highlights from the annual healthcare conference focusing on patient safety and innovations.",
    image: "https://images.unsplash.com/photo-1588776814598-2b6a5eebdf6a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Top Alumni Share Career Insights",
    date: "March 22, 2025",
    category: "Alumni",
    description: "Hear from our top alumni about career growth, challenges, and success stories.",
    image: "https://images.unsplash.com/photo-1596496052572-7e63b5c5c8b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Institute Receives Global Recognition",
    date: "Feb 10, 2025",
    category: "Accreditation",
    description: "Our institute has been recognized internationally for excellence in healthcare education.",
    image: "https://images.unsplash.com/photo-1606813908876-773f6a41f19f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Summer Healthcare Camp for Students",
    date: "Jan 15, 2025",
    category: "Workshop",
    description: "Enroll in our summer healthcare camp designed for students interested in nursing and medical sciences.",
    image: "https://images.unsplash.com/photo-1588776814483-1d0f174d5c56?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Admissions", "Accreditation", "Workshop", "Alumni"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter news based on selected category
  const filteredNews = selectedCategory === "All"
    ? allNews
    : allNews.filter(n => n.category === selectedCategory);

  // Safely get latest and other news
  const latestNews = filteredNews.length > 0 ? filteredNews[0] : null;
  const otherNews = filteredNews.length > 1 ? filteredNews.slice(1) : [];

  return (
    <section className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-10">

          {/* Hero News */}
          {latestNews ? (
            <Link to={`/news/${latestNews.id}`} className="relative block rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer">
              <img src={latestNews.image} alt={latestNews.title} className="w-full h-96 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-10">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm w-max">{latestNews.category}</span>
                <h1 className="text-5xl font-extrabold text-white mt-4 leading-tight">{latestNews.title}</h1>
                <p className="text-gray-300 mt-2 text-lg">{latestNews.date}</p>
                <p className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition">
                  Read More →
                </p>
              </div>
            </Link>
          ) : (
            <div className="text-center text-gray-500 py-20 text-xl">No news available in this category.</div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:bg-blue-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Other News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            {otherNews.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`} className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition">
                <div className="relative">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover"/>
                  <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">{news.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900">{news.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{news.date}</p>
                  <p className="text-gray-700 mt-3 line-clamp-3">{news.description}</p>
                  <p className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition">
                    Read More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">

          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.slice(1).map((cat) => (
                <li key={cat}>
                  <button onClick={() => setSelectedCategory(cat)} className="text-gray-700 hover:text-blue-600 font-medium transition">{cat}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Latest News</h2>
            <ul className="space-y-4">
              {allNews.slice(0, 3).map((news) => (
                <li key={news.id}>
                  <Link to={`/news/${news.id}`} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition">
                    <img src={news.image} alt={news.title} className="w-16 h-16 object-cover rounded-lg"/>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900">{news.title}</h3>
                      <p className="text-gray-400 text-xs">{news.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </section>
  );
}
