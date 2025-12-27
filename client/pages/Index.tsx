import { Link } from "react-router-dom";
import { Shield, Users, Truck, Lock, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CompanyWiseDeployments from "@/components/CompanyWiseDeployments";
import GuardsByRegion from "@/components/GuardsByRegion";

export default function Home() {
  return (
    <div
      className="text-foreground"
      style={{
        background:
          "linear-gradient(to bottom, #f9f9f9 0%, #f3f3f3 40%, #efefef 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background via-background to-background/95 text-foreground relative overflow-hidden py-12 sm:py-16 md:py-32 transition-colors duration-300">
        {/* Hero Background Image - Right Half Only */}
        <div
          className="hidden md:block absolute right-12 top-8 w-[calc(50%+2rem)] h-full -mr-6"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2F151c661f676241159dc387d4f0557eb8%2Fc6fb9be958f544c6a63756ea3bde1005?format=webp&width=800')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-1 h-10 md:h-12 bg-accent rounded-full"></div>
                <p className="text-xs sm:text-sm font-black text-accent uppercase tracking-widest">
                  Professional Security Since 1992
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 leading-tight text-foreground">
                Elite Security Services For Your Peace of Mind
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-bold mb-8 sm:mb-12 leading-relaxed max-w-lg">
                Drawn from the armed forces of Pakistan, our personnel deliver
                world-class security with precision, discipline, and unwavering
                commitment to your safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/services"
                  className="bg-accent text-accent-foreground px-6 md:px-8 py-2.5 md:py-3 font-black text-sm md:text-base text-center hover:shadow-xl transition-shadow duration-300 inline-block rounded-none"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-accent text-accent px-6 md:px-8 py-2.5 md:py-3 font-black text-sm md:text-base text-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300 inline-block rounded-none"
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
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300">
        <div className="container mx-auto px-0 sm:px-6 w-full">
          {/* Section Title with Visual Styling */}
          <div className="mb-12 sm:mb-16 md:mb-24 px-4 sm:px-0">
            <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                Our Security Services
              </h2>
            </div>
            <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 sm:ml-0 md:ml-0 max-w-3xl leading-relaxed">
              Comprehensive solutions designed to protect what matters most to
              you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 sm:px-0">
            {/* Service 1 - Bodyguards */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                  <img
                    src="https://i.ibb.co/1fF8J0kc/Screenshot-2025-12-27-at-10-18-51-PM.png"
                    alt="Elite bodyguard protection services"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/services"
                      className="bg-accent text-accent-foreground px-6 py-2.5 font-black text-sm md:text-base hover:shadow-lg transition-shadow duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-foreground">
                    Elite Bodyguards
                  </h3>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-muted-foreground mb-6 flex-grow">
                    Our SSG-trained specialists deliver executive-level
                    protection with tactical expertise and discretion. Every
                    bodyguard undergoes rigorous military training and
                    psychological evaluation.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-black text-sm md:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - Static Guards */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                  <img
                    src="https://i.ibb.co/xK0H4mRY/Screenshot-2025-12-27-at-10-17-59-PM.png"
                    alt="Professional security guards with tactical gear"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/services"
                      className="bg-accent text-accent-foreground px-6 py-2.5 font-black text-sm md:text-base hover:shadow-lg transition-shadow duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-foreground">
                    Static Security Guards
                  </h3>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-muted-foreground mb-6 flex-grow">
                    Our vetted security professionals provide round-the-clock
                    on-site protection with military discipline and precision.
                    Each guard undergoes comprehensive background screening.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-black text-sm md:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Mobile Escorts */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                  <img
                    src="https://i.ibb.co/MxQRyL7x/Screenshot-2025-12-27-at-10-19-22-PM.png"
                    alt="Professional mobile escort security services"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/services"
                      className="bg-accent text-accent-foreground px-6 py-2.5 font-black text-sm md:text-base hover:shadow-lg transition-shadow duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Truck className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-foreground">
                    Mobile Escorts
                  </h3>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-muted-foreground mb-6 flex-grow">
                    Our mobile escort teams provide seamless protection during
                    transit and travel. We offer route planning, threat
                    assessment, and coordinated security response.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-black text-sm md:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4 - Security Equipment */}
            <div className="group overflow-hidden transition-all duration-300">
              <div className="bg-card border border-border/50 overflow-hidden transition-all duration-300 h-full flex flex-col hover:border-accent/30">
                <div className="relative overflow-hidden bg-gradient-to-br from-pk-green-main/10 to-accent/10 aspect-video">
                  <img
                    src="https://i.ibb.co/1fHGWYGz/Screenshot-2025-12-27-at-10-20-06-PM.png"
                    alt="Advanced security equipment and surveillance systems"
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <Link
                      to="/services"
                      className="bg-accent text-accent-foreground px-6 py-2.5 font-black text-sm md:text-base hover:shadow-lg transition-shadow duration-300"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Lock className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-foreground">
                    Security Equipment
                  </h3>
                  <p className="text-sm md:text-base font-bold leading-relaxed text-muted-foreground mb-6 flex-grow">
                    We deploy state-of-the-art surveillance, access control, and
                    security monitoring systems tailored to your facility. From
                    CCTV networks to integrated platforms.
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-black text-sm md:text-base hover:text-accent-foreground transition-colors duration-300 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-20 border-y border-pk-green-main/30 transition-colors duration-300">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/99 via-background/95 to-background/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-4 sm:mb-6 md:mb-8 text-foreground">
              Why Professional Security Matters
            </h2>
            <p className="text-sm sm:text-base md:text-xl font-black leading-relaxed mb-4 sm:mb-6 text-foreground">
              In a world where security has become critical, a personalized
              approach is key to ensuring you get the protection you deserve.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-black leading-relaxed text-foreground">
              From static guards and elite bodyguards to mobile escorts and
              advanced security equipment, we provide comprehensive, tailored
              solutions for every security need backed by decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-background/95 transition-colors duration-300">
        <div className="container mx-auto px-0 sm:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6">
            {/* Experience Card */}
            <div className="aspect-square bg-card border border-border text-foreground p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-black group cursor-pointer">
              <div className="mb-4 md:mb-6 flex items-center justify-center h-16 md:h-20">
                <AnimatedCounter
                  targetNumber={30}
                  suffix="+"
                  duration={2000}
                  className="text-5xl md:text-6xl font-black group-hover:text-white transition-colors duration-300"
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-white transition-colors duration-300">
                Years of Experience
              </h3>
              <p className="text-xs md:text-sm font-black group-hover:text-white transition-colors duration-300">
                Protecting businesses since 1992
              </p>
            </div>

            {/* Personnel Card */}
            <div className="aspect-square bg-card border border-border text-foreground p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-black group cursor-pointer">
              <div className="mb-4 md:mb-6 flex items-center justify-center h-16 md:h-20">
                <AnimatedCounter
                  targetNumber={500}
                  suffix="+"
                  duration={2000}
                  className="text-5xl md:text-6xl font-black group-hover:text-white transition-colors duration-300"
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-white transition-colors duration-300">
                Trained Personnel
              </h3>
              <p className="text-xs md:text-sm font-black group-hover:text-white transition-colors duration-300">
                Elite security professionals
              </p>
            </div>

            {/* Clients Card */}
            <div className="aspect-square bg-card border border-border text-foreground p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-black group cursor-pointer">
              <div className="mb-4 md:mb-6 flex items-center justify-center h-16 md:h-20">
                <AnimatedCounter
                  targetNumber={100}
                  suffix="+"
                  duration={2000}
                  className="text-5xl md:text-6xl font-black group-hover:text-white transition-colors duration-300"
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-white transition-colors duration-300">
                Corporate Clients
              </h3>
              <p className="text-xs md:text-sm font-black group-hover:text-white transition-colors duration-300">
                Trusted by leading organizations
              </p>
            </div>

            {/* Total Guards Deployed Card */}
            <div className="aspect-square bg-card border border-border text-foreground p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:bg-black group cursor-pointer">
              <div className="mb-4 md:mb-6 flex items-center justify-center h-16 md:h-20">
                <AnimatedCounter
                  targetNumber={1541}
                  suffix="+"
                  duration={2000}
                  className="text-5xl md:text-6xl font-black group-hover:text-white transition-colors duration-300"
                  style={{
                    color: "var(--accent)",
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-2 group-hover:text-white transition-colors duration-300">
                Total Guards Deployed
              </h3>
              <p className="text-xs md:text-sm font-black group-hover:text-white transition-colors duration-300">
                Active security personnel across Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background/95 via-background to-background transition-colors duration-300">
        <div className="container mx-auto px-0 sm:px-6 w-full">
          {/* Section Title with Visual Styling */}
          <div className="mb-12 sm:mb-16 md:mb-24 px-4 sm:px-0">
            <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                Why Choose Eagle
              </h2>
            </div>
            <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
              Three decades of trusted security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6">
            {[
              {
                title: "Military Excellence",
                desc: "Personnel from Pakistan's armed forces with proven expertise",
                image:
                  "https://i.ibb.co/bM3xPJ6k/Screenshot-2025-12-27-at-10-22-08-PM.png",
              },
              {
                title: "Thorough Vetting",
                desc: "Comprehensive screening and background verification process",
                image:
                  "https://i.ibb.co/JRBrY058/Screenshot-2025-12-27-at-10-21-06-PM.png",
              },
              {
                title: "24/7 Availability",
                desc: "Round-the-clock support and emergency response team",
                image:
                  "https://i.ibb.co/QvZZ1D9z/Screenshot-2025-12-27-at-10-21-43-PM.png",
              },
              {
                title: "Customized Solutions",
                desc: "Tailored security plans for your specific requirements",
                image:
                  "https://i.ibb.co/Dfm7BDgy/Screenshot-2025-12-27-at-10-20-35-PM.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-pk-green-main/60 group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/55 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-black mb-3 text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-white/95 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background to-background/95 transition-colors duration-300">
        <div className="container mx-auto px-0 sm:px-6 w-full">
          {/* Section Title with Visual Styling */}
          <div className="mb-12 sm:mb-16 md:mb-24 px-4 sm:px-0">
            <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                National Presence
              </h2>
            </div>
            <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-0">
            {/* Left Side - Cities and Offices */}
            <div className="flex flex-col space-y-8 md:space-y-10">
              {/* Head Office */}
              <div className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white p-8 md:p-12 transition-all duration-300 hover:shadow-lg hover:bg-white hover:text-foreground group cursor-pointer border border-pk-green-main/20">
                <p className="font-black text-xs uppercase tracking-widest mb-4 md:mb-6 group-hover:text-foreground transition-colors duration-300">
                  Head Office
                </p>
                <h3 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight group-hover:text-foreground transition-colors duration-300">
                  Islamabad
                </h3>
                <p className="text-base md:text-lg font-black group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  Central coordination and management hub
                </p>
              </div>

              {/* Regional Offices with City Buttons */}
              <div>
                <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-4 md:mb-6">
                  Regional Offices
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
                      className="bg-gradient-to-br from-pk-green-main to-[#2d6b3d] text-white px-4 md:px-5 py-2 md:py-2.5 text-center font-black text-xs md:text-sm leading-tight transition-all duration-300 hover:shadow-lg hover:bg-foreground group cursor-pointer border border-pk-green-main/20"
                    >
                      <span className="group-hover:text-white transition-colors duration-300">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-2 border-pk-green-main/30 bg-gradient-to-br from-background to-background/80 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:bg-pk-green-main cursor-pointer group">
                <p className="text-pk-green-main font-black text-xs uppercase tracking-widest mb-4 md:mb-6 group-hover:text-white transition-colors duration-300">
                  National Coverage
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-foreground group-hover:text-white transition-colors duration-300">
                  Nationwide
                </h3>
                <div className="text-sm md:text-base font-black text-muted-foreground group-hover:text-white space-y-2 md:space-y-3 leading-relaxed transition-colors duration-300">
                  <p>✓ Including AJK</p>
                  <p>✓ Sub-offices in major cities</p>
                  <p>✓ 24/7 availability everywhere</p>
                </div>
              </div>
            </div>

            {/* Right Side - Pakistan Map */}
            <div className="flex items-center justify-end pl-4 md:pl-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Facfe06c5cde64b46837eb142f7cf7313%2F2569c5f933e445229e02928b632df203?format=webp&width=800"
                alt="Pakistan map showing Eagle Security locations"
                className="w-full h-auto max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 sm:py-14 md:py-24 bg-gradient-to-b from-background via-background/95 to-background transition-colors duration-300 border-y border-pk-green-main/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
              Our Clients
            </h2>
            <p className="text-base md:text-lg font-bold text-muted-foreground">
              Trusted by Leading Organizations
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
                className="aspect-square border border-border bg-card p-4 md:p-6 flex items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <p className="font-black text-xs md:text-sm leading-tight text-foreground">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guards By Region Section */}
      <GuardsByRegion />

      {/* Company Wise Deployments Section */}
      <CompanyWiseDeployments />

      {/* CTA Section */}
      <section className="py-14 md:py-28 bg-gradient-to-b from-background to-background/98 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
            Ready to Protect What Matters?
          </h2>
          <p className="text-base md:text-xl font-bold text-muted-foreground mb-10 md:mb-14 leading-relaxed">
            Contact our security experts today for a personalized consultation
            and secure your peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-6 md:px-8 py-2.5 md:py-3 font-black text-sm md:text-base text-center hover:shadow-lg transition-shadow duration-300 inline-block rounded-none"
            >
              Start Your Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-accent text-accent px-6 md:px-8 py-2.5 md:py-3 font-black text-sm md:text-base text-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300 inline-block rounded-none"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section with Google Maps */}
      <section className="py-14 md:py-28 bg-gradient-to-b from-background/98 to-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
              <h2 className="text-3xl md:text-6xl font-black leading-tight">
                Our Head Office Location
              </h2>
            </div>
            <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
              Visit us at our Islamabad headquarters for consultations and
              inquiries
            </p>
          </div>

          <div className="overflow-hidden border border-border transition-shadow duration-300 hover:shadow-lg">
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
