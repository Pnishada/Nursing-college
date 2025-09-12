import React from "react";
import FAQAccordion from "../components/common/FAQAccordion";
import Navbar from "../components/homepageComponents/Navbar";
import Footer from "../components/homepageComponents/Footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "You must have completed A/Ls in the science stream with minimum passes in the required subjects. Additional certifications are optional but recommended.",
    },
    {
      question: "Is hostel accommodation available?",
      answer:
        "Yes, hostel facilities are available for both male and female students, equipped with modern amenities and 24/7 security.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Yes, selected students are eligible for merit-based scholarships and need-based financial aid. Applications are reviewed annually.",
    },
    {
      question: "Can I transfer credits from another institute?",
      answer:
        "Transfers are evaluated on a case-by-case basis. You must provide official transcripts and course syllabi for review.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "We offer a variety of clubs, sports, and volunteer programs to help students develop soft skills and network with peers.",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500 text-lg">
          Find answers to common questions about admissions, scholarships, campus life, and more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <FAQAccordion key={idx} {...faq} />
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}
