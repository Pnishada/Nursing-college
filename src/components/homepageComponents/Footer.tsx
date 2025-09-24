import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMailBulk } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo/logo.png";
export default function Footer(): React.ReactElement {
  const [openLinks, setOpenLinks] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/apply", label: "Apply" },
    { to: "/about", label: "About Us" },
    { to: "/news", label: "News" },
    { to: "/faculty", label: "Faculty" },
    { to: "/student-life", label: "Student Life" },
    { to: "/events", label: "Events" },
    { to: "/careers", label: "Careers" },
    { to: "/faq", label: "FAQ" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-gray-100 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-3">
          <img
            src={logo}
            alt="Institute of Nursing Logo"
            className="h-12 w-auto object-contain"
          />
          <h4 className="text-lg font-bold text-white mb-3">Institute of Nursing and Healthcare Training (INHCT)</h4>
          </div>  
          <p className="text-gray-200 leading-relaxed text-sm">
            Building the future of healthcare through education, compassion, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <button
            onClick={() => setOpenLinks(!openLinks)}
            className="flex justify-between items-center w-full md:cursor-default md:pointer-events-none"
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <FiChevronDown
              className={`md:hidden transition-transform ${openLinks ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-10 text-gray-200 overflow-hidden transition-all duration-300 ${
              openLinks ? "max-h-96" : "max-h-0 md:max-h-full"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-1 block transition-all duration-200 hover:text-white hover:font-bold hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <button
            onClick={() => setOpenContact(!openContact)}
            className="flex justify-between items-center w-full md:cursor-default md:pointer-events-none"
          >
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <FiChevronDown
              className={`md:hidden transition-transform ${openContact ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`mt-3 flex flex-col gap-3 overflow-hidden transition-all duration-300 ${
              openContact ? "max-h-96" : "max-h-0 md:max-h-full"
            }`}
          >
            {/* Address */}
            <div className="flex items-start gap-2">
              <span className="text-xl">📍</span>
              <span>
                07, Dr. Danster De Silva Mawatha,<br />
                Orugodawatta, Wellampitiya, Colombo, Sri Lanka
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span>+94 112 533 547</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <span className="text-xl">✉</span>
              <span>INHT.Orugodwatta@naita.gov.lk</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/share/19McXUwmLG/?mibextid=wwXIfr", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, href: "https://twitter.com", color: "hover:bg-sky-500" },
                { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:bg-pink-500" },
                { icon: <FaMailBulk />, href: "mailto:inhct.naita@gmail.com", color: "hover:bg-blue-500" },
                { icon: <FaYoutube />, href: "https://youtube.com", color: "hover:bg-red-600" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 text-white transition-all hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 text-center text-gray-300 py-3 text-xs">
        © {new Date().getFullYear()} Institute of Nursing. All rights reserved.
      </div>
    </footer>
  );
}
