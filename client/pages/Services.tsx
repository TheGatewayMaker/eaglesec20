import {
  Shield,
  Users,
  Truck,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-16 sm:py-20 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 text-foreground">
            Our Security Services
          </h1>
          <p className="text-sm sm:text-base md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed text-muted-foreground">
            Comprehensive security solutions designed to protect what matters
            most to you
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Static Security Guards */}
          <div className="mb-10 sm:mb-16 md:mb-20 pb-8 sm:pb-12 md:pb-16 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center animate-fade-in">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Shield className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                    Static Security Guard Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-xl font-black">
                  Eagle Security Guards draws its main pool of manpower from
                  armed forces of Pakistan and imparts training to meet critical
                  security requirements reliably and efficiently.
                </p>
                <ul className="space-y-4 sm:space-y-5">
                  <li className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-6 sm:w-7 h-6 sm:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs sm:text-sm md:text-lg leading-snug">
                      Comprehensive personal data screening and vetting process
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Database verification to ensure no blacklisted guards join
                      ranks
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Professional training in security protocols and procedures
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Reliable and efficient protection for premises
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/29656069/pexels-photo-29656069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security guards with tactical gear"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 sm:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-20 sm:w-32 md:w-44 h-20 sm:h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get a Quote Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bodyguards */}
          <div className="mb-16 md:mb-20 pb-12 md:pb-16 border-b border-border">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/7714972/pexels-photo-7714972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Elite security professional in uniform"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 sm:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-20 sm:w-32 md:w-44 h-20 sm:h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get a Quote Now
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Users className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                    Bodyguards
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-xl font-black">
                  Our bodyguards are mainly drawn from Special Service Group
                  (SSG) of Pakistan Army, an elite force trained to use all
                  available means to survive the worst security hazards.
                </p>
                <ul className="space-y-5">
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Elite personnel from Special Service Group (SSG)
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Cream of handpicked men dedicated to difficult missions
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Advanced threat assessment and response training
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Protection in high-risk security scenarios
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Escorts */}
          <div className="mb-16 md:mb-20 pb-12 md:pb-16 border-b border-border">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Truck className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                    Mobile Escort Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-xl font-black">
                  Mobile escort services are provided by ESG to protect
                  personnel during movement. Our escort teams are fully trained
                  in defensive measures to meet any eventuality.
                </p>
                <ul className="space-y-5">
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Protection during personnel movement and transit
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Fully trained teams in defensive measures
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Emergency response protocols for any situation
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Discrete and professional protection services
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/3880225/pexels-photo-3880225.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mobile security escort team"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 sm:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-20 sm:w-32 md:w-44 h-20 sm:h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get a Quote Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Equipment */}
          <div
            className="mb-16 md:mb-20 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="overflow-hidden rounded-xl shadow-lg h-48 sm:h-56 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/7714972/pexels-photo-7714972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security equipment and surveillance"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 sm:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-20 sm:w-32 md:w-44 h-20 sm:h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get a Quote Now
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Lock className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
                    Security Equipment
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-xl font-black">
                  ESG specialises in providing all security equipment needed to
                  safeguard your premises with cutting-edge technology and
                  proven solutions.
                </p>
                <ul className="space-y-5">
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      CCTV Cameras
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Walkthrough Gates
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Wireless Communication Devices
                    </span>
                  </li>
                  <li className="flex gap-4 p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-base md:text-lg leading-snug">
                      Barbed Wire Protection
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-14 sm:py-20 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-foreground mb-4 sm:mb-6 font-black">
            Need Custom Security Solutions?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-8 sm:mb-10 font-bold">
            Contact our team to discuss your specific security requirements
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-black text-sm sm:text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
