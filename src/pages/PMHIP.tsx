import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  CheckCircle,
  Shield,
  Factory,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import pmhipHero from "@/assets/pmhip-hero.jpg";

const benefits = [
  "Custom-engineered near-net-shape components",
  "Reduced lead times with unparalleled precision",
  "Isotropic forge-like material properties",
  "Interchangeable with existing cast/forged designs",
  "Ideal for low-volume, high-mix demand",
  "Any material, any size part",
];

const advantages = [
  {
    title: "Defect-Free Parts",
    description: "Eliminates internal defects and porosity",
    icon: Target,
  },
  {
    title: "Superior Strength",
    description: "Fully dense, high-integrity components",
    icon: Shield,
  },
  {
    title: "Cost-Effective",
    description: "Reduced material waste and machining",
    icon: Zap,
  },
  {
    title: "Versatile",
    description: "Suitable for any material and complex geometries",
    icon: FlaskConical,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "24-hour response on all inquiries",
  },
  {
    step: 2,
    title: "Design Review",
    description: "Numerical modeling and optimization",
  },
  {
    step: 3,
    title: "PM-HIP Production",
    description: "Precision powder metallurgy processing",
  },
  {
    step: 4,
    title: "Post-Processing",
    description: "Machining and finishing operations",
  },
  {
    step: 5,
    title: "Quality Assurance",
    description: "Full inspection and delivery",
  },
];

const materials = [
  "Titanium",
  "Tungsten",
  "Molybdenum",
  "Tantalum",
  "Niobium",
  "C103",
  "Specialty Alloys",
];

const PMHIP = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pmhipHero})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <div className="h-16 w-16 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Advanced Manufacturing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              PM-HIP
              <span className="block text-gradient mt-2">Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8 animate-slide-up">
              Powder Metallurgy – Hot Isostatic Pressing for near-net-shape
              components with forge-like properties. Defect-free, fully dense parts
              for mission-critical applications.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg">
                <Link to="/service-inquiry">
                  Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* What is PM-HIP */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is PM-HIP?</h2>
              <p className="text-foreground-secondary mb-8">
                Powder Metallurgy – Hot Isostatic Pressing (PM-HIP) combines the
                precision of powder metallurgy with the densification benefits of
                HIP processing. The result: near-net-shape components with
                isotropic, forge-like material properties.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <advantage.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
          <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
            PM-HIP is ideal for components previously made by casting or forging,
            high-stress mission-critical parts, and applications in defense,
            aerospace, energy, and heavy manufacturing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="font-semibold mb-2">Cast/Forged Replacements</h3>
              <p className="text-foreground-secondary text-sm">
                Interchangeable with existing cast or forged designs
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="font-semibold mb-2">Mission-Critical Parts</h3>
              <p className="text-foreground-secondary text-sm">
                High-stress components requiring maximum integrity
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <h3 className="font-semibold mb-2">Complex Geometries</h3>
              <p className="text-foreground-secondary text-sm">
                Near-net-shape reduces machining requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background-secondary">
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

      {/* Materials */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Materials</h2>
          <p className="text-foreground-secondary text-center max-w-2xl mx-auto mb-12">
            We process the full range of refractory and strategic metals:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {materials.map((material) => (
              <span
                key={material}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium"
              >
                {material}
              </span>
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
              <h3 className="font-semibold mb-2">US PM-HIP Manufacturer</h3>
              <p className="text-foreground-secondary text-sm">
                Domestic HIP services with full traceability
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
                <FlaskConical className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Integrated Supply</h3>
              <p className="text-foreground-secondary text-sm">
                Powder sourcing and HIP in one solution
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Industry-Leading PM-HIP Manufacturing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">US PM-HIP Leader</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Metal Powder Supply is a leading US PM-HIP manufacturer offering
                  comprehensive hot isostatic pressing services for aerospace, defense,
                  and industrial applications. Our powder metallurgy HIP manufacturing
                  produces defect-free, fully dense components with forge-like properties.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Refractory Metal Specialists</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  As specialists in HIP metal parts manufacturing, we process titanium
                  PM-HIP, tungsten PM-HIP, and all refractory metals. Our HIP titanium
                  aerospace components meet the strictest quality requirements with
                  AS9100D certification.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">AM + HIP Integration</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  We also offer additive manufacturing HIP and HIP post processing for
                  3D printed metal parts. Contact us for AM + HIP manufacturing
                  solutions with integrated powder supply and full quality certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Discuss Your PM-HIP Project
            </h2>
            <p className="text-foreground-secondary mb-8">
              Our team will respond within 24 hours to schedule a consultation and
              discuss your requirements.
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

export default PMHIP;
