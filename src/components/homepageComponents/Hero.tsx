import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-snug">
          Empowering the Next Generation of Nurses
        </h1>
        <p className="text-gray-600 text-lg">
          Join our comprehensive nursing programs designed to elevate your career in healthcare.
        </p>
        <div className="space-x-4">
          <Link to="/Programs">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View Programs
            </button>
          </Link>

          <Link to="/apply?program=Nursing">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
            Apply Now
          </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/855597368/photo/attentive-nursing-students-in-class.jpg?s=612x612&w=0&k=20&c=YXBArDLBGy8opdwrYlk_19C2GP98qF-GmnGSjagkPVM="
          alt="Nursing Students"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
