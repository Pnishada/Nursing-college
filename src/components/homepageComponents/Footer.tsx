import React from "react";
import { Link } from "react-router-dom";

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-3">Institute of Nursing</h4>
          <p className="text-gray-200">
            Building the future of healthcare through education, compassion and innovation.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-200">📍 Colombo, Sri Lanka</p>
          <p className="text-gray-200">📞 +94 71 234 5678</p>
          <p className="text-gray-200">✉ info@nursinginstitute.lk</p>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center text-gray-300 py-4">
        © {new Date().getFullYear()} Institute of Nursing. All rights reserved.
      </div>
    </footer>
  );
}
