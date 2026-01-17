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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import powdersHero from "@/assets/powder-hero-new.png";

const powders = [
  {
    name: "Titanium",
    symbol: "Ti",
    fullName: "Titanium Powder",
    description: "High-strength, lightweight titanium powder for aerospace, defense, and medical applications. Optimized for AM and PM-HIP.",
    href: "/products/titanium-powder",
    applications: ["Aerospace", "Medical", "Defense"],
  },
  {
    name: "Tungsten",
    symbol: "W",
    fullName: "Tungsten Powder",
    description: "Ultra-high density tungsten powder for defense, aerospace, and radiation shielding applications.",
    href: "/products/tungsten-powder",
    applications: ["Defense", "Shielding", "Tooling"],
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    fullName: "Molybdenum Powder",
    description: "High-performance molybdenum powder for high-temperature applications and advanced manufacturing.",
    href: "/products/molybdenum-powder",
    applications: ["High-Temp", "Aerospace", "Industrial"],
  },
  {
    name: "Tantalum",
    symbol: "Ta",
    fullName: "Tantalum Powder",
    description: "Corrosion-resistant tantalum powder for chemical processing, medical implants, and electronics.",
    href: "/products/tantalum-powder",
    applications: ["Chemical", "Medical", "Electronics"],
  },
  {
    name: "Niobium",
    symbol: "Nb",
    fullName: "Niobium Powder",
    description: "Premium niobium powder for superconducting applications, aerospace alloys, and nuclear systems.",
    href: "/products/niobium-powder",
    applications: ["Superconducting", "Aerospace", "Nuclear"],
  },
  {
    name: "C103 Alloy",
    symbol: "C103",
    fullName: "C103 Alloy Powder",
    description: "Aerospace-grade niobium alloy powder for rocket propulsion, hypersonic systems, and extreme environments.",
    href: "/products/c103-alloy-powder",
    applications: ["Rockets", "Hypersonics", "Space"],
  },
];

const qualityFeatures = [
  {
    icon: Beaker,
    title: "Advanced Atomization",
    description: "EIGA and microwave plasma processes for exceptional purity and sphericity",
  },
  {
    icon: Target,
    title: "Custom PSD",
    description: "Tailored particle size distributions for your specific application",
  },
  {
    icon: Shield,
    title: "Full Traceability",
    description: "Complete material certification and lot traceability",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "AS9100D and ISO 9001:2015 certified manufacturing",
  },
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
                <Link to="/process">
                  Our Process
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
              <span className="font-medium text-foreground">ITAR Registered</span>
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

      {/* Quality Features */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Uncompromising Quality
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Every powder lot is manufactured to exacting specifications with full 
              material certification and traceability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground-secondary text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${powdersHero})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powering Critical Industries
              </h2>
              <p className="text-foreground-secondary text-lg mb-8">
                Our strategic metal powders are trusted by leading manufacturers in 
                the most demanding industries. From aerospace components to medical 
                implants, our materials meet the highest performance standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Plane className="h-6 w-6 text-primary" />
                  <span className="font-medium">Aerospace</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-medium">Defense</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-medium">Energy</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Factory className="h-6 w-6 text-primary" />
                  <span className="font-medium">Industrial</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-3">Additive Manufacturing</h3>
                <p className="text-foreground-secondary">
                  Spherical powders optimized for EBM, SLM, DMLS, and binder jetting processes. 
                  Exceptional flowability and consistent layer fusion.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-3">PM-HIP Processing</h3>
                <p className="text-foreground-secondary">
                  HIP-grade powders for near-net-shape manufacturing. Achieve full density 
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
                ITAR-registered and committed to domestic supply chain security, we're the trusted choice for 
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
