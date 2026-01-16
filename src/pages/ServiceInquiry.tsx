import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const services = [
  { value: "additive", label: "Additive Manufacturing" },
  { value: "pmhip", label: "PM-HIP" },
  { value: "both", label: "Both / Not Sure" },
];

const timelines = [
  { value: "immediate", label: "Immediate" },
  { value: "short", label: "Short-term (2-4 weeks)" },
  { value: "standard", label: "Standard (1-2 months)" },
  { value: "planning", label: "Planning / Future Project" },
];

const sources = [
  { value: "google", label: "Google Search" },
  { value: "referral", label: "Referral" },
  { value: "tradeshow", label: "Trade Show" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
];

const ServiceInquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inquiry Submitted",
      description:
        "A member of our team will reach out within 24 hours to schedule a consultation.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24 bg-background min-h-[60vh] flex items-center">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
              <p className="text-foreground-secondary mb-8">
                Thank you for your inquiry. A member of our team will reach out
                within 24 hours to schedule a consultation call.
              </p>
              <Button onClick={() => navigate("/")}>Return to Home</Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Service Inquiry
            </h1>
            <p className="text-foreground-secondary">
              Tell us about your project. A member of our team will reach out
              within 24 hours to schedule a consultation call.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-lg border border-border p-8 space-y-6"
            >
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="bg-background border-border"
                />
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div className="space-y-2">
                <Label>Service Interest *</Label>
                <Select name="service" required>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material & Quantity */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="material">Material Preference</Label>
                  <Input
                    id="material"
                    name="material"
                    placeholder="e.g., Titanium Ti-6Al-4V"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity / Volume</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 100 parts"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  placeholder="Tell us about your project, including component requirements, specifications, and any relevant details..."
                  className="bg-background border-border resize-none"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label>Timeline</Label>
                <Select name="timeline">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Source */}
              <div className="space-y-2">
                <Label>How did you hear about us?</Label>
                <Select name="source">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {sources.map((source) => (
                      <SelectItem key={source.value} value={source.value}>
                        {source.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Service Inquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceInquiry;
