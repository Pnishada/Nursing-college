import React, { useState } from "react";
import FacultyCard from "../components/common/FacultyCard";
import Footer from "../components/homepageComponents/Footer";
import Navbar from "../components/homepageComponents/Navbar";

interface FacultySection {
  title: string;
  departments: string[];
  members: {
    name: string;
    title: string;
    qualification: string;
    photo: string;
  }[];
}

const facultyData: FacultySection[] = [
  {
    title: "Core Nursing Faculties",
    departments: [
      "General Nursing",
      "Community Health Nursing",
      "Pediatric Nursing",
      "Medical-Surgical Nursing",
      "Psychiatric / Mental Health Nursing",
      "Obstetrics & Gynecological Nursing (Midwifery)",
      "Geriatric Nursing",
    ],
    members: [
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
    ],
  },
  {
    title: "Supporting Faculties / Allied Health",
    departments: [
      "Faculty of Medicine / Basic Sciences",
      "Anatomy",
      "Physiology",
      "Microbiology",
      "Pathology",
      "Pharmacology",
    ],
    members: [
      {
        name: "Mr. Nuwan Jayasuriya",
        title: "Lecturer",
        qualification: "BSc in Nursing",
        photo: "https://randomuser.me/api/portraits/men/41.jpg",
      },
    ],
  },
  {
    title: "Professional & Management Faculties",
    departments: [
      "Faculty of Nursing Education & Research",
      "Nursing Education & Training",
      "Research & Evidence-Based Practice",
      "Faculty of Health Management & Administration",
      "Health Care Management",
      "Hospital Administration",
      "Leadership in Nursing",
      "Faculty of Information Technology in Health",
      "Nursing Informatics",
      "E-Health / Telemedicine",
    ],
    members: [],
  },
];

export default function FacultyPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    if (expandedSections.includes(title)) {
      setExpandedSections(expandedSections.filter((t) => t !== title));
    } else {
      setExpandedSections([...expandedSections, title]);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <h1 className="text-5xl font-extrabold text-blue-800 text-center mb-12">
        Our Faculties
      </h1>

      {facultyData.map((section) => (
        <div key={section.title} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-lg overflow-hidden">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex justify-between items-center px-8 py-6 text-left text-2xl font-bold text-blue-700 hover:bg-blue-200 transition"
          >
            {section.title}
            <span className="text-3xl">{expandedSections.includes(section.title) ? "−" : "+"}</span>
          </button>

          {/* Departments List */}
          {expandedSections.includes(section.title) && (
            <div className="px-8 pb-6 space-y-6">
              <h3 className="text-xl font-semibold text-blue-800">Departments</h3>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {section.departments.map((dept, idx) => (
                  <li
                    key={idx}
                    className="bg-white/70 backdrop-blur-md text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-100 transition cursor-pointer"
                  >
                    {dept}
                  </li>
                ))}
              </ul>

              {/* Faculty Members */}
              {section.members.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold text-blue-800 mt-6">Key Faculty Members</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {section.members.map((member, idx) => (
                      <FacultyCard key={idx} {...member} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
