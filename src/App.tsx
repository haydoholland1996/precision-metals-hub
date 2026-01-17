import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import Powders from "./pages/Powders";
import AdditiveManufacturing from "./pages/AdditiveManufacturing";
import PMHIP from "./pages/PMHIP";
import Process from "./pages/Process";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PowderInquiry from "./pages/PowderInquiry";
import ServiceInquiry from "./pages/ServiceInquiry";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Pages */}
          <Route path="/powders" element={<Powders />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          
          {/* Service Pages */}
          <Route path="/services/additive-manufacturing" element={<AdditiveManufacturing />} />
          <Route path="/services/pm-hip" element={<PMHIP />} />
          
          {/* Company Pages */}
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Inquiry Forms */}
          <Route path="/powder-inquiry" element={<PowderInquiry />} />
          <Route path="/service-inquiry" element={<ServiceInquiry />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
