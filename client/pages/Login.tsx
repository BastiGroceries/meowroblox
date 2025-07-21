import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [showError, setShowError] = useState(false);
  const [pendingUserData, setPendingUserData] = useState<{ username: string; avatarUrl: string } | null>(null);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const { login, verifyUser, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);
    
    if (!username.trim()) {
      setShowError(true);
      return;
    }

    const success = await login(username.trim());
    
    if (success) {
      // Generate consistent avatar URL based on username - same logic as AuthContext
      const userId = Math.abs(username.trim().split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0)) % 10000000 + 1;

      const avatarUrl = `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`;
      setPendingUserData({ username: username.trim(), avatarUrl });
      setShowVerification(true);
    } else {
      setShowError(true);
    }
  };

  const handleVerification = (confirmed: boolean) => {
    if (confirmed) {
      verifyUser(true);
      navigate("/");
    } else {
      verifyUser(false);
      setShowVerification(false);
      setPendingUserData(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="shadow-2xl border-0 rounded-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🎮</span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Login to Meow Roblox Store
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Enter your Roblox username to continue
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Roblox Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter your Roblox username"
                    disabled={isLoading}
                  />
                </div>

                {showError && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">
                      Incorrect username. Please check your Roblox username and try again.
                    </AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have a Roblox account?{" "}
                  <a 
                    href="https://www.roblox.com/signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue font-medium hover:underline"
                  >
                    Sign up here
                  </a>
                </p>
                <Link 
                  to="/" 
                  className="text-sm text-gray-500 hover:text-brand-blue transition-colors inline-block mt-2"
                >
                  ← Back to homepage
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Verification Dialog */}
      <Dialog open={showVerification} onOpenChange={setShowVerification}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">
              Verify Your Account
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Is this your Roblox avatar?
              </p>
              
              {pendingUserData && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <img
                      src={pendingUserData.avatarUrl}
                      alt={`${pendingUserData.username}'s avatar`}
                      className="w-32 h-32 rounded-full border-4 border-brand-blue shadow-lg"
                      onError={(e) => {
                        // Fallback to default Roblox avatar if image fails to load
                        (e.target as HTMLImageElement).src = "https://www.roblox.com/headshot-thumbnail/image?userId=1&width=420&height=420&format=png";
                      }}
                    />
                  </div>
                  <div className="bg-brand-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800">
                      Username: {pendingUserData.username}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-3">
              <Button
                onClick={() => handleVerification(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                No, that's not me
              </Button>
              <Button
                onClick={() => handleVerification(true)}
                className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white"
              >
                Yes, that's me!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
