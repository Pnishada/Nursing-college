import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Users } from "lucide-react";
import Footer from "../components/homepageComponents/Footer";
import Navbar from "../components/homepageComponents/Navbar";

// images import
import img1 from "../assets/images/_DPP3500.jpg";
import img2 from "../assets/images/_DPP3379.jpg";
import img3 from "../assets/images/_DPP3330.jpg";
import img4 from "../assets/images/_DPP3320.jpg";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center text-center bg-gradient-to-b from-blue-400 via-white to-blue-600">
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            className="relative z-10 max-w-3xl px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white">
              Empowering Future{" "}
              <span className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
                Healthcare Leaders
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              The Institute of Nursing and Healthcare Training (INHCT) offers
              high-quality vocational education in nursing..
            </p>
            <motion.a
              href="#who-we-are"
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block px-8 py-3 bg-white/90 text-blue-700 font-semibold rounded-full shadow-md hover:bg-white transition"
            >
              Learn More
            </motion.a>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "15+", label: "Courses Offered" },
              { number: "10+", label: "Nationwide Centers" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-xl"
              >
                <h3 className="text-4xl font-extrabold text-blue-700">
                  {stat.number}
                </h3>
                <p className="mt-2 text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
            {[
              {
                title: "Our Mission",
                text: "To provide high-quality vocational and technical training for youth, enabling them to acquire employable skills through well-structured programs that meet the highest professional standards and fulfill the skilled manpower needs of industry.",
              },
              {
                title: "Our Vision",
                text: "To become the most efficient training organization, effectively contributing to Sri Lanka’s prosperity through the development of skilled human resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-100 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-blue-700">{item.title}</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who We Are */}
        <section id="who-we-are" className="relative py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
            {/* Collage Images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={img1} alt="Nursing training 1" className="rounded-2xl shadow-lg" />
              <img src={img2} alt="Nursing training 2" className="rounded-2xl shadow-lg mt-8" />
              <img src={img3} alt="Nursing training 3" className="rounded-2xl shadow-lg" />
              <img src={img4} alt="Nursing training 4" className="rounded-2xl shadow-lg mt-8" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-gray-900">Who We Are</h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                The Institute of Nursing and Healthcare Training (INHCT),
                registered under P01/1017, is a leading provider of high-quality
                vocational education in nursing and caregiving, offering both
                full-time and part-time programs in English. Committed to
                international standards, the institute focuses on equipping
                students with professional skills and practical experience to
                excel in the healthcare field. In addition, through its Industry
                Collaborative Apprenticeship Training Center, registered under
                P01/1016, INHCT strengthens hands-on learning opportunities and
                industry partnerships to ensure graduates are job-ready and
                aligned with global healthcare demands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Timeline */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                INHT
              </span>
            </h2>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-200"></div>
              <div className="space-y-12">
                {[
                  { icon: Building2, title: "Govt. Certified Training" },
                  { icon: Award, title: "Industry Partnerships" },
                  { icon: Users, title: "Nationwide Training Centers" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-1/2 p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-blue-100 shadow-lg flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
