import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-24 bg-background min-h-[60vh] flex items-center">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-8xl font-bold text-primary mb-6 block">404</span>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-foreground-secondary mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
