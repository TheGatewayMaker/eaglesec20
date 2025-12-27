import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Truck,
  Lock,
  CheckCircle2,
  Zap,
  Award,
  Target,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div
      className="text-foreground"
      style={{
        background:
          "linear-gradient(to bottom, #fafaf9 0%, #f0f0ee 25%, #e5e5e2 50%, #3a3a3a 75%, #0f0f0f 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="bg-background text-foreground relative overflow-hidden py-16 sm:py-20 md:py-40 transition-colors duration-300 animate-fade-in">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>

        {/* Hero Background Image - Right Half Only */}
        <div
          className="hidden md:block absolute right-0 top-0 w-[calc(50%+2rem)] h-full -mr-6"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3880225/pexels-photo-3880225.jpeg?auto=compress&cs=tinysrgb&w=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-xs sm:text-sm font-black text-accent mb-4 sm:mb-6 uppercase tracking-widest">
                Professional Security Since 1992
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
                Elite Security Services For Your Peace of Mind
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-bold mb-8 sm:mb-12 leading-relaxed">
                Drawn from the armed forces of Pakistan, our personnel deliver
                world-class security with precision, discipline, and unwavering
                commitment to your safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/services"
                  className="bg-accent text-accent-foreground px-6 sm:px-10 py-3 sm:py-5 font-black text-sm sm:text-base md:text-lg text-center rounded-xl hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-300 inline-block relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>
                </Link>
                <Link
                  to="/contact"
                  className="border-3 border-accent text-accent px-6 sm:px-10 py-3 sm:py-5 font-black text-sm sm:text-base md:text-lg text-center rounded-xl hover:border-foreground hover:bg-accent/10 transition-all duration-300 inline-block relative after:absolute after:inset-0 after:border-3 after:border-accent after:rounded-xl after:scale-105 after:opacity-0 group-hover:after:scale-100 after:transition-all after:duration-300"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Right Visual - Empty for background image */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 md:py-40 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-10 sm:mb-16 md:mb-20">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-foreground leading-tight">
                Our Security Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-xl font-bold text-muted-foreground ml-4 sm:ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Comprehensive solutions designed to protect what matters most to
              you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Bodyguards Card - First */}
            <div
              className="bg-card text-foreground p-0 overflow-hidden relative group border border-border animate-slide-in-from-bottom transition-all duration-300"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-80">
                <img
                  src="https://images.pexels.com/photos/27517900/pexels-photo-27517900.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Elite bodyguard protection services"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to="/services"
                  className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-accent text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                <Users className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 text-accent" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 leading-tight text-foreground">
                  Elite Bodyguards
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 leading-relaxed text-muted-foreground">
                  Our SSG-trained specialists deliver executive-level protection
                  with tactical expertise and discretion. Every bodyguard
                  undergoes rigorous military training and psychological
                  evaluation to provide the highest standard of personal
                  security for VIP clients and high-profile individuals.
                </p>
              </div>
            </div>

            {/* Static Guards Card - Second */}
            <div
              className="bg-card text-foreground p-0 overflow-hidden relative group border border-border animate-slide-in-from-bottom transition-all duration-300"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-80">
                <img
                  src="https://images.pexels.com/photos/29656069/pexels-photo-29656069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security guards with tactical gear"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to="/services"
                  className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-accent text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                <Shield className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 text-accent" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 leading-tight text-foreground">
                  Static Security Guards
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 leading-relaxed text-muted-foreground">
                  Our vetted security professionals provide round-the-clock
                  on-site protection with military discipline and precision.
                  Each guard undergoes comprehensive background screening and
                  tactical training to ensure the safety and security of your
                  facilities, personnel, and valuable assets.
                </p>
              </div>
            </div>

            {/* Mobile Escorts Card */}
            <div
              className="bg-card text-foreground p-0 overflow-hidden relative group border border-border animate-slide-in-from-bottom transition-all duration-300"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-80">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional mobile escort security services"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to="/services"
                  className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-accent text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                <Truck className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 text-accent" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 leading-tight text-foreground">
                  Mobile Escorts
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 leading-relaxed text-muted-foreground">
                  Our mobile escort teams provide seamless protection during
                  transit and travel. We offer route planning, threat
                  assessment, and coordinated security response for safe and
                  secure movement, whether for business travel, executive
                  commute, or convoy operations.
                </p>
              </div>
            </div>

            {/* Security Equipment Card */}
            <div
              className="bg-card text-foreground p-0 overflow-hidden relative group border border-border animate-slide-in-from-bottom transition-all duration-300"
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-80">
                <img
                  src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Advanced security equipment and surveillance systems"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to="/services"
                  className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="bg-accent text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 font-black text-sm sm:text-base md:text-lg rounded-lg hover:shadow-lg transition-all duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                <Lock className="w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4 text-accent" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 leading-tight text-foreground">
                  Security Equipment
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 leading-relaxed text-muted-foreground">
                  We deploy state-of-the-art surveillance, access control, and
                  security monitoring systems tailored to your facility. From
                  CCTV networks to integrated security platforms, our technology
                  solutions provide 24/7 monitoring and real-time threat
                  detection for comprehensive protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-32 border-y border-border transition-colors duration-300">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3880225/pexels-photo-3880225.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 text-foreground">
              Why Professional Security Matters
            </h2>
            <p className="text-sm sm:text-base md:text-xl font-bold opacity-95 leading-relaxed mb-4 sm:mb-6 text-foreground">
              In a world where security has become critical, a personalized
              approach is key to ensuring you get the protection you deserve.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold opacity-90 leading-relaxed text-foreground">
              From static guards and elite bodyguards to mobile escorts and
              advanced security equipment, we provide comprehensive, tailored
              solutions for every security need backed by decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Experience Card */}
            <div className="group relative bg-card border-2 border-accent text-foreground p-5 sm:p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-32 h-24 sm:w-40 sm:h-32 md:w-56 md:h-40 bg-gradient-to-br from-accent to-blue-600 mb-4 sm:mb-6 md:mb-8 shadow-lg shadow-accent/30">
                  <AnimatedCounter
                    targetNumber={30}
                    suffix="+"
                    duration={2000}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-black text-foreground">
                  Years of Experience
                </p>
                <p className="text-xs font-bold text-muted-foreground mt-1 sm:mt-2 md:mt-3">
                  Protecting businesses since 1992
                </p>
              </div>
            </div>

            {/* Personnel Card */}
            <div className="group relative bg-card border-2 border-blue-500 text-foreground p-5 sm:p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-32 h-24 sm:w-40 sm:h-32 md:w-56 md:h-40 bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 sm:mb-6 md:mb-8 shadow-md">
                  <AnimatedCounter
                    targetNumber={500}
                    suffix="+"
                    duration={2000}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-black text-foreground">
                  Trained Personnel
                </p>
                <p className="text-xs font-bold text-muted-foreground mt-1 sm:mt-2 md:mt-3">
                  Elite security professionals
                </p>
              </div>
            </div>

            {/* Clients Card */}
            <div className="group relative bg-card border-2 border-slate-600 text-foreground p-5 sm:p-8 md:p-10 text-center hover:shadow-lg transition-all duration-300">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-32 h-24 sm:w-40 sm:h-32 md:w-56 md:h-40 bg-gradient-to-br from-slate-700 to-slate-600 mb-4 sm:mb-6 md:mb-8 shadow-md">
                  <AnimatedCounter
                    targetNumber={100}
                    suffix="+"
                    duration={2000}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-black text-foreground">
                  Corporate Clients
                </p>
                <p className="text-xs font-bold text-muted-foreground mt-1 sm:mt-2 md:mt-3">
                  Trusted by leading organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-14 sm:py-20 md:py-40 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-10 sm:mb-16 md:mb-20">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-foreground leading-tight">
                Why Choose Eagle
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-xl font-bold text-muted-foreground ml-4 sm:ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Three decades of trusted security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: "Military Excellence",
                desc: "Personnel from Pakistan's armed forces with proven expertise",
              },
              {
                icon: CheckCircle2,
                title: "Thorough Vetting",
                desc: "Comprehensive screening and background verification process",
              },
              {
                icon: Zap,
                title: "24/7 Availability",
                desc: "Round-the-clock support and emergency response team",
              },
              {
                icon: Target,
                title: "Customized Solutions",
                desc: "Tailored security plans for your specific requirements",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border-2 border-border p-5 sm:p-6 md:p-10 group hover:shadow-lg hover:bg-slate-800 transition-all duration-300 animate-slide-in-from-bottom"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-accent mb-3 sm:mb-4 md:mb-6 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl md:text-3xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-lg font-bold text-muted-foreground leading-relaxed group-hover:text-blue-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-14 sm:py-20 md:py-48 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-10 sm:mb-16 md:mb-24">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="w-1 sm:w-1.5 md:w-2 h-8 sm:h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-foreground leading-tight">
                National Presence
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-xl font-bold text-muted-foreground ml-4 sm:ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            {/* Head Office */}
            <div className="bg-gradient-to-br from-accent to-blue-700 text-accent-foreground p-6 sm:p-8 md:p-12 group hover:shadow-xl transition-all duration-300">
              <p className="text-accent-foreground font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6">
                Head Office
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                Islamabad
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-bold opacity-95 leading-relaxed">
                Central coordination and management hub
              </p>
            </div>

            {/* Regional Offices with City Buttons */}
            <div className="flex flex-col">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">
                  Regional Offices
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {[
                    "Lahore",
                    "Karachi",
                    "Multan",
                    "Peshawar",
                    "Jhelum",
                    "Gujranwala",
                  ].map((city) => (
                    <div
                      key={city}
                      className="bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-center hover:bg-gradient-to-br hover:from-accent hover:to-blue-700 hover:text-accent-foreground transition-all duration-300"
                    >
                      <p className="font-black text-xs sm:text-sm md:text-lg leading-tight">
                        {city}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-2 border-border p-5 sm:p-8 md:p-10 group hover:border-accent hover:shadow-lg transition-all duration-300">
                <p className="text-muted-foreground font-black text-xs uppercase tracking-widest mb-3 sm:mb-4 md:mb-6">
                  National Coverage
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 md:mb-6">
                  Nationwide
                </h3>
                <div className="text-xs sm:text-sm md:text-base font-bold text-muted-foreground space-y-1 sm:space-y-2 md:space-y-3 leading-relaxed">
                  <p>✓ Including AJK</p>
                  <p>✓ Sub-offices in major cities</p>
                  <p>✓ 24/7 availability everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 sm:py-16 md:py-32 bg-background transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground leading-tight mb-4 sm:mb-6">
              Our Clients
            </h2>
          </div>
          <h3 className="text-base sm:text-lg md:text-2xl font-black mb-6 sm:mb-10 md:mb-12 leading-tight text-foreground text-center">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {[
              "ARY News",
              "Meezan Bank",
              "DESCON",
              "National Bank",
              "PARCO",
              "UNDP",
              "Imtiaz",
              "State Life",
              "Allied Schools",
              "Shifa Hospitals",
            ].map((client) => (
              <div
                key={client}
                className="aspect-square border-2 border-border p-4 md:p-6 flex items-center justify-center text-center hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:border-accent transition-all duration-300 cursor-pointer rounded bg-card"
              >
                <p className="font-black text-xs md:text-base leading-tight text-foreground">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-48 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-7xl font-black text-foreground mb-8 md:mb-10 leading-tight">
            Ready to Protect <br className="hidden md:block" />
            What Matters?
          </h2>
          <p className="text-base md:text-2xl font-bold text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Contact our security experts today for a personalized consultation
            and secure your peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 md:px-14 py-4 md:py-7 font-black text-base md:text-lg rounded-xl hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-300 inline-block w-full sm:w-auto text-center relative group overflow-hidden"
            >
              <span className="relative z-10">Start Your Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>
            </Link>
            <Link
              to="/services"
              className="border-3 border-accent text-accent px-8 md:px-14 py-4 md:py-7 font-black text-base md:text-lg rounded-xl hover:border-foreground hover:bg-accent/10 transition-all duration-300 inline-block w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section className="py-20 md:py-48 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-1.5 md:w-2 h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-3xl md:text-6xl font-black text-foreground leading-tight">
                Our Head Office Location
              </h2>
            </div>
            <p className="text-sm md:text-xl font-bold text-muted-foreground ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Visit us at our Islamabad headquarters for consultations and
              inquiries
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.195486583572!2d72.99590472612844!3d33.66884932093898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ed8b53%3A0x7e482ec7e99bebe0!2sG-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766783293705!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
