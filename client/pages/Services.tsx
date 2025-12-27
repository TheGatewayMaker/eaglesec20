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
      <section className="bg-background text-foreground py-24 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-foreground">
            Our Security Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl font-bold leading-relaxed text-muted-foreground">
            Comprehensive security solutions designed to protect what matters
            most to you
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Static Security Guards */}
          <div className="mb-16 md:mb-20 pb-12 md:pb-16 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-10 md:w-12 h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    Static Security Guard Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:text-xl font-black">
                  Eagle Security Guards draws its main pool of manpower from
                  armed forces of Pakistan and imparts training to meet critical
                  security requirements reliably and efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Comprehensive personal data screening and vetting process
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Database verification to ensure no blacklisted guards join
                      ranks
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Professional training in security protocols and procedures
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Reliable and efficient protection for premises
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/29656069/pexels-photo-29656069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security guards with tactical gear"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-32 md:w-44 h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-accent text-accent-foreground px-8 py-3 font-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
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
              <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/7714972/pexels-photo-7714972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Elite security professional in uniform"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-32 md:w-44 h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-accent text-accent-foreground px-8 py-3 font-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 md:w-12 h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    Bodyguards
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:text-xl font-black">
                  Our bodyguards are mainly drawn from Special Service Group
                  (SSG) of Pakistan Army, an elite force trained to use all
                  available means to survive the worst security hazards.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Elite personnel from Special Service Group (SSG)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Cream of handpicked men dedicated to difficult missions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Advanced threat assessment and response training
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
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
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-10 md:w-12 h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    Mobile Escort Services
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:text-xl font-black">
                  Mobile escort services are provided by ESG to protect
                  personnel during movement. Our escort teams are fully trained
                  in defensive measures to meet any eventuality.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Protection during personnel movement and transit
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Fully trained teams in defensive measures
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Emergency response protocols for any situation
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Discrete and professional protection services
                    </span>
                  </li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/3880225/pexels-photo-3880225.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mobile security escort team"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-32 md:w-44 h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-accent text-accent-foreground px-8 py-3 font-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
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
              <div className="overflow-hidden rounded-xl shadow-lg h-64 md:h-96 group relative">
                <img
                  src="https://images.pexels.com/photos/7714972/pexels-photo-7714972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security equipment and surveillance"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-6">
                  <img
                    src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
                    alt="Eagle Security Logo"
                    className="w-32 md:w-44 h-32 md:h-44 object-contain opacity-100"
                  />
                  <span className="bg-accent text-accent-foreground px-8 py-3 font-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-10 md:w-12 h-10 md:h-12 text-accent flex-shrink-0" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground">
                    Security Equipment
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg md:text-xl font-black">
                  ESG specialises in providing all security equipment needed to
                  safeguard your premises with cutting-edge technology and
                  proven solutions.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      CCTV Cameras
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Walkthrough Gates
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
                      Wireless Communication Devices
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground font-black text-base md:text-lg">
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
      <section className="bg-background py-20 md:py-32 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-foreground mb-6 font-black">
            Need Custom Security Solutions?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-10 font-bold">
            Contact our team to discuss your specific security requirements
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
