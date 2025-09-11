import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <p className="mt-2 text-gray-600 text-sm">{answer}</p>}
    </div>
  );
}
