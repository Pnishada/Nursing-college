
import React from "react";
import FAQAccordion from "../components/common/FAQAccordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "You must have completed A/Ls in science stream with minimum passes.",
    },
    {
      question: "Is hostel accommodation available?",
      answer: "Yes, hostel facilities are available for both male and female students.",
    },
    {
      question: "Are there scholarships available?",
      answer: "Yes, selected students are eligible for merit-based scholarships.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Frequently Asked Questions</h1>
      {faqs.map((faq, idx) => (
        <FAQAccordion key={idx} {...faq} />
      ))}
    </div>
  );
}
