import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Sarah Johnson", feedback: "The training I received here prepared me to excel in my nursing career. The faculty is supportive and knowledgeable." },
    { name: "David Lee", feedback: "Excellent programs with modern facilities. I highly recommend this institute for anyone pursuing healthcare training." },
  ];

  return (
    <section className="px-8 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition">
              <p className="text-gray-700 italic">“{item.feedback}”</p>
              <h4 className="mt-4 font-semibold text-blue-700">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
