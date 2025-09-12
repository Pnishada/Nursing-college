import React from "react";
import Footer from "../components/homepageComponents/Footer";
import Navbar from "../components/homepageComponents/Navbar";

const careersData = [
  {
    title: "Career Counseling & Job Placement",
    description: "Personalized guidance to help students find their ideal roles in healthcare and nursing.",
    icon: "🎯",
    color: "from-blue-50 to-blue-100",
  },
  {
    title: "Hospital & Healthcare Partnerships",
    description: "Collaborations with top hospitals and healthcare centers for internships and training.",
    icon: "🏥",
    color: "from-green-50 to-green-100",
  },
  {
    title: "Alumni Success Stories",
    description: "Inspiring stories from our graduates thriving in healthcare careers globally.",
    icon: "🌟",
    color: "from-yellow-50 to-yellow-100",
  },
];

const timelineData = [
  {
    year: "Year 1",
    event: "Career guidance sessions & soft skills workshops",
    icon: "📘",
  },
  {
    year: "Year 2",
    event: "Resume building, interview preparation, and mentoring",
    icon: "📝",
  },
  {
    year: "Year 3",
    event: "Internships at hospitals & healthcare centers",
    icon: "🏥",
  },
  {
    year: "Year 4",
    event: "Final placements & alumni networking",
    icon: "🌟",
  },
];

export default function CareersPage() {
  return (
    <>
    <Navbar/>
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Careers & Alumni</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We support our students with career guidance, internships, and strong alumni connections.
        </p>
      </div>

      {/* Features Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {careersData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.color} rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Career Timeline */}
      <div className="space-y-12">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">Career Timeline & Internships</h2>

        <div className="relative flex flex-col md:flex-row md:items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 z-0"></div>

          {timelineData.map((item, idx) => (
            <div key={idx} className="relative flex-1 z-10">
              {/* Dot */}
              <div className="hidden md:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-20"></div>

              {/* Card */}
              <div className="bg-white rounded-3xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{item.year}</h3>
                <p className="text-gray-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Spotlight */}
      <div className="mt-16 bg-blue-50 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-blue-800 mb-2">Alumni Spotlight</h3>
          <p className="text-gray-600">
            "Thanks to the institute, I secured my dream role in a leading hospital and grew my professional network immensely."  
            <span className="font-semibold text-blue-700"> – Jane Doe, Class of 2020</span>
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=200&w=200"
          alt="Alumni"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
    <Footer/>
    </>
  );
}
