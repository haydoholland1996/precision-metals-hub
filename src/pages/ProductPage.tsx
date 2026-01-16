import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Atom, Shield, Plane, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PricingBadge from "@/components/PricingBadge";

// Import hero images
import titaniumHero from "@/assets/titanium-hero.jpg";
import tungstenHero from "@/assets/tungsten-hero.jpg";
import molybdenumHero from "@/assets/molybdenum-hero.jpg";
import tantalumHero from "@/assets/tantalum-hero.jpg";
import niobiumHero from "@/assets/niobium-hero.jpg";
import c103Hero from "@/assets/c103-hero.jpg";
import whaRodsHero from "@/assets/wha-rods-hero.jpg";

interface MetalData {
  name: string;
  symbol: string;
  fullName: string;
  productType: string;
  description: string;
  applications: string[];
  seoContent: string[];
  keywords: string[];
  heroImage: string;
}

const metalData: Record<string, MetalData> = {
  "titanium-powder": {
    name: "Titanium",
    symbol: "Ti",
    fullName: "Titanium Powder",
    productType: "Powder",
    heroImage: titaniumHero,
    description:
      "High-strength, lightweight titanium powder for aerospace, defense, and medical applications. Our Ti-6Al-4V and pure titanium powders are optimized for additive manufacturing and PM-HIP processing.",
    applications: [
      "Aerospace structural components",
      "Medical implants and prosthetics",
      "Defense applications",
      "Additive manufacturing",
      "Hot Isostatic Pressing (HIP)",
      "Powder metallurgy",
    ],
    seoContent: [
      "Metal Powder Supply is a premier US titanium powder supplier, offering aerospace-grade titanium powder for the most demanding applications. Our titanium powder for additive manufacturing meets strict aerospace and medical specifications, with custom particle size distributions available.",
      "As a leading titanium powder manufacturer, we supply Ti-6Al-4V powder and commercially pure titanium for EBM, SLM, and DMLS processes. Our titanium powder HIP-grade materials deliver exceptional density and mechanical properties.",
      "With ITAR registration and AS9100D certification, we're your trusted partner for defense and aerospace titanium powder sourcing. Contact us for titanium powder aerospace grade materials with fast lead times.",
    ],
    keywords: [
      "titanium powder supplier",
      "Ti-6Al-4V powder supplier",
      "titanium powder for additive manufacturing",
      "titanium powder HIP",
      "titanium powder aerospace grade",
      "US titanium powder supplier",
    ],
  },
  "tungsten-powder": {
    name: "Tungsten",
    symbol: "W",
    fullName: "Tungsten Powder",
    productType: "Powder",
    heroImage: tungstenHero,
    description:
      "Ultra-high density tungsten powder for defense, aerospace, and industrial applications. Our tungsten powders offer exceptional performance in high-temperature and radiation shielding applications.",
    applications: [
      "Counterweights and balancing",
      "Radiation shielding",
      "Defense penetrators",
      "High-temperature tooling",
      "Additive manufacturing",
      "Tungsten heavy alloys",
    ],
    seoContent: [
      "As a leading US tungsten powder supplier, Metal Powder Supply delivers high-purity tungsten powder for defense and industrial applications. Our tungsten powder additive manufacturing grades are optimized for laser and electron beam processing.",
      "We manufacture tungsten heavy alloy powder for ballistic applications and tungsten powder defense applications requiring maximum density and performance. All materials are produced to exacting specifications.",
      "Contact our team for tungsten powder HIP-grade materials, custom particle size distributions, and technical support for your tungsten powder requirements.",
    ],
    keywords: [
      "tungsten powder supplier",
      "tungsten powder manufacturer",
      "tungsten powder additive manufacturing",
      "tungsten powder defense applications",
      "tungsten heavy alloy powder supplier",
      "US tungsten powder supplier",
    ],
  },
  "molybdenum-powder": {
    name: "Molybdenum",
    symbol: "Mo",
    fullName: "Molybdenum Powder",
    productType: "Powder",
    heroImage: molybdenumHero,
    description:
      "High-performance molybdenum powder for high-temperature applications, aerospace components, and advanced manufacturing. Excellent thermal conductivity and oxidation resistance.",
    applications: [
      "High-temperature furnace components",
      "Aerospace applications",
      "Glass and metallurgical industries",
      "Additive manufacturing",
      "PM-HIP processing",
      "Sputtering targets",
    ],
    seoContent: [
      "Metal Powder Supply is your trusted molybdenum powder supplier for aerospace and industrial applications. Our molybdenum powder additive manufacturing grades deliver exceptional high-temperature performance.",
      "We offer custom particle size distributions and molybdenum powder HIP-grade materials for near-net-shape manufacturing. All powders meet strict quality standards with full material certification.",
      "Contact us for molybdenum powder sourcing with competitive pricing and fast lead times for your high-temperature applications.",
    ],
    keywords: [
      "molybdenum powder supplier",
      "molybdenum powder additive manufacturing",
      "molybdenum powder HIP",
    ],
  },
  "tantalum-powder": {
    name: "Tantalum",
    symbol: "Ta",
    fullName: "Tantalum Powder",
    productType: "Powder",
    heroImage: tantalumHero,
    description:
      "Corrosion-resistant tantalum powder for medical, chemical processing, and defense applications. Exceptional biocompatibility and chemical resistance.",
    applications: [
      "Medical implants",
      "Chemical processing equipment",
      "Defense applications",
      "Capacitor manufacturing",
      "Additive manufacturing",
      "High-temperature components",
    ],
    seoContent: [
      "As a specialized tantalum powder supplier, Metal Powder Supply provides high-purity tantalum for medical and defense applications. Our tantalum powder additive manufacturing grades meet strict biocompatibility requirements.",
      "We offer tantalum powder defense applications with ITAR compliance and full material traceability. Custom particle size distributions available for your specific manufacturing process.",
      "Contact our team for tantalum powder sourcing with technical support and competitive pricing.",
    ],
    keywords: [
      "tantalum powder supplier",
      "tantalum powder additive manufacturing",
      "tantalum powder defense applications",
    ],
  },
  "niobium-powder": {
    name: "Niobium",
    symbol: "Nb",
    fullName: "Niobium Powder",
    productType: "Powder",
    heroImage: niobiumHero,
    description:
      "High-purity niobium powder for superconducting applications, aerospace, and advanced manufacturing. Excellent ductility and superconducting properties.",
    applications: [
      "Superconducting applications",
      "Aerospace structures",
      "Medical devices",
      "Additive manufacturing",
      "Particle accelerators",
      "High-performance alloys",
    ],
    seoContent: [
      "Metal Powder Supply is a leading niobium powder supplier for aerospace and superconducting applications. Our niobium powder additive manufacturing grades deliver exceptional purity and performance.",
      "We provide niobium powder aerospace applications with custom particle size distributions and full material certification. AS9100D and ISO 9001:2015 certified manufacturing.",
      "Contact us for niobium powder sourcing with fast lead times and technical support for your advanced manufacturing requirements.",
    ],
    keywords: [
      "niobium powder supplier",
      "niobium powder additive manufacturing",
      "niobium powder aerospace",
    ],
  },
  "c103-alloy-powder": {
    name: "C103",
    symbol: "C103",
    fullName: "C103 Alloy Powder",
    productType: "Powder",
    heroImage: c103Hero,
    description:
      "Aerospace-grade C103 niobium alloy powder for rocket nozzles and high-temperature applications. Exceptional strength-to-weight ratio at elevated temperatures.",
    applications: [
      "Rocket and missile nozzles",
      "Aerospace propulsion",
      "High-temperature structural components",
      "Additive manufacturing",
      "PM-HIP processing",
      "Space applications",
    ],
    seoContent: [
      "Metal Powder Supply is your source for C103 alloy powder, the premier niobium alloy for rocket propulsion and aerospace applications. Our C103 powder is optimized for additive manufacturing and PM-HIP processing.",
      "We provide C103 alloy powder with custom particle size distributions and full material traceability. ITAR registered and AS9100D certified for defense and space applications.",
      "Contact us for C103 alloy powder sourcing with technical support and competitive pricing for your aerospace propulsion requirements.",
    ],
    keywords: ["C103 alloy powder supplier"],
  },
  "tungsten-heavy-alloy-rods": {
    name: "WHA Rods",
    symbol: "WHA",
    fullName: "Tungsten Heavy Alloy Rods & Bars",
    productType: "Rods & Bars",
    heroImage: whaRodsHero,
    description:
      "High-density tungsten heavy alloy (WHA) rods and bars for defense, aerospace, medical, and industrial applications. Superior density (17.0-18.5 g/cm³), excellent machinability, and outstanding radiation shielding properties.",
    applications: [
      "Kinetic energy penetrators",
      "Counterweights and balancing",
      "Radiation shielding",
      "Vibration dampening",
      "Medical collimators",
      "Aerospace ballast",
      "Oil and gas drilling",
      "Sporting goods weights",
    ],
    seoContent: [
      "Metal Powder Supply is a leading tungsten heavy alloy supplier in the USA, providing precision WHA rods and bars for defense, aerospace, and industrial applications. Our tungsten heavy alloy rods meet ASTM B777 specifications with densities ranging from 17.0 to 18.5 g/cm³.",
      "We offer custom tungsten alloy bars in various compositions including W-Ni-Fe and W-Ni-Cu alloys. As a trusted tungsten heavy alloy manufacturer, we provide full material certification, lot traceability, and ITAR compliance for defense applications.",
      "Contact us for tungsten heavy alloy rod sourcing with competitive pricing and fast lead times. Our metallurgical team provides expert guidance on WHA grade selection for your specific application requirements.",
    ],
    keywords: [
      "tungsten heavy alloy supplier",
      "WHA rods supplier",
      "tungsten alloy bars",
      "tungsten heavy alloy manufacturer USA",
      "ASTM B777 tungsten alloy",
      "tungsten alloy counterweights",
      "tungsten radiation shielding",
      "defense tungsten alloy",
    ],
  },
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const metal = metalData[slug || ""] || metalData["titanium-powder"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${metal.heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="mb-6 animate-fade-in">
              <span className="text-8xl md:text-9xl font-bold text-primary drop-shadow-lg">
                {metal.symbol}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {metal.name}
              <span className="block text-gradient mt-2">{metal.productType}</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-8 animate-slide-up">
              {metal.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg">
                <Link to="/powder-inquiry">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/services/additive-manufacturing">
                  Explore Manufacturing
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
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                className="w-5 h-auto"
              />
              <span className="font-medium text-foreground">Produced in USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications - only for powder products */}
      {metal.productType === "Powder" && (
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center">Key Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">
                  Particle Size
                </h3>
                <p className="text-foreground-secondary text-sm">
                  Custom PSDs available
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">
                  Minimum Order
                </h3>
                <p className="text-foreground-secondary text-sm">300kg</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Lead Time</h3>
                <p className="text-foreground-secondary text-sm">
                  Fast / Expedited available
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Origin</h3>
                <p className="text-foreground-secondary text-sm flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w20/us.png"
                    alt="USA"
                    className="w-4"
                  />
                  Produced in USA
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">
            {metal.name} Powder Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metal.applications.map((application) => (
              <div
                key={application}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Metal Powder Supply
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">US Production</h3>
              <p className="text-foreground-secondary text-sm">
                American-made materials with full domestic supply chain
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Certified Network</h3>
              <p className="text-foreground-secondary text-sm">
                AS9100D, ISO 9001:2015, and ITAR registered
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Atom className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Custom PSDs</h3>
              <p className="text-foreground-secondary text-sm">
                Tailored particle size distributions for your process
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-foreground-secondary text-sm">
                Expert guidance from our metallurgical team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24 bg-background-secondary border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Choose Our {metal.name} Powder
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {metal.seoContent.map((paragraph, index) => {
                const icons = [Factory, Shield, Plane];
                const titles = ["Industry Leader", "Quality Assured", "Expert Support"];
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{titles[index % titles.length]}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Request a Quote for {metal.name} Powder
            </h2>
            <p className="text-foreground-secondary mb-8">
              Our team will respond within 24 hours with pricing and availability
              information.
            </p>
            <Button asChild size="lg" variant="cta">
              <Link to="/powder-inquiry">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <PricingBadge />
    </Layout>
  );
};

export default ProductPage;
