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
import additiveHero from "@/assets/additive-facility-hero.jpg";

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
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${additiveHero})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <div className="h-16 w-16 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Advanced Manufacturing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Metal Additive
              <span className="block text-gradient mt-2">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8 animate-slide-up">
              Full-service industrial metal 3D printing for aerospace, defense,
              energy, and critical applications. From prototyping to high-volume
              production.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg">
                <Link to="/service-inquiry">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/powder-inquiry">
                  Request Powder Quote
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

      {/* Detailed Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-0">
            {/* Overview */}
            <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold">Overview</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-foreground-secondary leading-relaxed">
                  Additive systems combine precision optics, automated calibration, and realtime melt-pool analytics to deliver repeatable, aerospace-grade parts. Every build is verified for density and geometry, with optional PM-HIP densification achieving forging-equivalent strength.
                </p>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold">Core Capabilities:</h2>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Build volume up to 600 × 600 × 600 mm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Vertical build height to 1 m</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Multi-laser powder-bed fusion for throughput</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Feature resolution ≈ 200 μm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Integrated machining & finishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Full powder-to-part traceability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">ITAR-compliant facilities, ISO 9001 certified</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technology Features */}
            <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold">Technology Features:</h2>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Optical & thermal layer-by-layer sensing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Melt-pool analytics for density control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Closed-loop calibration (micron accuracy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Automated build validation reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Support-free geometry for ducts/manifolds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">Seamless transition from R&D to production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-secondary">—</span>
                    <span className="text-foreground-secondary">On-site heat treatment and dimensional inspection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Material Capabilities */}
            <div className="grid md:grid-cols-3 gap-8 py-12">
              <div>
                <h2 className="text-2xl font-bold">Material Capabilities:</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-foreground-secondary leading-relaxed">
                  <span className="font-medium text-foreground">Metals:</span> Ti-6Al-4V, Inconel 625/718, Hastelloy C22/X, Haynes 214/282, M300 Steel, Stainless 415/17-4 PH, Al F357, Aheadd CP1, AlSi10Mg, Scalmalloy, CuNi30, GRCop-42
                </p>
                <p className="text-foreground-secondary leading-relaxed mt-4">
                  <span className="font-medium text-foreground">Polymers:</span> ULTEM 9085/1010, PEEK, PEKK, PPSU, PA11/PA12, PC, ABS-ESD7, ASA, PVDF, PTFE, Carbon-Fiber Nylon, Glass-Fiber PA
                </p>
              </div>
            </div>
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
                AS9100D, ISO 9001:2015 certified
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
      <section className="py-24 bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Metal AM Capabilities
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Your trusted partner for aerospace and defense metal 3D printing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industrial Metal 3D Printing</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Comprehensive metal additive manufacturing services for aerospace, defense, and industrial applications. Our capabilities span all major technologies including EBM, SLM, DMLS, and Binder Jetting.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Plane className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Aerospace & Defense Specialists</h3>
              <p className="text-foreground-secondary leading-relaxed">
                We specialize in titanium additive manufacturing and refractory metal processing. Our US manufacturing capabilities are backed by AS9100D certification for defense applications.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrated Solutions</h3>
              <p className="text-foreground-secondary leading-relaxed">
                American metal additive manufacturing with integrated powder supply, HIP post-processing, and full quality certification. From raw material to finished component under one roof.
              </p>
            </div>
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
