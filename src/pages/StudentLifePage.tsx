import React from "react";

export default function StudentLifePage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Student Life & Campus Facilities</h1>
      <p className="mb-4">Explore our library, labs, hostels, and vibrant campus life.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow">📚 Library</div>
        <div className="bg-gray-100 p-4 rounded shadow">🔬 Labs</div>
        <div className="bg-gray-100 p-4 rounded shadow">🏠 Hostel</div>
        <div className="bg-gray-100 p-4 rounded shadow">🎭 Extracurriculars</div>
      </div>
    </section>
  );
}
