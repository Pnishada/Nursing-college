import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  const newsItems = [
    { id: 1, title: "New Nursing Diploma Intake Open", date: "Sept 5, 2025", description: "Applications are now open for the upcoming nursing diploma." },
    { id: 2, title: "Institute Receives National Accreditation", date: "Aug 20, 2025", description: "Our institute has received national accreditation for our nursing programs." },
    { id: 3, title: "Free Healthcare Workshop Announced", date: "July 10, 2025", description: "Join our free healthcare workshop to gain practical knowledge in patient care." },
  ];

  return (
    <section id="news" className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">News & Updates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link 
              key={news.id} 
              to={`/news/${news.id}`} 
              className="block bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition text-left"
            >
              <h3 className="text-xl font-semibold text-blue-700">{news.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{news.date}</p>
              <p className="text-gray-700 mt-2 line-clamp-2">{news.description}</p>
            </Link>
          ))}
        </div>

        {/* <div className="mt-8">
          <Link
            to="/news" 
            className="text-blue-900 font-semibold hover:underline"
          >
            See All News
          </Link>
        </div> */}
      </div>
    </section>
  );
}
