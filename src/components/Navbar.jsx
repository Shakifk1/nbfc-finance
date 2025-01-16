import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link
import LogoPng from "../assets/logo-dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md">
      {/* Contact Info Section */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="mr-4">Email: email@email.com</span>
            <span>Phone: +91 99999 99999</span>
          </div>
          <div className="flex space-x-4 text-lg">
            {/* Social Links */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      {/* Main Navbar Section */}
      <div className="bg-blue-600 bg-opacity-50 text-white md:px-16">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LogoPng} alt="Logo" height="40" width="40" />
              <span className="text-xl font-bold">
                Infrastructure Planning & Development Credit
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li className="relative group">
              <span className="hover:text-gray-300 cursor-pointer">Services</span>
              <ul className="absolute left-0 mt-2 bg-blue-700 bg-opacity-50 text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li>
                  <Link
                    to="/services/microfinance"
                    className="block px-4 py-2 hover:bg-blue-500"
                  >
                    Microfinance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/property-loan"
                    className="block px-4 py-2 hover:bg-blue-500"
                  >
                    Property Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/business-loan"
                    className="block px-4 py-2 hover:bg-blue-500"
                  >
                    Business Loan
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 bg-opacity-50 text-white">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 hover:bg-blue-500">About Us</Link>
          </li>
          <li className="relative group">
            <span className="block py-2 px-4 hover:bg-blue-500 cursor-pointer">
              Services
            </span>
            <ul className="bg-blue-600 text-white hidden group-hover:block">
              <li>
                <Link
                  to="/services/microfinance"
                  className="block px-4 py-2 hover:bg-blue-500"
                >
                  Microfinance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/property-loan"
                  className="block px-4 py-2 hover:bg-blue-500"
                >
                  Property Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-loan"
                  className="block px-4 py-2 hover:bg-blue-500"
                >
                  Business Loan
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 hover:bg-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
