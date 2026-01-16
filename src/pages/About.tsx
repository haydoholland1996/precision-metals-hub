import { Factory, Shield, Clock, Users, CheckCircle, Handshake, TrendingDown, Award } from "lucide-react";
import Layout from "@/components/Layout";
import PricingBadge from "@/components/PricingBadge";

const certifications = [
  { name: "AS9100D", description: "Aerospace Quality Management" },
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ITAR Registered", description: "Defense Trade Controls" },
];

const pillars = [
  {
    title: "Quality",
    description: "Rigorous standards at every step of production",
    icon: Shield,
  },
  {
    title: "Speed",
    description: "Fast lead times with expedited options available",
    icon: Clock,
  },
  {
    title: "Expertise",
    description: "Deep metallurgical knowledge and technical support",
    icon: Factory,
  },
  {
    title: "Partnership",
    description: "Long-term customer relationships built on trust",
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
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              American Metal Powder Excellence
            </h1>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Your trusted US source for strategic metal powders and advanced
              manufacturing. Serving aerospace, defense, and critical industries
              with American-produced materials.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-foreground-secondary">
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
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Quality & Compliance
          </h2>
          <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
            Our certified manufacturing network maintains the highest standards for
            quality, traceability, and regulatory compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-lg p-8 border border-border text-center"
              >
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-foreground-secondary text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{pillar.title}</h3>
                <p className="text-foreground-secondary text-sm">
                  {pillar.description}
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
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="https://flagcdn.com/w80/us.png"
              alt="USA Flag"
              className="w-20 h-auto mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-6">Produced in the USA</h2>
            <p className="text-foreground-secondary">
              All our metal powders are produced domestically, ensuring complete
              supply chain visibility, ITAR compliance, and support for American
              manufacturing. When you partner with Metal Powder Supply, you're
              choosing American quality and reliability.
            </p>
          </div>
        </div>
      </section>

      <PricingBadge />
    </Layout>
  );
};

export default About;
