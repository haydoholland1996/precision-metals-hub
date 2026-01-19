import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingBadge from "@/components/PricingBadge";
import heroBg from "@/assets/facility-main-hero.png";
import powderBg from "@/assets/powder-piles-bg.png";
import {
  Plane,
  Shield,
  Zap,
  Heart,
  Atom,
  Factory,
  CheckCircle,
  Layers,
  FlaskConical,
} from "lucide-react";

const metals = [
  {
    name: "Titanium",
    symbol: "Ti",
    description: "High-strength aerospace grade",
    href: "/products/titanium-powder",
  },
  {
    name: "Tungsten",
    symbol: "W",
    description: "Ultra-high density applications",
    href: "/products/tungsten-powder",
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    description: "High-temperature performance",
    href: "/products/molybdenum-powder",
  },
  {
    name: "Tantalum",
    symbol: "Ta",
    description: "Corrosion-resistant excellence",
    href: "/products/tantalum-powder",
  },
  {
    name: "Niobium",
    symbol: "Nb",
    description: "Superconducting applications",
    href: "/products/niobium-powder",
  },
  {
    name: "C103 Alloy",
    symbol: "C103",
    description: "Aerospace-grade niobium alloy",
    href: "/products/c103-alloy-powder",
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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Your Partner for Mission-Critical
              <span className="block text-gradient mt-2">
                Metal Powders & Advanced Manufacturing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8 animate-slide-up">
              American-produced strategic and refractory metal powders and advanced manufacturing
              for aerospace, defense, and critical industries.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg">
                <Link to="/powder-inquiry">
                  Request Powder Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/services/additive-manufacturing">
                  Explore Manufacturing Services
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
              <span className="font-medium text-foreground">AS9100D</span>
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
              <span className="font-medium text-foreground">Produced in the USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategic & Refractory Metal Powders
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Premium quality metal powders for additive manufacturing, PM-HIP, and
              advanced applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metals.map((metal, index) => (
              <Link
                key={metal.symbol}
                to={metal.href}
                className={`group card-glow bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up opacity-0 stagger-${index + 1}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-bold text-primary">{metal.symbol}</span>
                  <ArrowRight className="h-5 w-5 text-foreground-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{metal.name} Powder</h3>
                <p className="text-foreground-secondary text-sm">{metal.description}</p>
              </Link>
            ))}
          </div>

          {/* New Products Callout */}
          <div className="mt-12 p-8 bg-card rounded-xl border border-primary/30 shadow-glow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-3">
                  NEW PRODUCTS
                </span>
                <h3 className="text-2xl font-bold mb-2">Now Offering Solid Stock</h3>
                <p className="text-foreground-secondary text-lg">
                  WHA Rods & Bars and Refractory Metal Bar, Plate, Sheet, Rod & Wire now available.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default">
                  <Link to="/products/tungsten-heavy-alloy-rods">
                    WHA Rods <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/products/refractory-metal-bar-plate">
                    Refractory Bar & Plate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground-secondary text-lg">
              <span className="text-foreground font-medium">Custom particle size distributions</span>{" "}
              | 300kg+ capacity | Fast lead times
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${powderBg})`,
            backgroundColor: 'hsl(0 0% 85%)'
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Manufacturing Services
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              From prototyping to production, we deliver precision components using
              cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/services/additive-manufacturing"
              className="group card-glow bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Additive Manufacturing</h3>
              </div>
              <p className="text-foreground-secondary mb-6">
                Full-service metal 3D printing across all major technologies. From
                prototyping to high-volume production with EBM, SLM, DMLS, and Binder
                Jetting.
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/services/pm-hip"
              className="group card-glow bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">PM-HIP Services</h3>
              </div>
              <p className="text-foreground-secondary mb-6">
                Powder Metallurgy – Hot Isostatic Pressing for near-net-shape
                components with forge-like properties. Defect-free, fully dense parts.
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Mission-Critical Industries
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Trusted by engineers and procurement teams where performance is
              non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border"
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

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to discuss your requirements?
            </h2>
            <p className="text-foreground-secondary mb-8">
              Our team of experts is ready to help you find the right materials and
              manufacturing solutions for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/powder-inquiry">Powder Inquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/service-inquiry">Service Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-24 bg-background-secondary border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Your Trusted US Titanium & Refractory Metal Powder Supplier
            </h2>
            <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed">
              <p>
                Metal Powder Supply is a leading US titanium powder supplier and
                tungsten powder manufacturer, serving the aerospace, defense, and
                energy industries. Our American-produced strategic metal powders meet
                the highest quality standards, with AS9100D and ISO 9001:2015
                certifications ensuring consistent excellence.
              </p>
              <p>
                As a comprehensive refractory metal powder supplier, we offer custom
                particle size distributions for titanium, tungsten, molybdenum,
                tantalum, niobium, and C103 alloy powders. Our materials are optimized
                for additive manufacturing, PM-HIP processing, and other advanced
                manufacturing applications.
              </p>
              <p>
                With minimum order quantities of 300kg and expedited lead times
                available, Metal Powder Supply is your partner for high-volume,
                mission-critical metal powder sourcing. Contact us today to discuss
                your aerospace metal powder or defense metal powder requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingBadge />
    </Layout>
  );
};

export default Index;
