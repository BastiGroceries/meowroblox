import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 font-['Poppins']">
                Meow Roblox Store
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/items" 
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Items
            </Link>
            <Link 
              to="/games" 
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Games
            </Link>
            <Link 
              to="/templates" 
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Templates
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
