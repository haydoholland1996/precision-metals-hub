import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Plane,
  Zap,
  Factory,
  Layers,
  FlaskConical,
  Clock,
  Target,
  Award,
  Heart,
  Atom,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import facilityHero from "@/assets/facility-hero.jpg";

const services = [
  {
    name: "Additive Manufacturing",
    icon: Layers,
    description: "Full-service industrial metal 3D printing for aerospace, defense, energy, and critical applications. From prototyping to high-volume production.",
    href: "/services/additive-manufacturing",
    technologies: ["EBM", "SLM", "DMLS", "Binder Jetting"],
  },
  {
    name: "PM-HIP Manufacturing",
    icon: FlaskConical,
    description: "Powder Metallurgy – Hot Isostatic Pressing for near-net-shape components with forge-like properties. Defect-free, fully dense parts.",
    href: "/services/pm-hip",
    technologies: ["Near-Net-Shape", "Forge-Like Properties", "Defect-Free", "Fully Dense"],
  },
];

const capabilities = [
  {
    title: "Complete Material Integration",
    description: "Seamless powder sourcing from our own materials division ensures optimal powder-to-part performance.",
    icon: Target,
  },
  {
    title: "Certified Quality",
    description: "AS9100D and ISO 9001:2015 certified manufacturing with full traceability and documentation.",
    icon: Shield,
  },
  {
    title: "Fast Turnaround",
    description: "24-hour quote response and expedited production options for urgent requirements.",
    icon: Clock,
  },
  {
    title: "Expert Support",
    description: "Our metallurgical team provides DfAM optimization and material selection guidance.",
    icon: Award,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "24-hour response on all inquiries with initial feasibility assessment.",
  },
  {
    step: 2,
    title: "Design Review",
    description: "DfAM optimization, material selection, and process planning.",
  },
  {
    step: 3,
    title: "Production",
    description: "Quality-controlled manufacturing using the optimal technology.",
  },
  {
    step: 4,
    title: "Post-Processing",
    description: "HIP, heat treatment, machining, and finishing as required.",
  },
  {
    step: 5,
    title: "Delivery",
    description: "Full inspection, certification, and on-time delivery.",
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

const materials = [
  "Titanium (Ti)",
  "Tungsten (W)",
  "Molybdenum (Mo)",
  "Tantalum (Ta)",
  "Niobium (Nb)",
  "C103 Alloy",
  "Specialty Alloys",
];

const differentiators = [
  "Integrated powder supply and manufacturing",
  "AS9100D and ISO 9001:2015 certified",
  "US-based production facilities",
  "From prototyping to production scale",
  "All major refractory and strategic metals",
  "Complete post-processing capabilities",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facilityHero})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Manufacturing
              <span className="block text-gradient mt-2">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8">
              From metal additive manufacturing to PM-HIP processing, we deliver precision 
              components for aerospace, defense, and mission-critical applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/service-inquiry">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-background-secondary border-y border-border">
        <div className="container py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">AS9100D Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">Integrated Powder Supply</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                className="w-5 h-auto"
              />
              <span className="font-medium text-foreground">US Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow card-glow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-foreground-secondary text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Our integrated approach combines material expertise with advanced manufacturing 
              technology to deliver components that meet the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <capability.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Concept to Component
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              A streamlined process designed for speed, quality, and transparency at every stage.
            </p>
          </div>

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

      {/* Materials */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Materials We Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Refractory & Strategic Metals
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              We manufacture components from the full range of strategic and refractory metals.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {materials.map((material) => (
              <div
                key={material}
                className="px-6 py-3 bg-card rounded-lg border border-border text-lg font-medium"
              >
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Trusted by engineers and procurement teams where performance is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <industry.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators + Stats */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
                The Metal Powder Supply Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integrated Manufacturing Solutions
              </h2>
              <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                Unlike traditional job shops, we combine materials expertise with advanced 
                manufacturing capability. From powder to finished component, everything 
                is optimized for your application.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-foreground-secondary text-sm">Years Combined Experience</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-foreground-secondary text-sm">Core Technologies</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">24hr</div>
                <div className="text-foreground-secondary text-sm">Quote Response</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-foreground-secondary text-sm">US Manufacturing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-foreground-secondary text-lg mb-8">
              Tell us about your requirements and our team will respond within 24 hours 
              with a consultation and initial assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/service-inquiry">
                  Service Inquiry <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/powders">Explore Powders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
