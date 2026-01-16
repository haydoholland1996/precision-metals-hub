import { Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const blogPosts = [
  {
    title: "Understanding Titanium Powder for Additive Manufacturing",
    excerpt:
      "A comprehensive guide to selecting the right titanium powder grade for your AM application...",
    date: "January 15, 2025",
    category: "Technical",
  },
  {
    title: "PM-HIP vs Traditional Forging: A Comparison",
    excerpt:
      "Exploring the advantages of powder metallurgy HIP processing over conventional manufacturing...",
    date: "January 10, 2025",
    category: "Industry",
  },
  {
    title: "Refractory Metals in Aerospace Applications",
    excerpt:
      "How tungsten, molybdenum, and other refractory metals are enabling next-generation aerospace...",
    date: "January 5, 2025",
    category: "Applications",
  },
  {
    title: "Quality Control in Metal Powder Production",
    excerpt:
      "Best practices for ensuring consistent powder quality and meeting aerospace specifications...",
    date: "December 28, 2024",
    category: "Quality",
  },
  {
    title: "The Role of C103 in Space Propulsion",
    excerpt:
      "Why C103 niobium alloy remains the material of choice for rocket nozzle applications...",
    date: "December 20, 2024",
    category: "Materials",
  },
  {
    title: "Supply Chain Security for Strategic Metals",
    excerpt:
      "Building resilient domestic supply chains for critical materials in defense applications...",
    date: "December 15, 2024",
    category: "Industry",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Technical articles, industry insights, and updates from the Metal
              Powder Supply team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background-secondary">
        <div className="container">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="aspect-video bg-background-tertiary flex items-center justify-center">
              <span className="text-foreground-muted">Featured Image</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-sm text-foreground-muted flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  January 15, 2025
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Understanding Titanium Powder for Additive Manufacturing
              </h2>
              <p className="text-foreground-secondary mb-6">
                A comprehensive guide to selecting the right titanium powder grade
                for your AM application. We cover particle size distribution,
                morphology, and material properties for EBM, SLM, and DMLS
                processes.
              </p>
              <span className="text-primary font-medium cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="aspect-video bg-background-tertiary flex items-center justify-center">
                  <span className="text-foreground-muted text-sm">Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-foreground-secondary text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
