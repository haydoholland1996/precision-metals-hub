import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { name: "Titanium Powder", href: "/products/titanium-powder", symbol: "Ti" },
  { name: "Tungsten Powder", href: "/products/tungsten-powder", symbol: "W" },
  { name: "Molybdenum Powder", href: "/products/molybdenum-powder", symbol: "Mo" },
  { name: "Tantalum Powder", href: "/products/tantalum-powder", symbol: "Ta" },
  { name: "Niobium Powder", href: "/products/niobium-powder", symbol: "Nb" },
  { name: "C103 Alloy Powder", href: "/products/c103-alloy-powder", symbol: "C103" },
  { name: "WHA Rods & Bars", href: "/products/tungsten-heavy-alloy-rods", symbol: "WHA" },
  { name: "Refractory Bar & Plate", href: "/products/refractory-metal-bar-plate", symbol: "Mo/Ta/Nb/W" },
];

const services = [
  { name: "Additive Manufacturing", href: "/services/additive-manufacturing" },
  { name: "PM-HIP", href: "/services/pm-hip" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors">
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              {products.map((product) => (
                <DropdownMenuItem key={product.href} asChild>
                  <Link
                    to={product.href}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span className="text-primary font-bold text-sm w-8">
                      {product.symbol}
                    </span>
                    <span>{product.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link to={service.href} className="cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-primary"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            About
          </Link>

          <Link
            to="/blog"
            className={`text-sm font-medium transition-colors ${
              isActive("/blog")
                ? "text-primary"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${
              isActive("/contact")
                ? "text-primary"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button asChild>
            <Link to="/powder-inquiry">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-background">
          <nav className="container flex flex-col gap-4 py-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
                Products
              </p>
              {products.map((product) => (
                <Link
                  key={product.href}
                  to={product.href}
                  className="flex items-center gap-3 py-2 text-foreground-secondary hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary font-bold">{product.symbol}</span>
                  <span>{product.name}</span>
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="block py-2 text-foreground-secondary hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <Link
                to="/about"
                className="block py-2 text-foreground-secondary hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-foreground-secondary hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-foreground-secondary hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="pt-6">
              <Button asChild className="w-full" size="lg">
                <Link to="/powder-inquiry" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
