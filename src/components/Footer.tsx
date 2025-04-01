
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Innocom</h3>
            <p className="text-gray-400 mb-4">
              Delivering high-quality, custom software solutions designed to help 
              businesses innovate and grow.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-innocom-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-innocom-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-innocom-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-innocom-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#software-development"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#reengineering"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Software Reengineering
                </Link>
              </li>
              <li>
                <Link
                  to="/services#maintenance"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Software Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services#design"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services#digital-marketing"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-innocom-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  11/41, 3rd Street, Nehru Nagar, Ennore, Chennai – 600057
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-innocom-500" />
                <a
                  href="tel:+919789459016"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  +91 97894 59016
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-innocom-500" />
                <a
                  href="mailto:theinnocom@gmail.com"
                  className="text-gray-400 hover:text-innocom-500 transition-colors"
                >
                  theinnocom@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {currentYear} Innocom Solutions Pvt Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-innocom-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-500 hover:text-innocom-500 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
