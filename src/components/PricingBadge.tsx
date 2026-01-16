import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PricingBadge = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Link to="/powder-inquiry" className="relative group block">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:bg-primary/50 transition-all duration-300" />
        
        {/* Badge */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-5 py-3 rounded-full shadow-lg border border-primary/50 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold text-sm whitespace-nowrap">
            Let us beat your current pricing!
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PricingBadge;
