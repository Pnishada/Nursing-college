import React from "react";
import FacultyCard from "../components/common/FacultyCard";


export default function FacultyPage() {
  const facultyList = [
    {
      name: "Dr. Anura Perera",
      title: "Senior Lecturer",
      qualification: "PhD in Nursing",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ms. Sanduni Silva",
      title: "Clinical Instructor",
      qualification: "MSc in Nursing",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mr. Nuwan Jayasuriya",
      title: "Lecturer",
      qualification: "BSc in Nursing",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Faculty & Staff</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facultyList.map((faculty, idx) => (
          <FacultyCard key={idx} {...faculty} />
        ))}
      </div>
    </div>
  );
}
