import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Let's discuss how we can support your requirements. Our team is ready
              to help with powder inquiries, manufacturing services, and technical
              questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Phone</p>
                    <p className="font-medium">(555) 123-4567</p>
                  </div>
                </a>

                <a
                  href="mailto:info@metalpowdersupply.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Email</p>
                    <p className="font-medium">info@metalpowdersupply.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Address</p>
                    <p className="font-medium">
                      123 Industrial Parkway
                      <br />
                      Suite 100
                      <br />
                      Houston, TX 77001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Cards */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Submit an Inquiry</h2>
              <div className="space-y-6">
                <Link
                  to="/powder-inquiry"
                  className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    Powder Inquiries
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-foreground-secondary">
                    Looking for refractory or strategic metal powders? Submit your
                    requirements and we'll respond within 24 hours.
                  </p>
                </Link>

                <Link
                  to="/service-inquiry"
                  className="group block p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow"
                >
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    Service Inquiries
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-foreground-secondary">
                    Need additive manufacturing or PM-HIP services? Tell us about
                    your project and we'll schedule a consultation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-background-tertiary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-foreground-muted mx-auto mb-4" />
          <p className="text-foreground-muted">Map Integration</p>
          <p className="text-foreground-muted text-sm">Houston, TX</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
