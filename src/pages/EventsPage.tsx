import React from "react";
import EventCard from "../components/common/EventCard";


export default function EventsPage() {
  const events = [
    {
      title: "Healthcare Workshop",
      date: "Oct 12, 2025",
      description: "A free workshop on patient care and healthcare management.",
      image: "https://images.unsplash.com/photo-1588776814546-46e8f6b6a78a",
    },
    {
      title: "Nursing Career Fair",
      date: "Nov 20, 2025",
      description: "Meet recruiters and explore job opportunities in nursing.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Events & Workshops</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
}
