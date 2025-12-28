import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Compass,
  CheckCircle2,
  MapPin,
  Users,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Banner Section */}
      <section className="relative w-full h-48 sm:h-56 md:h-72 lg:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/zHTFCPHD/Screenshot-2025-12-27-at-10-22-45-PM.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-8 animate-bounce-gentle">
            <img
              src="https://i.ibb.co/8gTBwZC9/eaglesecurityoriginallogomonochrome.png"
              alt="Eagle Security Guards Logo"
              className="w-12 sm:w-16 md:w-24 lg:w-40 h-12 sm:h-16 md:h-24 lg:h-40 object-contain mx-auto opacity-95 filter drop-shadow-xl"
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-black mb-2 sm:mb-3 md:mb-6 text-white drop-shadow-2xl leading-tight">
            About Eagle Security Guards
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold opacity-95 max-w-3xl mx-auto drop-shadow-lg leading-tight">
            Guardians of Trust • Defenders of Peace • Protectors Since 1992
          </p>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-accent to-accent/80 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                30+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Years of Excellence
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                4000+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Dedicated Personnel
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                50+
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Offices Nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 md:mb-3">
                100%
              </div>
              <p className="text-xs md:text-sm lg:text-lg font-bold opacity-90 leading-tight">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-3 sm:mb-4 md:mb-6">
                <span className="bg-accent/20 text-accent font-black px-3 py-1 text-xs sm:text-sm rounded-lg">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
                Founded on Military Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-3 sm:mb-4 md:mb-6">
                Eagle Security Guards was established in 1992 with a singular
                vision: to bring military-grade discipline and professionalism
                to civilian security. We're not just a security company—we're a
                legacy built on the foundation of Pakistan's armed forces.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-4 sm:mb-6 md:mb-8">
                Licensed to operate nationwide across Pakistan and Azad Jammu &
                Kashmir, we've grown into one of the most trusted private
                security providers in the nation.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0" />
                  <span className="text-foreground font-bold text-xs md:text-sm lg:text-base">
                    National Coverage with Local Expertise
                  </span>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0" />
                  <span className="text-foreground font-bold text-xs md:text-sm lg:text-base">
                    Ex-Army Officers Leading Strategic Operations
                  </span>
                </div>
                <div className="flex gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg bg-accent/5 border-l-4 border-accent hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0 mt-0" />
                  <span className="text-foreground font-bold text-xs md:text-sm lg:text-base">
                    Government, Banking & Corporate Approved
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl h-40 sm:h-48 md:h-64 lg:h-96 order-1 md:order-2">
              <img
                src="https://i.ibb.co/Ps11NyHH/Screenshot-2025-12-27-at-10-23-11-PM.png"
                alt="Elite security personnel in formation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section - Enhanced */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-accent/5 to-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-2 sm:mb-3 md:mb-4">
              The Eagle Foundation
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-muted-foreground font-bold max-w-2xl mx-auto">
              Our vision, mission, and values are the pillars upon which every
              decision, every action, and every commitment is built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-slide-in-from-bottom">
              <div className="flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl bg-accent/20 mb-4 sm:mb-6 lg:mb-8">
                <Lightbulb className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 lg:mb-4">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-xs sm:text-sm md:text-base">
                To be the gold standard in professional security, recognized
                globally for vigilance, excellence, and the unwavering
                dedication of our personnel.
              </p>
            </div>

            {/* Mission */}
            <div
              className="bg-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl bg-accent/20 mb-4 sm:mb-6 lg:mb-8">
                <Target className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 lg:mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-xs sm:text-sm md:text-base">
                To safeguard lives and assets through meticulously trained,
                disciplined, and vetted personnel, led by experienced
                ex-military commanders.
              </p>
            </div>

            {/* Commitment */}
            <div
              className="bg-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border-2 border-border shadow-lg hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl bg-accent/20 mb-4 sm:mb-6 lg:mb-8">
                <Compass className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-2 sm:mb-3 lg:mb-4">
                Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed font-bold text-xs sm:text-sm md:text-base">
                Delivering uncompromising reliability, efficiency, and integrity
                across all sectors, with zero tolerance for mediocrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Standards Section - Side by Side */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            {/* Why Choose Us Section */}
            <div>
              <div className="mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
                <h2 className="text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 md:mb-3">
                  Why Organizations Trust Eagle
                </h2>
                <p className="text-xs md:text-sm lg:text-lg text-muted-foreground font-bold">
                  What sets us apart in the security landscape
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all">
                  <Shield className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Military Heritage
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Personnel drawn from Pakistan's elite armed forces with
                      unparalleled training and discipline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all">
                  <Users className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Rigorous Vetting
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Comprehensive background screening ensures only the most
                      qualified join our ranks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all">
                  <MapPin className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Nationwide Network
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      50+ offices across Pakistan ensures rapid response and
                      local expertise wherever you are.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all">
                  <CheckCircle2 className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Proven Track Record
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Trusted by government agencies, financial institutions,
                      and Fortune 500 companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards Section */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border border-accent/20">
              <div className="mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
                <h2 className="text-2xl sm:text-2.5xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 md:mb-3">
                  Uncompromising Standards
                </h2>
                <p className="text-xs md:text-sm lg:text-lg text-muted-foreground font-bold">
                  Every member of the Eagle family adheres to these pillars of
                  excellence
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl bg-card border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all">
                  <div className="flex items-center justify-center w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-accent text-accent-foreground font-black flex-shrink-0 text-xs md:text-base">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Absolute Integrity
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Unwavering honesty in every interaction, every decision,
                      and every service delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl bg-card border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all">
                  <div className="flex items-center justify-center w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-accent text-accent-foreground font-black flex-shrink-0 text-xs md:text-base">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Relentless Vigilance
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      24/7 alert and responsive protection, never lowering our
                      guard, ever.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl bg-card border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all">
                  <div className="flex items-center justify-center w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-accent text-accent-foreground font-black flex-shrink-0 text-xs md:text-base">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Professional Excellence
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Continuous training, certification, and adherence to
                      international security standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl bg-card border-2 border-accent/30 hover:border-accent hover:shadow-lg transition-all">
                  <div className="flex items-center justify-center w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full bg-accent text-accent-foreground font-black flex-shrink-0 text-xs md:text-base">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm lg:text-lg font-black text-foreground mb-0.5 md:mb-1">
                      Client-Centric Service
                    </h4>
                    <p className="text-xs text-muted-foreground font-bold leading-snug">
                      Your security needs drive everything we do, customized
                      solutions for every scenario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-background transition-colors duration-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
              Ready to Experience Eagle Security?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl text-muted-foreground font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-14 leading-relaxed">
              Discover how our comprehensive security solutions can protect what
              matters most to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-accent to-blue-800 text-accent-foreground px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block rounded-lg"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-accent text-accent px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-black text-xs sm:text-sm md:text-base lg:text-lg hover:bg-accent/10 transition-all duration-300 inline-block rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
