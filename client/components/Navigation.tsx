import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICES" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  // Close menu when window resizes to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-background border-b-2 border-accent sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition duration-300 flex-shrink-0"
          >
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20"
            />
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                Eagle
              </span>
              <span className="text-xs sm:text-sm font-black tracking-widest text-accent">
                SECURITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-12 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-black text-base text-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center hover:opacity-70 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Overlay backdrop */}
            <div
              className="fixed inset-0 bg-black/40 md:hidden animate-fadeIn"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu Panel */}
            <div className="absolute top-full left-0 right-0 bg-background border-b-2 border-accent shadow-xl md:hidden animate-slideDown">
              <div className="container mx-auto px-4 sm:px-6 py-4">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3.5 px-4 font-black text-base text-foreground hover:bg-accent/10 hover:text-accent transition-all duration-300 mb-1 border-l-4 border-transparent hover:border-accent hover:pl-5 animate-slideInUp"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-slideInUp {
          opacity: 0;
          animation: slideInUp 0.3s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
