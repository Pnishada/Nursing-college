// src/pages/DownloadsPage.tsx
import React from "react";
import { motion } from "framer-motion"
import DownloadCard from "../components/common/DownloadCard";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";


export default function DownloadsPage() {
  const downloads = [
    {
      title: "Admission Brochure 2025",
      fileUrl: "/files/brochure.pdf",
      description: "Full details about our programs, facilities, and student life.",
    },
    {
      title: "Application Form",
      fileUrl: "/files/application-form.pdf",
      description: "Download, fill, and submit this form to apply for admission.",
    },
    {
      title: "Course Syllabus",
      fileUrl: "/files/syllabus.pdf",
      description: "Get the latest syllabus covering all academic modules and training sessions.",
    },
    {
      title: "Information Guide",
      fileUrl: "/files/information-guide.pdf",
      description: "Comprehensive guide to our institution and programs.",
    },
    {
      title: "New Updates 2025",
      fileUrl: "/files/new-updates-2025.pdf",
      description: "Latest news and updates about our courses and facilities.",
    },
  ];

  return (
    <>
    <Navbar />
      <div className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen py-20 px-6">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-300 rounded-full opacity-20 blur-3xl" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-sm">
            Downloads
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Access important documents, brochures, and resources with just one click.
            Everything you need to get started is here.
          </p>
        </motion.div>

        {/* Downloads Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {downloads.map((download, idx) => (
            <DownloadCard key={idx} {...download} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
