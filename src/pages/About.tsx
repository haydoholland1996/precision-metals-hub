import { Link } from "react-router-dom";
import { Shield, Clock, Users, CheckCircle, Handshake, TrendingDown, Award, ArrowRight, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingBadge from "@/components/PricingBadge";

const certifications = [
  { name: "AS9100D", description: "Aerospace Quality Management" },
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ITAR Registered", description: "Defense Trade Controls" },
];

const pillars = [
  {
    title: "Uncompromising Quality",
    description: "Every batch undergoes rigorous testing and certification. Our AS9100D and ISO 9001:2015 certified processes ensure consistent, aerospace-grade materials.",
    icon: Shield,
  },
  {
    title: "Speed to Market",
    description: "Fast lead times with expedited options for urgent requirements. We understand that downtime costs money.",
    icon: Clock,
  },
  {
    title: "Deep Expertise",
    description: "Our metallurgical team brings decades of experience in refractory metals, helping you select the right material for your application.",
    icon: Atom,
  },
  {
    title: "True Partnership",
    description: "We invest in long-term relationships. Your success is our success—that's why recurring customers get priority treatment.",
    icon: Users,
  },
];

const partnershipBenefits = [
  {
    title: "Competitive Pricing",
    description: "We actively work to beat your current supplier pricing. Share your quotes with us—we're confident we can offer better value without compromising quality.",
    icon: TrendingDown,
  },
  {
    title: "Long-Term Partnerships",
    description: "We don't just sell powder—we build relationships. Recurring customers enjoy priority scheduling, dedicated support, and pricing that improves over time.",
    icon: Handshake,
  },
  {
    title: "Consistent Quality",
    description: "Every batch meets the same exacting standards. Our certified processes ensure you get identical material properties order after order, year after year.",
    icon: Award,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built to Serve American Manufacturing
              </h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Metal Powder Supply was founded with a clear mission: to provide
                  American manufacturers with reliable access to high-quality
                  strategic and refractory metal powders. In an industry where
                  material quality and supply chain security are paramount, we've
                  built a certified network that delivers on both.
                </p>
                <p>
                  Our focus on US-based production ensures complete supply chain
                  visibility and ITAR compliance for defense applications. We work
                  closely with aerospace, defense, energy, and medical customers who
                  require materials that meet the highest standards.
                </p>
                <p>
                  Beyond powder supply, we've expanded into advanced manufacturing
                  services, offering additive manufacturing and PM-HIP capabilities
                  that leverage our materials expertise. This integrated approach
                  allows us to serve customers from raw material to finished
                  component.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quality & Compliance
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Our certified manufacturing network maintains the highest standards for
              quality, traceability, and regulatory compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-lg p-8 border border-border text-center hover:border-primary/50 transition-colors hover:shadow-glow"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                <p className="text-foreground-secondary">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Pricing */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Long-Term Partnerships
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              We're not just a supplier—we're your strategic partner. Our business model is built around helping you succeed with the best pricing, quality, and service in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-foreground-secondary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USA Produced */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
              <img
                src="https://flagcdn.com/w80/us.png"
                alt="USA Flag"
                className="w-20 h-auto mx-auto mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Produced in the USA</h2>
              <p className="text-foreground-secondary text-lg mb-8 max-w-2xl mx-auto">
                All our metal powders are produced domestically, ensuring complete
                supply chain visibility, ITAR compliance, and support for American
                manufacturing. When you partner with Metal Powder Supply, you're
                choosing American quality and reliability.
              </p>
              <Button asChild size="lg" variant="cta">
                <Link to="/powder-inquiry">
                  Start Your Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PricingBadge />
    </Layout>
  );
};

export default About;
