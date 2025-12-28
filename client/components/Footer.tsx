import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pk-green-main to-[#1a4d2e] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
                alt="Eagle Security Guards Logo"
                className="h-14 w-14"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-black text-white">Eagle</h3>
                <span className="text-xs font-black tracking-widest text-blue-300">
                  SECURITY GUARDS
                </span>
              </div>
            </div>
            <p className="text-sm font-bold leading-relaxed text-white/90">
              Professional security services with trained personnel from the
              armed forces of Pakistan. Serving since 1992.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Elite Bodyguards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Mobile Escorts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Static Guards
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-bold text-white hover:text-blue-300 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
                  Security Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white uppercase tracking-widest">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Head Office</p>
                  <p className="text-sm font-bold text-white/80">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Call Us</p>
                  <p className="text-sm font-bold text-white/80">
                    24/7 Support Available
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Email</p>
                  <p className="text-sm font-bold text-white/80">
                    info@eaglesecurity.pk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-bold text-white/80 text-center md:text-left">
              © 2024 Eagle Security Guards (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="font-bold text-white hover:text-blue-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="font-bold text-white hover:text-blue-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
