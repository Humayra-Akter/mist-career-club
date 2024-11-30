import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaInfoCircle,
  FaBook,
  FaHandshake,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/images/logo/dark-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  const navOptions = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Events", path: "/events", icon: <FaCalendarAlt /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
    { name: "Resources", path: "/resources", icon: <FaBook /> },
    { name: "Partnerships", path: "/partnerships", icon: <FaHandshake /> },
    { name: "Contact Us", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="p-4 bg-primary text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>

        {/* Large Screen Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navOptions.map((option, index) => (
            <Link
              key={option.path}
              to={option.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative text-lg font-medium ${
                location.pathname === option.path
                  ? "text-secondary"
                  : "text-gray-300"
              } hover:text-secondary transition-all`}
            >
              <div className="flex items-center gap-2">
                <span>{option.icon}</span>
                {option.name}
              </div>
              {/* Underline indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-full rounded transition-all duration-300 ${
                  location.pathname === option.path || hoveredIndex === index
                    ? "bg-secondary"
                    : "opacity-0"
                }`}
              ></div>
            </Link>
          ))}
        </div>

        {/* Small Screen Menu Button */}
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Small Screen Side Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <button
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Options */}
          <div className="flex flex-col space-y-4 mt-6">
            {navOptions.map((option) => (
              <Link
                key={option.path}
                to={option.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center text-lg px-4 py-3 rounded-md hover:bg-secondary transition-all ${
                  location.pathname === option.path
                    ? "bg-secondary text-white"
                    : "text-gray-300"
                }`}
              >
                <span className="mr-3 text-xl">{option.icon}</span>
                {option.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
