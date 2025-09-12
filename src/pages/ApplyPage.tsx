import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiPhone, HiChat } from "react-icons/hi";

export default function ApplyPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programParam = searchParams.get("program");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    program: programParam || "",
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (programParam) {
      setFormData((prev) => ({ ...prev, program: programParam }));
    }
  }, [programParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Application for ${formData.program} submitted successfully!`);
    navigate("/programs");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 md:p-12"
      >
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Apply {formData.program ? `for ${formData.program}` : ""}
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in the form below and our team will get in touch with you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Program (readonly) */}
              <div className="relative">
                <label htmlFor="program" className="sr-only">
                  Program
                </label>
                <input
                  id="program"
                  type="text"
                  name="program"
                  value={formData.program}
                  readOnly
                  className="w-full pl-3 py-3 border border-gray-200 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <span className="absolute top-3 left-3 text-gray-400 text-lg">
                  <HiUser />
                </span>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <span className="absolute top-3 left-3 text-gray-400 text-lg">
                  <HiMail />
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <span className="absolute top-3 left-3 text-gray-400 text-lg">
                  <HiPhone />
                </span>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  required
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
                >
                  Next
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="relative">
                <label htmlFor="message" className="sr-only">
                  Your message or questions
                </label>
                <span className="absolute top-3 left-3 text-gray-400 text-lg">
                  <HiChat />
                </span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message or questions"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full pl-10 px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div className="flex justify-between">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePrev}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-400 transition"
                >
                  Back
                </motion.button>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition"
                >
                  Submit Application
                </motion.button>
              </div>
            </motion.div>
          )}
        </form>
      </motion.div>
    </main>
  );
}
