import React from "react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    { title: "Bachelor of Nursing", desc: "A comprehensive nursing degree that prepares students for professional healthcare roles." },
    { title: "Diploma in Medical Laboratory Technology", desc: "Gain practical skills in laboratory diagnostics and medical testing techniques." },
    { title: "Postgraduate Certificate in Infection Control", desc: "Specialized training in infection prevention and control for healthcare professionals." },
  ];

  return (
    <section id="programs" className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.desc}</p>
              <Link
                to={`/programs?program=${encodeURIComponent(program.title)}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
