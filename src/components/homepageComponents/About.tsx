import React from "react";

export default function About() {
  return (
    <section id="about" className="px-8 py-16 bg-white text-center md:text-left">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="About Nursing"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            The Institute of Nursing and Healthcare Training Center is dedicated to preparing compassionate and skilled healthcare professionals. With expert faculty, accredited programs, and modern facilities, we empower students to excel in their nursing careers.
          </p>
          <a href="/about" className="text-blue-600 hover:underline">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Read More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
