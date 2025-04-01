
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-innocom-900">
              Innocom<span className="text-innocom-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-innocom-600"
                  : "text-gray-700 hover:text-innocom-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-innocom-600"
                  : "text-gray-700 hover:text-innocom-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isActive("/services")
                  ? "text-innocom-600"
                  : "text-gray-700 hover:text-innocom-600"
              }`}
            >
              Services
            </Link>
            {/* <Link
              to="/blog"
              className={`font-medium transition-colors duration-200 ${
                isActive("/blog")
                  ? "text-innocom-600"
                  : "text-gray-700 hover:text-innocom-600"
              }`}
            >
              Blog
            </Link> */}
            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-innocom-600"
                  : "text-gray-700 hover:text-innocom-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact" className="bg-innocom-600 hover:bg-innocom-700">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-innocom-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 px-2 py-1 rounded ${
                  isActive("/")
                    ? "text-innocom-600 bg-innocom-50"
                    : "text-gray-700 hover:text-innocom-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 px-2 py-1 rounded ${
                  isActive("/about")
                    ? "text-innocom-600 bg-innocom-50"
                    : "text-gray-700 hover:text-innocom-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors duration-200 px-2 py-1 rounded ${
                  isActive("/services")
                    ? "text-innocom-600 bg-innocom-50"
                    : "text-gray-700 hover:text-innocom-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors duration-200 px-2 py-1 rounded ${
                  isActive("/blog")
                    ? "text-innocom-600 bg-innocom-50"
                    : "text-gray-700 hover:text-innocom-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 px-2 py-1 rounded ${
                  isActive("/contact")
                    ? "text-innocom-600 bg-innocom-50"
                    : "text-gray-700 hover:text-innocom-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                asChild 
                className="mt-2 w-full bg-innocom-600 hover:bg-innocom-700"
              >
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
