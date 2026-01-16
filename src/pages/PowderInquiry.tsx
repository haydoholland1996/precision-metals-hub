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

const powders = [
  { value: "titanium", label: "Titanium" },
  { value: "tungsten", label: "Tungsten" },
  { value: "molybdenum", label: "Molybdenum" },
  { value: "tantalum", label: "Tantalum" },
  { value: "niobium", label: "Niobium" },
  { value: "c103", label: "C103 Alloy" },
  { value: "other", label: "Other" },
];

const timelines = [
  { value: "immediate", label: "Immediate (< 2 weeks)" },
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

const PowderInquiry = () => {
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
      description: "Our team will respond within 24 hours.",
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
                Thank you for your inquiry. Our team will respond within 24 hours
                with pricing and availability information.
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Powder Inquiry</h1>
            <p className="text-foreground-secondary">
              Tell us about your powder requirements. Our team will respond within
              24 hours.
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

              {/* Material Selection */}
              <div className="space-y-2">
                <Label>Material Selection *</Label>
                <Select name="powder" required>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a powder type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {powders.map((powder) => (
                      <SelectItem key={powder.value} value={powder.value}>
                        {powder.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Application & Quantity */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="application">Target Application</Label>
                  <Input
                    id="application"
                    name="application"
                    placeholder="e.g., Additive Manufacturing"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity Needed</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 300kg"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* PSD */}
              <div className="space-y-2">
                <Label htmlFor="psd">Required Particle Size Distribution</Label>
                <Input
                  id="psd"
                  name="psd"
                  placeholder="e.g., 15-45μm"
                  className="bg-background border-border"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label>Timeline *</Label>
                <Select name="timeline" required>
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

              {/* Additional Details */}
              <div className="space-y-2">
                <Label htmlFor="details">
                  Additional Details or Specifications
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="bg-background border-border resize-none"
                />
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
                    Submit Powder Inquiry
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

export default PowderInquiry;
