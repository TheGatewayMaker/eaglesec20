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
      <section className="bg-background text-foreground py-10 sm:py-14 md:py-16 lg:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div className="w-1 md:w-1.5 h-8 sm:h-10 lg:h-12 bg-accent rounded-full flex-shrink-0"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight">
            Our Security Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-muted-foreground max-w-3xl leading-relaxed">
            Comprehensive security solutions designed to protect what matters
            most to you
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Static Security Guards */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center animate-fade-in">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <Shield className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                    Static Security Guard Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-black">
                  Eagle Security Guards draws its main pool of manpower from
                  armed forces of Pakistan and imparts training to meet critical
                  security requirements reliably and efficiently.
                </p>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Comprehensive personal data screening and vetting process
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Database verification to ensure no blacklisted guards join
                      ranks
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Professional training in security protocols and procedures
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Reliable and efficient protection for premises
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden shadow-lg h-40 sm:h-48 md:h-64 lg:h-96 group relative order-1 md:order-2">
                <img
                  src="https://i.ibb.co/Dg43BJC0/Screenshot-2025-12-27-at-10-23-30-PM.png"
                  alt="Professional security guards with tactical gear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 sm:gap-4 md:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-16 sm:w-24 md:w-32 lg:w-44 h-16 sm:h-24 md:h-32 lg:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg">
                    Get a Quote Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bodyguards */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 border-b border-border">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="overflow-hidden shadow-lg h-40 sm:h-48 md:h-64 lg:h-96 group relative order-2 md:order-1">
                <img
                  src="https://i.ibb.co/MxQRyL7x/Screenshot-2025-12-27-at-10-19-22-PM.png"
                  alt="Elite security professional in uniform"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 sm:gap-4 md:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-16 sm:w-24 md:w-32 lg:w-44 h-16 sm:h-24 md:h-32 lg:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg">
                    Get a Quote Now
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <Users className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                    Bodyguards
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-black">
                  Our bodyguards are mainly drawn from Special Service Group
                  (SSG) of Pakistan Army, an elite force trained to use all
                  available means to survive the worst security hazards.
                </p>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Elite personnel from Special Service Group (SSG)
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Cream of handpicked men dedicated to difficult missions
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Advanced threat assessment and response training
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Protection in high-risk security scenarios
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Escorts */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 border-b border-border">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <Truck className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                    Mobile Escort Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-black">
                  Mobile escort services are provided by ESG to protect
                  personnel during movement. Our escort teams are fully trained
                  in defensive measures to meet any eventuality.
                </p>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Protection during personnel movement and transit
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Fully trained teams in defensive measures
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Emergency response protocols for any situation
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Discrete and professional protection services
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden shadow-lg h-40 sm:h-48 md:h-64 lg:h-96 group relative order-1 md:order-2">
                <img
                  src="https://i.ibb.co/zhQrVk6Q/Screenshot-2025-12-27-at-10-24-55-PM.png"
                  alt="Mobile security escort team"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 sm:gap-4 md:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-16 sm:w-24 md:w-32 lg:w-44 h-16 sm:h-24 md:h-32 lg:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg">
                    Get a Quote Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Equipment */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="overflow-hidden shadow-lg h-40 sm:h-48 md:h-64 lg:h-96 group relative order-2 md:order-1">
                <img
                  src="https://i.ibb.co/1JG05cV5/Screenshot-2025-12-27-at-10-24-10-PM.png"
                  alt="Professional security equipment and surveillance"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 sm:gap-4 md:gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-16 sm:w-24 md:w-32 lg:w-44 h-16 sm:h-24 md:h-32 lg:h-44 object-contain opacity-100"
                  />
                  <span className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg">
                    Get a Quote Now
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <Lock className="w-7 sm:w-9 md:w-10 lg:w-12 h-7 sm:h-9 md:h-10 lg:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                    Security Equipment
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-black">
                  ESG specialises in providing all security equipment needed to
                  safeguard your premises with cutting-edge technology and
                  proven solutions.
                </p>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      CCTV Cameras
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Walkthrough Gates
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
                      Wireless Communication Devices
                    </span>
                  </li>
                  <li className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors duration-300">
                    <CheckCircle2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent flex-shrink-0 mt-0" />
                    <span className="text-foreground font-black text-xs md:text-sm lg:text-base leading-snug">
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
      <section className="bg-background py-10 sm:py-14 md:py-16 lg:py-24 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 md:mb-8 font-black leading-tight">
            Need Custom Security Solutions?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-bold leading-relaxed">
            Contact our team to discuss your specific security requirements
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-lg transition-shadow duration-300 inline-block rounded-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
