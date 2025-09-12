import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";

const allNews = [
  { id: 1, title: "New Nursing Diploma Intake Open", date: "Sept 5, 2025", description: "Applications are now open for the upcoming nursing diploma. Enroll now to start your career in healthcare.", category: "Admissions", image: "https://source.unsplash.com/800x400/?healthcare,nursing" },
  { id: 2, title: "Institute Receives National Accreditation", date: "Aug 20, 2025", description: "Our institute has received national accreditation for our outstanding nursing programs.", category: "Accreditation", image: "https://source.unsplash.com/800x400/?certificate,education" },
  { id: 3, title: "Free Healthcare Workshop Announced", date: "July 10, 2025", description: "Join our free healthcare workshop to gain practical knowledge in patient care and safety.", category: "Workshop", image: "https://source.unsplash.com/800x400/?workshop,healthcare" },
  { id: 4, title: "Alumni Meet 2025 Scheduled", date: "June 15, 2025", description: "Connect with our alumni and hear their inspiring success stories.", category: "Alumni", image: "https://source.unsplash.com/800x400/?alumni,meeting" },
];

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const news = allNews.find((n) => n.id === Number(id));

  if (!news) return <div className="text-center py-16 text-red-500">News not found!</div>;

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 3);

  return (
    <>
    <Navbar/>
    <section className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img src={news.image} alt={news.title} className="w-full h-96 object-cover"/>
          </div>

          {/* News Content */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">{news.category}</span>
            <h1 className="text-4xl font-extrabold text-blue-900 mt-4 leading-tight">{news.title}</h1>
            <p className="text-gray-400 mt-1 text-lg">{news.date}</p>
            <p className="text-gray-700 text-lg mt-6 leading-relaxed">{news.description}</p>

            {/* Back Button */}
            <Link to="/news" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              ← Back to All News
            </Link>

            {/* Optional Share Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">Share on Facebook</button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">Share on Twitter</button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition">Share on LinkedIn</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">

          {/* Related News */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Related News</h2>
            <ul className="space-y-4">
              {relatedNews.map((item) => (
                <li key={item.id}>
                  <Link to={`/news/${item.id}`} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg"/>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Latest News</h2>
            <ul className="space-y-4">
              {allNews.slice(0, 3).map((item) => (
                <li key={item.id}>
                  <Link to={`/news/${item.id}`} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg"/>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900">{item.title}</h3>
                      <p className="text-gray-400 text-xs">{item.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>
    </section>
    <Footer/>
    </>
  );
}
