import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            </div>
            
            <div className="bg-brand-blue-50 rounded-2xl p-8 space-y-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚧</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Page Coming Soon
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  This page is currently under development. We're working hard to bring you 
                  an amazing experience. Check back soon or continue exploring our homepage!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button 
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                  >
                    Return to Homepage
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
