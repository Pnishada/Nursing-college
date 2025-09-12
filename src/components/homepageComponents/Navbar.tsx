import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/logo/logo.png"; 

export default function Navbar(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("More");
  const location = useLocation();

  const Menu = FiMenu as React.FC<{ size?: number; className?: string }>;
  const Close = FiX as React.FC<{ size?: number; className?: string }>;
  const ChevronDown = FiChevronDown as React.FC<{ size?: number; className?: string }>;

  const menuItems = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Faculty", path: "/faculty" },
    { name: "Student Life", path: "/student-life" },
    { name: "Careers", path: "/careers" },
    { name: "News", path: "/news" },
    { name: "Downloads", path: "/downloads" },
    { name: "Contact", path: "/contact" },
  ], []);

  const moreItems = useMemo(() => [
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ], []);

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    const matchedItem = moreItems.find((item) => location.pathname === item.path);
    if (matchedItem) setSelectedDropdown(matchedItem.name);
    else setSelectedDropdown("More");
  }, [location.pathname, moreItems]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Nursing Institute Logo"
            className="h-10 w-10 object-cover"
          />
          <span className="text-2xl font-bold text-blue-600">Nursing Institute</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium ${
                isActive(item.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Dropdown (hoverable) */}
          <div className="relative group">
            <button
              className={`flex items-center font-medium ${
                moreItems.some((i) => isActive(i.path))
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {selectedDropdown} <ChevronDown className="ml-1" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 flex flex-col">
              {moreItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setSelectedDropdown(item.name)}
                  className={`px-4 py-2 hover:bg-blue-50 ${
                    isActive(item.path) ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <Close size={28} className="text-blue-600" /> : <Menu size={28} className="text-blue-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-gray-50 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-medium block w-full ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile More Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className={`flex items-center w-full font-medium justify-between ${
                    moreItems.some((i) => isActive(i.path))
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {selectedDropdown} <ChevronDown className="ml-2" />
                </button>

                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col mt-1 ml-4 space-y-1 border-l border-gray-300 pl-2"
                    >
                      {moreItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setOpen(false);
                            setSelectedDropdown(item.name);
                          }}
                          className={`font-medium block ${
                            isActive(item.path)
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
