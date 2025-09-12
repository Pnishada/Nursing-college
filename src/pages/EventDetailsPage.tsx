import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  videoUrl?: string;
  gallery?: string[];
  category?: string;
  location?: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Healthcare Workshop",
    date: "Oct 12, 2025",
    description:
      "A free workshop on patient care and healthcare management. Learn the latest techniques in patient handling, hospital protocols, and healthcare management. This workshop includes practical sessions and expert talks.",
    image:
      "https://images.unsplash.com/photo-1588776814546-46e8f6b6a78a?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    category: "Workshop",
    location: "Colombo, Sri Lanka",
  },
  {
    id: "2",
    title: "Nursing Career Fair",
    date: "Nov 20, 2025",
    description:
      "Meet recruiters and explore job opportunities in nursing. Network with top hospitals and healthcare centers to kickstart your career in nursing.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    category: "Career Fair",
    location: "Kandy, Sri Lanka",
  },
];

export default function EventDetailsPage() {
  const { eventId } = useParams<{ eventId: string }>();
  // const navigate = useNavigate();
  const event = events.find((e) => e.id === eventId);

  if (!event)
    return (
      <p className="text-center text-red-500 mt-12 text-lg font-semibold">
        Event not found!
      </p>
    );

  return (
    <>
    <Navbar/>
    <motion.section
      className="max-w-6xl mx-auto px-6 py-16 space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
     

      {/* Hero Section with Frosted Glass Info */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[24rem] object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-md rounded-xl p-6 max-w-lg shadow-xl space-y-2">
          {event.category && (
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          )}
          {event.location && (
            <p className="text-sm text-gray-100">{event.location}</p>
          )}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {event.title}
          </h1>
          <p className="text-gray-200">{event.date}</p>
        </div>
      </div>

      {/* Description & CTA */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-105">
          Register / Join Now
        </button>
      </motion.div>

      {/* Event Video */}
      {event.videoUrl && (
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Event Video</h2>
          <div className="relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer">
            <iframe
              src={event.videoUrl}
              title={event.title}
              className="w-full h-64 sm:h-96 transition-transform duration-500 group-hover:scale-105"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-4xl sm:text-6xl opacity-70">
                ▶
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Event Gallery */}
      {event.gallery && event.gallery.length > 0 && (
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {event.gallery.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${event.title} ${idx + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
    <Footer/>
    </>
  );
}
