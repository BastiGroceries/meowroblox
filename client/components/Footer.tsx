import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-brand-blue-100 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900 font-['Poppins']">
                  Meow Roblox Store
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your ultimate destination for premium Roblox items, games, and templates. 
                Enhance your gaming experience with our curated collection.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0H7.99C3.58 0 0 3.58 0 7.99v4.02c0 4.411 3.58 7.99 7.99 7.99h4.029c4.41 0 7.99-3.579 7.99-7.99V7.99C20.007 3.58 16.427.001 12.017.001zM10 15.006A5.006 5.006 0 1110 4.994a5.006 5.006 0 010 10.012zm5.967-10.445a1.194 1.194 0 11-2.388 0 1.194 1.194 0 012.388 0zM10 6.865a3.135 3.135 0 100 6.27 3.135 3.135 0 000-6.27z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/items" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Browse Items
                  </Link>
                </li>
                <li>
                  <Link to="/games" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Popular Games
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Avatar Items
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Weapons & Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Building Kits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Scripts & Code
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 Meow Roblox Store. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
