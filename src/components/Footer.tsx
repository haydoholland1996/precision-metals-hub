import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const products = [
  { name: "Titanium Powder", href: "/products/titanium-powder" },
  { name: "Tungsten Powder", href: "/products/tungsten-powder" },
  { name: "Molybdenum Powder", href: "/products/molybdenum-powder" },
  { name: "Tantalum Powder", href: "/products/tantalum-powder" },
  { name: "Niobium Powder", href: "/products/niobium-powder" },
  { name: "C103 Alloy", href: "/products/c103-alloy-powder" },
  { name: "WHA Rods & Bars", href: "/products/tungsten-heavy-alloy-rods" },
  { name: "Refractory Bar & Plate", href: "/products/refractory-metal-bar-plate" },
];

const services = [
  { name: "Additive Manufacturing", href: "/services/additive-manufacturing" },
  { name: "PM-HIP Services", href: "/services/pm-hip" },
];

const company = [
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-foreground-secondary text-sm max-w-sm">
              Your trusted US source for strategic and refractory metal powders.
              American-produced materials for aerospace, defense, and critical
              industries.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                className="w-5 h-auto"
              />
              <span>Produced in the USA</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-foreground mb-4 mt-8">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@metalpowdersupply.com"
                  className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@metalpowdersupply.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground-secondary">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Industrial Parkway
                  <br />
                  Suite 100
                  <br />
                  Houston, TX 77001
                </span>
              </li>
            </ul>

          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-muted">
            <span className="font-medium">AS9100D</span>
            <span className="text-border">|</span>
            <span className="font-medium">ISO 9001:2015</span>
            <span className="text-border">|</span>
            <span className="font-medium">ITAR Registered</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-foreground-muted">
          © {new Date().getFullYear()} Metal Powder Supply. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
