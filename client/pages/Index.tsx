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

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-background text-foreground relative overflow-hidden py-24 md:py-40 transition-colors duration-300 animate-fade-in">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-black text-accent mb-6 uppercase tracking-widest">
                Professional Security Since 1992
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
                Elite Security Services For Your Peace of Mind
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-bold mb-12 leading-relaxed">
                Drawn from the armed forces of Pakistan, our personnel deliver
                world-class security with precision, discipline, and unwavering
                commitment to your safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/services"
                  className="bg-accent text-accent-foreground px-8 sm:px-10 py-4 sm:py-5 font-black text-base sm:text-lg text-center rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="border-3 border-accent text-accent px-8 sm:px-10 py-4 sm:py-5 font-black text-base sm:text-lg text-center rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-block"
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
      <section className="py-28 md:py-40 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-1.5 md:w-2 h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-3xl md:text-6xl font-black text-foreground leading-tight">
                Our Security Services
              </h2>
            </div>
            <p className="text-sm md:text-xl font-bold text-muted-foreground ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Comprehensive solutions designed to protect what matters most to
              you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Static Guards - Large Featured Card */}
            <div
              className="md:col-span-2 lg:col-span-1 bg-card text-foreground p-0 rounded-3xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300 border border-border animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src="https://images.pexels.com/photos/29656069/pexels-photo-29656069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional security guards with tactical gear"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 md:p-10">
                <Shield className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-3xl font-black mb-4 leading-tight text-foreground">
                  Static Security Guards
                </h3>
                <p className="text-base md:text-lg font-bold opacity-90 mb-6 leading-relaxed text-muted-foreground">
                  Vetted, trained professionals providing reliable, disciplined
                  on-site protection for your premises
                </p>
                <Link
                  to="/services"
                  className="inline-block text-accent font-black text-lg hover:text-primary transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Bodyguards Card */}
            <div
              className="bg-blue-600 text-white p-8 md:p-12 rounded-2xl md:rounded-3xl overflow-hidden relative group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative z-10">
                <Users className="w-10 md:w-14 h-10 md:h-14 mb-6 md:mb-8 text-white" />
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">
                  Elite Bodyguards
                </h3>
                <p className="text-sm md:text-lg font-bold opacity-95 mb-6 md:mb-8 leading-relaxed">
                  SSG trained specialists for high-level protection
                </p>
                <Link
                  to="/services"
                  className="inline-block text-white font-black text-base md:text-lg hover:text-blue-200 transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white opacity-5 group-hover:opacity-10 rounded-full transition-all duration-300"></div>
            </div>

            {/* Mobile Escorts Card */}
            <div
              className="bg-orange-600 text-white p-8 md:p-12 rounded-2xl md:rounded-3xl overflow-hidden relative group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative z-10">
                <Truck className="w-10 md:w-14 h-10 md:h-14 mb-6 md:mb-8 text-white" />
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">
                  Mobile Escorts
                </h3>
                <p className="text-sm md:text-lg font-bold opacity-95 mb-6 md:mb-8 leading-relaxed">
                  Professional protection during movement and transportation
                </p>
                <Link
                  to="/services"
                  className="inline-block text-white font-black text-base md:text-lg hover:text-orange-200 transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white opacity-5 group-hover:opacity-10 rounded-full transition-all duration-300"></div>
            </div>

            {/* Security Equipment Card */}
            <div
              className="bg-slate-700 text-white p-8 md:p-12 rounded-2xl md:rounded-3xl overflow-hidden relative group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative z-10">
                <Lock className="w-10 md:w-14 h-10 md:h-14 mb-6 md:mb-8 text-accent" />
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">
                  Security Equipment
                </h3>
                <p className="text-sm md:text-lg font-bold opacity-95 mb-6 md:mb-8 leading-relaxed">
                  Advanced surveillance and security systems
                </p>
                <Link
                  to="/services"
                  className="inline-block text-accent font-black text-base md:text-lg hover:text-white transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-accent opacity-5 group-hover:opacity-10 rounded-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-card text-foreground relative overflow-hidden py-20 md:py-32 border-y border-border transition-colors duration-300">
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3880225/pexels-photo-3880225.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 md:mb-8 text-foreground">
              Why Professional Security Matters
            </h2>
            <p className="text-base md:text-xl font-bold opacity-90 leading-relaxed mb-6 text-muted-foreground">
              In a world where security has become critical, a personalized
              approach is key to ensuring you get the protection you deserve.
            </p>
            <p className="text-base md:text-lg font-bold opacity-80 leading-relaxed text-muted-foreground">
              From static guards and elite bodyguards to mobile escorts and
              advanced security equipment, we provide comprehensive, tailored
              solutions for every security need backed by decades of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-accent text-accent-foreground p-8 md:p-12 rounded-xl md:rounded-2xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-4xl md:text-6xl font-black mb-2 md:mb-3">
                30+
              </p>
              <p className="text-base md:text-2xl font-bold leading-relaxed">
                Years of Experience
              </p>
            </div>
            <div className="bg-blue-600 text-white p-8 md:p-12 rounded-xl md:rounded-2xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-4xl md:text-6xl font-black mb-2 md:mb-3">
                500+
              </p>
              <p className="text-base md:text-2xl font-bold leading-relaxed">
                Trained Personnel
              </p>
            </div>
            <div className="bg-slate-700 text-white p-8 md:p-12 rounded-xl md:rounded-2xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-4xl md:text-6xl font-black mb-2 md:mb-3">
                100+
              </p>
              <p className="text-base md:text-2xl font-bold leading-relaxed">
                Corporate Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-20 md:py-40 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-1.5 md:w-2 h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-3xl md:text-6xl font-black text-foreground leading-tight">
                Why Choose Eagle
              </h2>
            </div>
            <p className="text-sm md:text-xl font-bold text-muted-foreground ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Three decades of trusted security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="bg-card border-2 border-border p-6 md:p-10 rounded-xl md:rounded-2xl hover:shadow-2xl hover:border-accent hover:-translate-y-2 transition-all duration-300 animate-slide-in-from-bottom"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.icon className="w-10 md:w-12 h-10 md:h-12 text-accent mb-4 md:mb-6 transition-transform duration-300" />
                <h3 className="text-lg md:text-2xl font-black text-foreground mb-3 md:mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg font-bold text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-20 md:py-48 bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-16 md:mb-24">
            <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-1.5 md:w-2 h-10 md:h-12 bg-accent rounded-full flex-shrink-0 mt-1"></div>
              <h2 className="text-3xl md:text-6xl font-black text-foreground leading-tight">
                National Presence
              </h2>
            </div>
            <p className="text-sm md:text-xl font-bold text-muted-foreground ml-6 md:ml-8 max-w-2xl leading-relaxed">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card border-2 border-accent p-8 md:p-12 rounded-xl md:rounded-3xl hover:shadow-2xl hover:border-yellow-300 transition-all duration-300">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-3 md:mb-4">
                Head Office
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-3 md:mb-4">
                Islamabad
              </h3>
              <p className="text-base md:text-lg font-bold text-muted-foreground leading-relaxed">
                Central coordination and management hub
              </p>
            </div>

            <div className="bg-card border-2 border-blue-500 p-8 md:p-12 rounded-xl md:rounded-3xl hover:shadow-2xl transition-all duration-300">
              <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-3 md:mb-4">
                Regional Offices
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6">
                5+
              </h3>
              <div className="text-sm md:text-base font-bold text-muted-foreground space-y-2 md:space-y-3 leading-relaxed">
                <p>• Lahore • Karachi</p>
                <p>• Multan • Peshawar</p>
                <p>• Jhelum • Gujranwala</p>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-8 md:p-12 rounded-xl md:rounded-3xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300">
              <p className="text-muted-foreground font-black text-xs uppercase tracking-widest mb-3 md:mb-4">
                National Coverage
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6">
                Nationwide
              </h3>
              <div className="text-sm md:text-base font-bold text-muted-foreground space-y-2 md:space-y-3 leading-relaxed">
                <p>Including AJK</p>
                <p>Sub-offices in major cities</p>
                <p>24/7 availability everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 md:py-32 bg-background transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-4xl font-black mb-10 md:mb-12 leading-tight text-foreground">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
              className="bg-accent text-accent-foreground px-8 md:px-14 py-4 md:py-7 font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block w-full sm:w-auto text-center"
            >
              Start Your Consultation
            </Link>
            <Link
              to="/services"
              className="border-3 border-accent text-accent px-8 md:px-14 py-4 md:py-7 font-black text-base md:text-lg rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-block w-full sm:w-auto text-center"
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
