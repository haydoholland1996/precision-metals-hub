import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  CheckCircle,
  Shield,
  Plane,
  Zap,
  Factory,
  Target,
  Award,
  Beaker,
  Sparkles,
  Flame,
  CircleDot,
  Triangle,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import powdersHero from "@/assets/powder-hero-new.png";
import facilityFloor from "@/assets/facility-floor.png";
import sphericalPowderBg from "@/assets/spherical-powder-bg.png";

const powders = [
  {
    name: "Titanium",
    symbol: "Ti",
    fullName: "Titanium Powder",
    description: "High-strength, lightweight titanium powder for aerospace, defense, and medical applications. Optimized for AM and PM-HIP.",
    href: "/products/titanium-powder",
  },
  {
    name: "Tungsten",
    symbol: "W",
    fullName: "Tungsten Powder",
    description: "Ultra-high density tungsten powder for defense, aerospace, and radiation shielding applications.",
    href: "/products/tungsten-powder",
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    fullName: "Molybdenum Powder",
    description: "High-performance molybdenum powder for high-temperature applications and advanced manufacturing.",
    href: "/products/molybdenum-powder",
  },
  {
    name: "Tantalum",
    symbol: "Ta",
    fullName: "Tantalum Powder",
    description: "Corrosion-resistant tantalum powder for chemical processing, medical implants, and electronics.",
    href: "/products/tantalum-powder",
  },
  {
    name: "Niobium",
    symbol: "Nb",
    fullName: "Niobium Powder",
    description: "Premium niobium powder for superconducting applications, aerospace alloys, and nuclear systems.",
    href: "/products/niobium-powder",
  },
  {
    name: "C103 Alloy",
    symbol: "C103",
    fullName: "C103 Alloy Powder",
    description: "Aerospace-grade niobium alloy powder for rocket propulsion, hypersonic systems, and extreme environments.",
    href: "/products/c103-alloy-powder",
  },
];

const qualities = [
  {
    title: "Exceptional Purity",
    description: "Ultra-low contamination levels achieved through non-contact melting processes, ensuring the highest material integrity.",
    icon: Sparkles,
  },
  {
    title: "Optimized Flow",
    description: "Highly consistent particle morphology enhances flowability and packing density for AM and powder metallurgy.",
    icon: Target,
  },
  {
    title: "Custom PSD",
    description: "Tailored particle size distributions to match your exact process requirements.",
    icon: Atom,
  },
  {
    title: "Lot Consistency",
    description: "Rigorous process controls ensure every batch meets the same exacting specifications.",
    icon: Shield,
  },
];

const processes = [
  {
    name: "Electrode Induction Gas Atomization (EIGA)",
    description: "Our advanced EIGA process combines precision induction heating with optimized fluid dynamics to produce contamination-free metal powders. The non-contact melting method eliminates crucible contamination.",
    benefits: [
      "Ideal for reactive metals like titanium",
      "Non-contact melting eliminates contamination",
      "Produces highly spherical particles",
      "Excellent for aerospace and medical",
    ],
    icon: Flame,
  },
  {
    name: "Advanced Microwave Plasma Atomization",
    description: "Our next-generation microwave plasma system delivers unprecedented control over particle size, morphology, and purity. This revolutionary technology dramatically reduces costs while improving throughput.",
    benefits: [
      "Superior control over particle characteristics",
      "Higher yields with reduced waste",
      "Rapid alloy switching capability",
      "Scalable to high-volume production",
    ],
    icon: Zap,
  },
];

const morphologies = [
  {
    name: "Spherical Powders",
    description: "Optimized for additive manufacturing and powder metallurgy. Superior flowability, consistent packing density, and excellent layer-by-layer fusion.",
    applications: ["Additive Manufacturing (EBM, SLM, DMLS)", "Metal Injection Molding (MIM)", "Hot Isostatic Pressing (HIP)", "Thermal Spray Coatings"],
    icon: CircleDot,
  },
  {
    name: "Angular Powders",
    description: "Engineered for applications requiring enhanced green strength and mechanical interlocking. Superior compaction characteristics for traditional PM.",
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

const industries = [
  { name: "Aerospace", icon: Plane },
  { name: "Defense", icon: Shield },
  { name: "Energy", icon: Zap },
  { name: "Medical", icon: Heart },
  { name: "Industrial", icon: Factory },
];

const Powders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${powdersHero})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Strategic and Refractory Powders
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8">
              High-purity titanium, tungsten, molybdenum, tantalum, niobium, and C103 alloy 
              powders. Engineered for additive manufacturing, PM-HIP, and advanced applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/powder-inquiry">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
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
              <span className="font-medium text-foreground">300kg MOQ</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                className="w-5 h-auto"
              />
              <span className="font-medium text-foreground">Made in USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Powders Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powders.map((powder) => (
              <Link
                key={powder.symbol}
                to={powder.href}
                className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow card-glow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{powder.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {powder.fullName}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
                  {powder.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Powder Quality */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facilityFloor})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Uncompromising Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Powders for Critical Applications
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Engineered for the most demanding applications across defense, aerospace, 
              space, energy, medical, and heavy industry.
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

      {/* Atomization Technology */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Dual-Process Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Next-Generation Atomization
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Two advanced atomization technologies optimized for your specific application—
              flexibility, quality, and performance that traditional methods cannot match.
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
                  <h3 className="text-xl md:text-2xl font-bold">{process.name}</h3>
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
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sphericalPowderBg})` }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Powder Morphology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spherical & Angular Options
            </h2>
            <p className="text-foreground-secondary max-w-3xl mx-auto text-lg">
              Different applications demand different powder characteristics. We offer both 
              spherical and angular morphologies to match your manufacturing process.
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

      {/* The Difference + Stats */}
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
                Our advanced materials are more than metal powders—they're the foundation 
                for next-generation manufacturing. With decades of combined expertise, 
                we innovate to meet the evolving needs of industries that cannot compromise.
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

      {/* Industries with Hero Background */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${powdersHero})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Trusted Across Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powering Critical Industries
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              From aerospace components to medical implants, our materials meet 
              the highest performance standards.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border"
              >
                <industry.icon className="h-6 w-6 text-primary" />
                <span className="font-medium text-lg">{industry.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Additive Manufacturing</h3>
              <p className="text-foreground-secondary">
                Spherical powders optimized for EBM, SLM, DMLS, and binder jetting. 
                Exceptional flowability and consistent layer fusion.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">PM-HIP Processing</h3>
              <p className="text-foreground-secondary">
                HIP-grade powders for near-net-shape manufacturing. Full density 
                and exceptional mechanical properties.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-3">Thermal Spray & Coatings</h3>
              <p className="text-foreground-secondary">
                Custom particle size distributions for thermal spray applications. 
                Wear-resistant and corrosion-resistant coatings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24 bg-background-secondary border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Your Trusted US Metal Powder Supplier
            </h2>
            <div className="space-y-6 text-foreground-secondary text-lg leading-relaxed">
              <p>
                Metal Powder Supply is a premier US titanium powder supplier and 
                refractory metal powder manufacturer, serving the aerospace, defense, 
                energy, and medical industries. Our American-produced strategic metal powders meet the highest quality standards, 
                with AS9100D and ISO 9001:2015 certifications ensuring consistent excellence.
              </p>
              <p>
                As a leading tungsten powder supplier and molybdenum powder manufacturer, 
                we offer custom particle size distributions optimized for your specific application. Whether you need 
                titanium powder for additive manufacturing, tantalum powder for chemical processing, 
                or niobium powder for superconducting applications, we deliver premium quality with full material certification.
              </p>
              <p>
                Our advanced atomization technologies—including EIGA (Electrode Induction Gas Atomization) and 
                microwave plasma atomization—produce exceptionally pure, spherical powders ideal for 
                demanding applications. With minimum order quantities of 300kg and expedited lead times available, 
                Metal Powder Supply is your partner for high-volume, mission-critical powder requirements.
              </p>
              <p>
                Committed to domestic supply chain security, we're the trusted choice for 
                defense-grade metal powders and aerospace-certified materials. 
                Contact us today for a quote on C103 alloy powder, 
                tungsten heavy alloy powder, or any of our strategic metal powder products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Request a Powder Quote</h2>
            <p className="text-foreground-secondary mb-8">
              Tell us about your material requirements, particle size specifications, and volume needs. 
              Our team will respond within 24 hours with pricing and lead time information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="cta">
                <Link to="/powder-inquiry">
                  Get Powder Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Powders;
