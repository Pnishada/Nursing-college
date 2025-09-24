import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/homepageComponents/Footer";
import Navbar from "../components/homepageComponents/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full bg-gradient-to-b from-blue-100 via-white to-blue-100">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-200 to-indigo-600 py-20 text-center text-white shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-blue-100 leading-relaxed">
            We’d love to hear from you! Whether you have questions about our
            programs, need assistance, or just want to say hello — we’re here to
            help.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="w-full max-w-5xl py-20 px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-10 space-y-6 
                        border-2 border-blue-200 hover:border-blue-400 transition-all"
            >
              <h2 className="text-3xl font-bold text-blue-900">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                            text-white rounded-xl font-semibold shadow-md transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </section>

        {/* Contact Info + Map */}
        <section className="w-full max-w-6xl py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Our Location",
                text: "No.07, Dr. Danister De Silva Mawatha, Orugodawatta, Wellampitiya",
                color: "from-pink-500 to-rose-600",
              },
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Call Us",
                text: "+9411 2 533 547",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                title: "Email Us",
                text: "INHT.Orugodwatta@naita.gov.lk",
                color: "from-blue-500 to-indigo-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-5 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-100"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} shadow-md`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <iframe
              title="Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.509684379566!2d79.87684037348617!3d6.9490444180750695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259832a2c11eb%3A0x47325d8857e9b647!2sInstitute%20of%20Nursing%20and%20Healthcare%20Training%20-%20INHT%2C%20Orugodawatta!5e0!3m2!1sen!2slk!4v1757566786408!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}
