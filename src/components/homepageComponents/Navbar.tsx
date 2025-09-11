import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false);

  const Menu = FiMenu as React.FC<{ size?: number; className?: string }>;
  const Close = FiX as React.FC<{ size?: number; className?: string }>;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/apply" },
    { name: "Faculty", path: "/faculty" },
    { name: "Student Life", path: "/student-life" },
    { name: "Careers", path: "/careers" },
    { name: "Events", path: "/events" },
    { name: "FAQ", path: "/faq" },
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Contact", path: "/contact" },
    // optional
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Nursing Institute
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <Close size={28} className="text-blue-600" />
            ) : (
              <Menu size={28} className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 bg-gray-50 p-4 rounded-lg shadow">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)} // close on click
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
