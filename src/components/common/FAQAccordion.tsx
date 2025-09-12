import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      layout
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <span className={`font-semibold text-gray-800 ${open ? "text-blue-700" : ""}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <ChevronUp size={20} className="text-blue-700" /> : <ChevronDown size={20} />}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-4 text-gray-600 text-sm"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
