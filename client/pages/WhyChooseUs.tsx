import { Award, Shield, Users, CheckCircle2, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-h1 font-bold mb-6">Why Choose Eagle Security Guards</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Excellence in security services trusted by Pakistan's leading organizations
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Military Excellence */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Military Excellence</h3>
              <p className="text-foreground leading-relaxed">
                Our personnel are drawn from the armed forces of Pakistan, bringing
                professional military training, discipline, and experience.
              </p>
            </div>

            {/* Thorough Vetting */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Thorough Vetting</h3>
              <p className="text-foreground leading-relaxed">
                Comprehensive personal data screening ensures only trusted, verified
                individuals are part of our team. No compromises on integrity.
              </p>
            </div>

            {/* Elite Special Forces */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Elite Special Forces</h3>
              <p className="text-foreground leading-relaxed">
                Bodyguards drawn from Special Service Group (SSG) - the cream of
                Pakistan's most elite military units.
              </p>
            </div>

            {/* Professional Training */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Professional Training</h3>
              <p className="text-foreground leading-relaxed">
                Continuous training in modern security protocols, threat assessment,
                and emergency response procedures.
              </p>
            </div>

            {/* Comprehensive Solutions */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Comprehensive Solutions</h3>
              <p className="text-foreground leading-relaxed">
                From personnel protection to cutting-edge security equipment, we
                provide complete coverage for every scenario.
              </p>
            </div>

            {/* Nationwide Presence */}
            <div className="p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-h3 font-bold text-primary mb-4">Nationwide Presence</h3>
              <p className="text-foreground leading-relaxed">
                Multiple offices across Pakistan ensure quick response and consistent
                service quality wherever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-16 font-bold">
            Trusted by Pakistan's Leading Organizations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              "ARY News",
              "National Bank of Pakistan",
              "Meezan Bank",
              "Government of Pakistan",
              "DESCON",
              "PARCO",
              "State Life",
              "Shifa International Hospitals",
            ].map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-lg border border-border text-center"
              >
                <p className="font-semibold text-foreground">{client}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Government agencies, financial institutions, media companies, and
            multinational corporations depend on Eagle Security Guards for their
            safety and security needs.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-h2 text-primary text-center mb-16 font-bold">
            What Sets Us Apart
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Source of Personnel</h4>
                  <p className="text-foreground">
                    Armed forces of Pakistan with military discipline
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Vetting Process</h4>
                  <p className="text-foreground">
                    Comprehensive screening and database verification
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Training Standards</h4>
                  <p className="text-foreground">
                    Critical security requirement training and protocols
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Geographic Reach</h4>
                  <p className="text-foreground">
                    Multiple offices across Pakistan for local expertise
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Service Range</h4>
                  <p className="text-foreground">
                    Static guards, bodyguards, escorts, and equipment
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg border border-border">
                  <h4 className="font-bold text-primary mb-2">Client Base</h4>
                  <p className="text-foreground">
                    Government, banking, media, and corporate sectors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-h2 text-primary-foreground mb-6 font-bold">
            Experience the Eagle Security Difference
          </h2>
          <p className="text-xl text-primary-foreground mb-8 opacity-95">
            Contact us today for a security consultation
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 font-bold text-lg rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
