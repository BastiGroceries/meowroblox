import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

export function Header() {
  const { user, logout } = useAuth();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutConfirm(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirm(false);
  };
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

          {/* CTA Button / User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-3 px-3 py-2 hover:bg-brand-blue-50 rounded-lg transition-colors">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user.avatarUrl} alt={user.username} />
                      <AvatarFallback className="bg-brand-blue text-white text-sm">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">
                      {user.username}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center space-x-2">
                      <span>👤</span>
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center space-x-2">
                      <span>📦</span>
                      <span>My Orders</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogoutClick} className="flex items-center space-x-2 text-red-600">
                    <span>🚪</span>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Login
                  </Button>
                </Link>
                <Button
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Shop Now
                </Button>
              </div>
            )}
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

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <span>🚪</span>
              <span>Confirm Logout</span>
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to logout from your account?
            </DialogDescription>
          </DialogHeader>

          <div className="flex space-x-3 mt-6">
            <Button
              onClick={handleLogoutCancel}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogoutConfirm}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
