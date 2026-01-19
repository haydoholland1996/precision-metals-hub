import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  CheckCircle,
  Shield,
  Zap,
  Target,
  Sparkles,
  Flame,
  CircleDot,
  Triangle,
  Factory,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingBadge from "@/components/PricingBadge";
import atomizationBg from "@/assets/atomization-facility.png";
import processHeroBg from "@/assets/process-equipment-hero.png";

const qualities = [
  {
    title: "Exceptional Purity",
    description: "Ultra-low contamination levels achieved through non-contact melting processes, ensuring the highest material integrity for critical applications.",
    icon: Sparkles,
  },
  {
    title: "Optimized Flow Properties",
    description: "Highly consistent particle morphology enhances flowability and packing density—essential for additive manufacturing and powder metallurgy.",
    icon: Target,
  },
  {
    title: "Custom Particle Size Distributions",
    description: "Tailored PSDs to match your exact process requirements, from fine powders for precision AM to coarser grades for thermal spray applications.",
    icon: Atom,
  },
  {
    title: "Lot-to-Lot Consistency",
    description: "Rigorous process controls ensure every batch meets the same exacting specifications, order after order, year after year.",
    icon: Shield,
  },
];

const processes = [
  {
    name: "Electrode Induction Gas Atomization (EIGA)",
    description: "Our advanced EIGA process combines precision induction heating with optimized fluid dynamics to produce contamination-free metal powders. The non-contact melting method eliminates crucible contamination, ensuring exceptional purity for reactive and refractory metals.",
    benefits: [
      "Ideal for reactive metals like titanium and zirconium",
      "Non-contact melting eliminates contamination",
      "Produces highly spherical particles",
      "Excellent for aerospace and medical applications",
    ],
    icon: Flame,
  },
  {
    name: "Advanced Microwave Plasma Atomization",
    description: "Our next-generation microwave plasma system delivers unprecedented control over particle size, morphology, and purity. This revolutionary technology dramatically reduces production costs while improving throughput and yield compared to traditional methods.",
    benefits: [
      "Superior control over particle characteristics",
      "Higher yields with reduced waste",
      "Rapid alloy switching capability",
      "Scalable from prototyping to high-volume production",
    ],
    icon: Zap,
  },
];

const morphologies = [
  {
    name: "Spherical Powders",
    description: "Optimized for additive manufacturing and powder metallurgy. Our spherical powders offer superior flowability, consistent packing density, and excellent layer-by-layer fusion in AM processes.",
    applications: ["Additive Manufacturing (EBM, SLM, DMLS)", "Metal Injection Molding (MIM)", "Hot Isostatic Pressing (HIP)", "Thermal Spray Coatings"],
    icon: CircleDot,
  },
  {
    name: "Angular Powders",
    description: "Engineered for applications requiring enhanced green strength and mechanical interlocking. Angular morphology provides superior compaction characteristics for traditional powder metallurgy.",
    applications: ["Press and Sinter Operations", "Cold Isostatic Pressing (CIP)", "Plasma Spray Applications", "Specialized PM Components"],
    icon: Triangle,
  },
];

const differentiators = [
  "US-based production with complete supply chain visibility",
  "AS9100D and ISO 9001:2015 certified manufacturing",
  "Custom alloy development capabilities",
  "Rapid prototyping to production scale-up",
  "Integrated additive manufacturing and PM-HIP services",
];

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${processHeroBg})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4 animate-fade-in">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Engineered for
              <span className="block text-gradient mt-2">Extreme Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8 animate-slide-up">
              Advanced atomization technologies producing premium metal powders that meet 
              the most stringent demands of defense, aerospace, space, and critical industries. 
              American-made materials designed to excel in extreme conditions.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg">
                <Link to="/powder-inquiry">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Powder Section */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Uncompromising Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Powders for Critical Applications
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Our metal powders are engineered for the most demanding applications across defense, 
              aerospace, space, energy, medical, and heavy industry. When quality, consistency, 
              and performance are paramount, our materials deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <quality.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{quality.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Process Technology */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${atomizationBg})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Dual-Process Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Next-Generation Atomization
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              We leverage two advanced atomization technologies to produce powders optimized 
              for your specific application—giving you flexibility, quality, and performance 
              that traditional methods simply cannot match.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {processes.map((process) => (
              <div
                key={process.name}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <process.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{process.name}</h3>
                </div>
                <p className="text-foreground-secondary text-lg mb-6 leading-relaxed">
                  {process.description}
                </p>
                <ul className="space-y-3">
                  {process.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powder Morphology */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Powder Morphology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spherical & Angular Options
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Different applications demand different powder characteristics. We offer both 
              spherical and angular powder morphologies to match your specific manufacturing 
              process requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {morphologies.map((morph) => (
              <div
                key={morph.name}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <morph.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{morph.name}</h3>
                </div>
                <p className="text-foreground-secondary text-lg mb-6 leading-relaxed">
                  {morph.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Ideal Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {morph.applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
                The Metal Powder Supply Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precision, Purity & Innovation
              </h2>
              <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
                Our advanced materials are more than just metal powders—they're the foundation 
                for next-generation manufacturing. With decades of combined metallurgical expertise, 
                we continually innovate to meet the evolving needs of industries that cannot 
                compromise on quality, safety, or performance.
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
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-foreground-secondary text-sm">Metal Types</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">24hr</div>
                <div className="text-foreground-secondary text-sm">Quote Response</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-foreground-secondary text-sm">US Produced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Refractory & Strategic Metal Powders
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              High-temperature resistant materials engineered for mission-critical applications
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Titanium (Ti)", "Tungsten (W)", "Molybdenum (Mo)", "Tantalum (Ta)", "Niobium (Nb)", "C103 Alloy", "Specialty Alloys"].map((material) => (
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

      {/* CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover What Precision Engineering Can Do
            </h2>
            <p className="text-foreground-secondary text-lg mb-8">
              When your application demands exceptional results in the most challenging conditions, 
              our advanced metal powders deliver. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/powder-inquiry">
                  Request Powder Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PricingBadge />
    </Layout>
  );
};

export default Process;
