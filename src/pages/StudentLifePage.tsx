import React, { useState } from "react";
import Card from "../components/common/StudentCard";

const data = {
  facilities: [
    {
      title: "Library",
      description: "A vast collection of books, journals, and digital resources.",
      icon: "📚",
      images: ["https://images.unsplash.com/photo-1553729459-efe14ef6055d"],
      videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    },
    {
      title: "Labs",
      description: "State-of-the-art labs for practical learning.",
      icon: "🔬",
      images: [
        "https://images.unsplash.com/photo-1581091215369-07c8c6d8b2f3",
        "https://images.unsplash.com/photo-1581093588401-7ef35f905e70",
      ],
    },
  ],
  activities: [
    {
      title: "Clubs & Societies",
      description: "Participate in cultural, academic, and hobby clubs.",
      icon: "🎨",
      images: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ],
  support: [
    {
      title: "Counseling Services",
      description: "Guidance on personal, academic, and career challenges.",
      icon: "🧠",
      images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df"],
    },
  ],
};

export default function StudentLifeDashboard() {
  const [activeTab, setActiveTab] = useState<"facilities" | "activities" | "support">("facilities");

  const renderCards = () => {
    const items = data[activeTab];
    return (
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {items.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    );
  };

  const sectionBg =
    activeTab === "facilities"
      ? "bg-gradient-to-r from-blue-50 to-blue-100"
      : activeTab === "activities"
      ? "bg-gradient-to-r from-green-50 to-green-100"
      : "bg-gradient-to-r from-yellow-50 to-yellow-100";

  const sectionSubtitle =
    activeTab === "facilities"
      ? "Explore our top-notch libraries, labs, and campus facilities."
      : activeTab === "activities"
      ? "Join student clubs, sports, and cultural events."
      : "Access support services, counseling, and guidance.";

  const featuredBanner =
    activeTab === "facilities"
      ? "https://images.unsplash.com/photo-1553729459-efe14ef6055d"
      : activeTab === "activities"
      ? "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      : "https://images.unsplash.com/photo-1551836022-d5d88e9218df";

  return (
    <section className={`max-w-7xl mx-auto px-6 py-16 rounded-3xl ${sectionBg} transition-all duration-500`}>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Student Life</h1>
        <p className="text-gray-500 text-lg">
          Explore campus facilities, activities, and student support services.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-6">
        {["facilities", "activities", "support"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Featured Banner */}
      <div
        className="mb-12 rounded-3xl overflow-hidden relative h-64 shadow-lg"
        style={{ backgroundImage: `url('${featuredBanner}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        </div>
      </div>

      {/* Section Subtitle */}
      <p className="text-center text-gray-600 text-lg mb-8 max-w-3xl mx-auto">{sectionSubtitle}</p>

      {/* Cards */}
      <div className="transition-all duration-500">{renderCards()}</div>
    </section>
  );
}
