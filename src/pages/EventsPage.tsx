import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/common/EventCard";

export default function EventsPage() {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: "Healthcare Workshop",
      date: "Oct 12, 2025",
      description: "A free workshop on patient care and healthcare management.",
      image: "https://images.unsplash.com/photo-1588776814546-46e8f6b6a78a?auto=format&fit=crop&w=800&q=80",
      category: "Workshop",
    },
    {
      id: 2,
      title: "Nursing Career Fair",
      date: "Nov 20, 2025",
      description: "Meet recruiters and explore job opportunities in nursing.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      category: "Career Fair",
    },
    {
      id: 3,
      title: "Student Wellness Seminar",
      date: "Dec 5, 2025",
      description: "Learn about mental health, stress management, and self-care.",
      image: "https://images.unsplash.com/photo-1606813903719-5d1c6d6de067?auto=format&fit=crop&w=800&q=80",
      category: "Seminar",
    },
    {
      id: 4,
      title: "Annual Nursing Conference",
      date: "Jan 15, 2026",
      description: "Explore the latest research, trends, and innovations in nursing.",
      image: "https://images.unsplash.com/photo-1581093448791-fd6b8a1e87b7?auto=format&fit=crop&w=800&q=80",
      category: "Conference",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Events & Workshops</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Join our interactive workshops, career fairs, and wellness events to enrich your learning experience.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow hover:bg-gray-100 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow hover:bg-gray-100 transition"
        >
          ▶
        </button>

        <div
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide flex space-x-6 snap-x snap-mandatory scroll-smooth"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="min-w-[300px] md:min-w-[350px] snap-start flex-shrink-0 relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="bg-blue-600 px-2 py-1 rounded-full text-xs">{event.category}</span>
                <p className="text-sm mt-1">{event.date}</p>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-sm mt-1 line-clamp-2">{event.description}</p>
                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Events Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}
