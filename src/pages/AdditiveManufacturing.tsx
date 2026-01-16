import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  Zap,
  Clock,
  Shield,
  Factory,
  Plane,
  Heart,
  Atom,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const technologies = [
  {
    name: "Electron Beam Melting (EBM)",
    description: "High-power electron beam for reactive materials",
  },
  {
    name: "Selective Laser Melting (SLM)",
    description: "Precision laser fusion for complex geometries",
  },
  {
    name: "Direct Metal Laser Sintering (DMLS)",
    description: "Fine detail and excellent surface finish",
  },
  {
    name: "Binder Jetting",
    description: "High-volume production capability",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "24-hour response on all inquiries",
  },
  {
    step: 2,
    title: "Design Review",
    description: "DfAM optimization and material selection",
  },
  {
    step: 3,
    title: "Production",
    description: "Quality-controlled manufacturing",
  },
  {
    step: 4,
    title: "Post-Processing",
    description: "Including HIP, machining, and finishing",
  },
  {
    step: 5,
    title: "Quality Assurance",
    description: "Full inspection and certification",
  },
];

const industries = [
  { name: "Aerospace", icon: Plane },
  { name: "Defense", icon: Shield },
  { name: "Energy", icon: Zap },
  { name: "Medical", icon: Heart },
  { name: "Nuclear", icon: Atom },
  { name: "Industrial", icon: Factory },
];

const AdditiveManufacturing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Metal Additive Manufacturing Services
            </h1>
            <p className="text-lg text-foreground-secondary max-w-2xl mb-8">
              Full-service industrial metal 3D printing for aerospace, defense,
              energy, and critical applications. From prototyping to high-volume
              production.
            </p>
            <Button asChild size="lg">
              <Link to="/service-inquiry">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">All Major Metal AM Technologies</h2>
          <p className="text-foreground-secondary mb-12 max-w-2xl">
            Compatible with our full range of refractory and strategic metal
            powders.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-foreground-secondary text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Scale */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">From Prototype to Production</h2>
            <p className="text-foreground-secondary text-lg mb-8">
              We're built to scale with your program requirements. Whether you need
              a single prototype or recurring high-volume production, our certified
              manufacturing network delivers.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Prototyping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Low-Volume</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>High-Volume Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border"
              >
                <industry.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">US-Based Manufacturing</h3>
              <p className="text-foreground-secondary text-sm">
                Domestic production with full supply chain control
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Certified Network</h3>
              <p className="text-foreground-secondary text-sm">
                AS9100D, ISO 9001:2015, ITAR registered
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Integrated Powder Supply</h3>
              <p className="text-foreground-secondary text-sm">
                Seamless material sourcing from our powder division
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-foreground-secondary text-sm">
                Expedited options for urgent requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
              Metal Powder Supply offers comprehensive metal additive manufacturing
              services for aerospace, defense, and industrial applications. Our
              industrial metal 3D printing capabilities span all major technologies
              including EBM, SLM, DMLS, and Binder Jetting.
            </p>
            <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
              As a leading provider of aerospace metal 3D printing and defense
              additive manufacturing, we specialize in titanium additive
              manufacturing services and refractory metal processing. Our US
              additive manufacturing metal capabilities are backed by AS9100D
              certification and ITAR registration.
            </p>
            <p className="text-foreground-secondary text-sm leading-relaxed">
              Contact us for American metal additive manufacturing with integrated
              powder supply, HIP post-processing, and full quality certification.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>
            <p className="text-foreground-secondary mb-8">
              Tell us about your requirements and our team will respond within 24
              hours to schedule a consultation.
            </p>
            <Button asChild size="lg" variant="cta">
              <Link to="/service-inquiry">
                Service Inquiry <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdditiveManufacturing;
