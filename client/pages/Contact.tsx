import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-12 sm:py-16 md:py-24 lg:py-32 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-foreground leading-tight">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-bold leading-relaxed max-w-2xl">
            Contact our security experts for a consultation or inquiries
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {/* Contact Info Cards */}
            <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-3 sm:mb-4">
                Head Office
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1 sm:mb-2">Islamabad</p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                Central coordination hub for all operations
              </p>
            </div>

            <div
              className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <Phone className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-3 sm:mb-4">
                Phone
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1 sm:mb-2">
                For inquiries and quotes
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                Contact through our form or visit office
              </p>
            </div>

            <div
              className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <Clock className="w-8 sm:w-10 h-8 sm:h-10 text-accent mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-3 sm:mb-4">
                Response Time
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-bold mb-1 sm:mb-2">
                Quick turnaround
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 font-bold leading-relaxed">
                We prioritize all security consultations
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-8 sm:mb-10">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-600/10 border-2 border-green-600 text-green-600 dark:text-green-400 p-4 sm:p-6 mb-6 sm:mb-8 rounded-lg">
                <p className="font-black mb-2 text-base sm:text-lg">
                  Message Sent Successfully!
                </p>
                <p className="font-bold text-sm sm:text-base">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 rounded-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 rounded-lg"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="security-guards">
                      Static Security Guards
                    </option>
                    <option value="bodyguards">Bodyguards</option>
                    <option value="mobile-escorts">Mobile Escorts</option>
                    <option value="equipment">Security Equipment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-black text-foreground mb-2 sm:mb-3 text-sm sm:text-base"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-input border-2 border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300 rounded-lg"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-blue-800 text-accent-foreground py-2.5 sm:py-3 md:py-4 px-4 font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-card transition-colors duration-300 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-center mb-8 sm:mb-12 md:mb-16">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Head Office */}
            <div className="bg-background p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom">
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-4 sm:mb-6">
                Head Office
              </h3>
              <p className="font-black text-foreground mb-2 text-sm sm:text-base">Islamabad</p>
              <p className="text-muted-foreground font-bold text-xs sm:text-sm leading-relaxed">
                Central coordination and management
              </p>
            </div>

            {/* Regional Offices */}
            <div
              className="bg-background p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-4 sm:mb-6">
                Regional Offices
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground font-bold text-xs sm:text-sm">
                <li>• South (Multan)</li>
                <li>• Lahore</li>
                <li>• Karachi</li>
                <li>• Jhelum</li>
                <li>• Gujranwala</li>
              </ul>
            </div>

            {/* Area & Sub Offices */}
            <div
              className="bg-background p-6 sm:p-8 rounded-xl border-2 border-border shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 animate-slide-in-from-bottom"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-lg sm:text-2xl font-black text-foreground mb-4 sm:mb-6">
                Area & Sub Offices
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground font-bold text-xs sm:text-sm">
                <li>• Sargodha • Peshawar</li>
                <li>• Mirpur • Sialkot</li>
                <li>• Sheikhupura • Chakwal</li>
                <li>• Muzafarabad • Rawalakot</li>
                <li>• Gharo • Karachi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
