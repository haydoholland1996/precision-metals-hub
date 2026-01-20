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

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Precision-Grade Metal AM</h2>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Additive systems combine precision optics, automated calibration, and realtime melt-pool analytics to deliver repeatable, aerospace-grade parts. Every build is verified for density and geometry, with optional PM-HIP densification achieving forging-equivalent strength.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-foreground-secondary mb-12 max-w-2xl">
            Industrial-scale additive manufacturing with full traceability and compliance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Build Volume</h3>
              <p className="text-foreground-secondary text-sm">Up to 600 × 600 × 600 mm with 1m vertical height</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Laser Fusion</h3>
              <p className="text-foreground-secondary text-sm">Powder-bed fusion for high throughput production</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Feature Resolution</h3>
              <p className="text-foreground-secondary text-sm">≈ 200 μm precision with integrated finishing</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Full Traceability</h3>
              <p className="text-foreground-secondary text-sm">ITAR-compliant, ISO 9001 certified facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Technology Features</h2>
              <p className="text-foreground-secondary mb-8">
                State-of-the-art monitoring and validation systems ensure consistent, production-ready output.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Optical & thermal layer-by-layer sensing",
                  "Melt-pool analytics for density control",
                  "Closed-loop calibration (micron accuracy)",
                  "Automated build validation reports",
                  "Support-free geometry for ducts/manifolds",
                  "On-site heat treatment & inspection",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Seamless Scaling</h3>
              <p className="text-foreground-secondary mb-6">
                Transition from R&D to production without retooling. Our network maintains consistent quality across prototype and high-volume runs.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Prototyping", "Low-Volume", "High-Volume"].map((scale) => (
                  <span key={scale} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    {scale}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Capabilities */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center">Material Capabilities</h2>
          <p className="text-foreground-secondary mb-12 text-center max-w-2xl mx-auto">
            Extensive material library for demanding applications across aerospace, defense, and industrial sectors.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Atom className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Metals</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Ti-6Al-4V", "Inconel 625/718", "Hastelloy C22/X", "Haynes 214/282", "M300 Steel", "Stainless 415/17-4 PH", "Al F357", "AlSi10Mg", "Scalmalloy", "CuNi30", "GRCop-42"].map((metal) => (
                  <span key={metal} className="px-3 py-1.5 rounded-md bg-background text-foreground-secondary text-sm border border-border">
                    {metal}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Polymers</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ULTEM 9085/1010", "PEEK", "PEKK", "PPSU", "PA11/PA12", "PC", "ABS-ESD7", "ASA", "PVDF", "PTFE", "Carbon-Fiber Nylon", "Glass-Fiber PA"].map((polymer) => (
                  <span key={polymer} className="px-3 py-1.5 rounded-md bg-background text-foreground-secondary text-sm border border-border">
                    {polymer}
                  </span>
                ))}
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
