import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      id: "p1",
      title: "Nurse NVQ Level 06 (Higher Diploma in Nursing)",
      desc: "A comprehensive program designed to equip students with advanced nursing skills and knowledge for a successful career in healthcare.",
    },
    {
      id: " ",
      title: "Caregiver NVQ Level 03 and Level 04",
      desc: "A practical program that trains students in essential caregiving skills for various healthcare settings.",
    },
    {
      id: "p4",
      title: "INDUSTRY COLLABORATIVE APPRENTICESHIP TRAINING CENTER (ICATC)",
      desc: "A practical program that trains students in essential skills for various industries.",
    },
  ];

  return (
    <section id="programs" className="px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition max-w-sm mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700">{program.title}</h3>
              <p className="text-gray-600 mt-3">{program.desc}</p>
              <Link
                to={`/programs?program=${program.id}`}
                className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
