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
    <div className="bg-white">
      {/* Hero Section - Dark Background with Bold Typography */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-black text-accent mb-6 uppercase tracking-widest">
                Professional Security Since 1992
              </p>
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-none">
                Elite Security Services For Your Peace of Mind
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 font-bold mb-12 leading-relaxed">
                Drawn from the armed forces of Pakistan, our personnel deliver
                world-class security with precision, discipline, and unwavering
                commitment to your safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/services"
                  className="bg-accent text-accent-foreground px-10 py-5 font-black text-lg text-center rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="border-3 border-accent text-accent px-10 py-5 font-black text-lg text-center rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 inline-block"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Right Visual - Hero Image */}
            <div className="relative hidden md:block overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/30487150/pexels-photo-30487150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional security officers in training"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gradient-to-r from-primary to-primary text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl font-black leading-relaxed mb-8">
              We believe that in a world where security has become critical, a
              personalized approach is key to ensuring you get the protection
              you deserve.
            </p>
            <p className="text-xl md:text-2xl font-bold opacity-95 leading-relaxed">
              From static guards and elite bodyguards to mobile escorts and
              advanced security equipment, we provide comprehensive, tailored
              solutions for every security need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview - Color Blocked */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-accent rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-black text-primary">
                Our Security Services
              </h2>
            </div>
            <p className="text-xl font-bold text-foreground ml-6 max-w-2xl">
              Comprehensive solutions designed to protect what matters most to
              you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Static Guards - Large Featured Card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-14 rounded-3xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10">
                <Shield className="w-14 h-14 mb-8 text-accent" />
                <h3 className="text-4xl font-black mb-6 leading-tight">
                  Static Security Guards
                </h3>
                <p className="text-lg md:text-xl font-bold opacity-95 mb-8 leading-relaxed">
                  Vetted, trained professionals providing reliable, disciplined
                  on-site protection for your premises
                </p>
                <Link
                  to="/services"
                  className="inline-block text-accent font-black text-lg hover:opacity-70 transition"
                >
                  Learn More →
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-accent opacity-5 rounded-full"></div>
            </div>

            {/* Bodyguards Card */}
            <div className="bg-sky-500 text-white p-14 rounded-3xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10">
                <Users className="w-14 h-14 mb-8 text-white" />
                <h3 className="text-3xl font-black mb-6">Elite Bodyguards</h3>
                <p className="text-base md:text-lg font-bold opacity-95 mb-8">
                  SSG trained specialists for high-level protection
                </p>
                <Link
                  to="/services"
                  className="inline-block text-white font-black text-lg hover:opacity-70 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Mobile Escorts Card */}
            <div className="bg-amber-600 text-white p-14 rounded-3xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10">
                <Truck className="w-14 h-14 mb-8 text-white" />
                <h3 className="text-3xl font-black mb-6">Mobile Escorts</h3>
                <p className="text-base md:text-lg font-bold opacity-95 mb-8">
                  Professional protection during movement and transportation
                </p>
                <Link
                  to="/services"
                  className="inline-block text-white font-black text-lg hover:opacity-70 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Security Equipment Card */}
            <div className="bg-slate-600 text-white p-14 rounded-3xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="relative z-10">
                <Lock className="w-14 h-14 mb-8 text-accent" />
                <h3 className="text-3xl font-black mb-6">Security Equipment</h3>
                <p className="text-base md:text-lg font-bold opacity-95 mb-8">
                  Advanced surveillance and security systems
                </p>
                <Link
                  to="/services"
                  className="inline-block text-accent font-black text-lg hover:opacity-70 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent text-accent-foreground p-12 rounded-2xl text-center hover:shadow-xl transition-all">
              <p className="text-5xl md:text-6xl font-black mb-3">30+</p>
              <p className="text-xl md:text-2xl font-bold">
                Years of Experience
              </p>
            </div>
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center hover:shadow-xl transition-all">
              <p className="text-5xl md:text-6xl font-black mb-3">500+</p>
              <p className="text-xl md:text-2xl font-bold">Trained Personnel</p>
            </div>
            <div className="bg-slate-900 text-white p-12 rounded-2xl text-center hover:shadow-xl transition-all">
              <p className="text-5xl md:text-6xl font-black mb-3">100+</p>
              <p className="text-xl md:text-2xl font-bold">Corporate Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Grid */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-accent rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-black text-primary">
                Why Choose Eagle
              </h2>
            </div>
            <p className="text-xl font-bold text-foreground ml-6 max-w-2xl">
              Three decades of trusted security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-slate-50 border-2 border-border p-10 rounded-2xl hover:shadow-lg transition-all"
              >
                <item.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-black text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-28 md:py-40 bg-slate-50">
        <div className="container mx-auto px-6">
          {/* Section Title with Visual Styling */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-2 h-12 bg-accent rounded-full"></div>
              <h2 className="text-5xl md:text-6xl font-black text-primary">
                National Presence
              </h2>
            </div>
            <p className="text-xl font-bold text-foreground ml-6 max-w-2xl">
              Offices across Pakistan ensuring reliable coverage and local
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-accent p-10 rounded-2xl">
              <p className="text-accent font-black text-sm uppercase tracking-wider mb-3">
                HEAD OFFICE
              </p>
              <h3 className="text-4xl font-black text-primary mb-3">
                Islamabad
              </h3>
              <p className="text-lg font-bold text-foreground">
                Central coordination and management hub
              </p>
            </div>

            <div className="bg-white border-2 border-primary p-10 rounded-2xl">
              <p className="text-primary font-black text-sm uppercase tracking-wider mb-3">
                REGIONAL
              </p>
              <h3 className="text-3xl font-black text-primary mb-4">
                5+ Offices
              </h3>
              <div className="text-base font-bold text-foreground space-y-2">
                <p>• Lahore • Karachi</p>
                <p>• Multan • Peshawar</p>
                <p>• Jhelum • Gujranwala</p>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-600 p-10 rounded-2xl">
              <p className="text-slate-600 font-black text-sm uppercase tracking-wider mb-3">
                COVERAGE
              </p>
              <h3 className="text-3xl font-black text-primary mb-4">
                Nationwide
              </h3>
              <div className="text-base font-bold text-foreground space-y-2">
                <p>Including AJK</p>
                <p>Sub-offices in major cities</p>
                <p>24/7 availability everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-black mb-12">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                className="border-2 border-primary-foreground p-6 rounded-xl text-center hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <p className="font-black text-base md:text-lg">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-black text-primary mb-8 leading-none">
            Ready to Protect What Matters?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact our security experts today for a personalized consultation
            and secure your peace of mind
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-12 py-6 font-black text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              Start Your Consultation
            </Link>
            <Link
              to="/services"
              className="border-3 border-primary text-primary px-12 py-6 font-black text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-black text-2xl mb-4">Eagle Security</h4>
              <p className="text-base font-bold opacity-80 leading-relaxed">
                Professional security services since 1992, protecting businesses
                and individuals across Pakistan.
              </p>
            </div>
            <div>
              <h5 className="font-black text-lg mb-6">Services</h5>
              <ul className="space-y-3 text-base font-bold opacity-80">
                <li>
                  <Link to="/services" className="hover:text-accent transition">
                    Static Guards
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent transition">
                    Bodyguards
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent transition">
                    Mobile Escorts
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent transition">
                    Equipment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-lg mb-6">Company</h5>
              <ul className="space-y-3 text-base font-bold opacity-80">
                <li>
                  <Link to="/about" className="hover:text-accent transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/why-choose-us"
                    className="hover:text-accent transition"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-lg mb-6">Contact</h5>
              <p className="text-base font-bold opacity-80 mb-2">
                Islamabad, Pakistan
              </p>
              <p className="text-base font-bold opacity-80 mb-6">
                Available 24/7
              </p>
              <p className="text-base font-bold text-accent">
                security@eagleguards.pk
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-base font-bold opacity-60">
              © 2024 Eagle Security Guards. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
