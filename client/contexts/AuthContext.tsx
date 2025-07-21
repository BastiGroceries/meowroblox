import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  avatarUrl: string;
  verified: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string) => Promise<boolean>;
  verifyUser: (confirmed: boolean) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Generate a Roblox-style avatar URL based on username
const generateRobloxAvatarUrl = (username: string): string => {
  // Generate a consistent user ID from username hash
  const userId = Math.abs(username.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0)) % 10000000 + 1; // Generate ID between 1 and 10,000,000

  // Use Roblox's actual avatar API endpoint format
  return `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`;
};

// Mock function to validate Roblox username
const validateRobloxUsername = async (username: string): Promise<{ isValid: boolean; avatarUrl?: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock validation - in real app, this would call Roblox API
  const validUsernames = ['testuser', 'player123', 'robloxgamer', 'buildmaster', 'scriptkid'];
  const isValid = validUsernames.includes(username.toLowerCase()) || username.length >= 3;

  if (isValid) {
    const avatarUrl = generateRobloxAvatarUrl(username);
    return { isValid: true, avatarUrl };
  }

  return { isValid: false };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingUser, setPendingUser] = useState<{ username: string; avatarUrl: string } | null>(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('roblox_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const result = await validateRobloxUsername(username);
      
      if (result.isValid && result.avatarUrl) {
        setPendingUser({ username, avatarUrl: result.avatarUrl });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyUser = (confirmed: boolean) => {
    if (confirmed && pendingUser) {
      const newUser: User = {
        username: pendingUser.username,
        avatarUrl: pendingUser.avatarUrl,
        verified: true
      };
      setUser(newUser);
      localStorage.setItem('roblox_user', JSON.stringify(newUser));
    }
    setPendingUser(null);
  };

  const logout = () => {
    setUser(null);
    setPendingUser(null);
    localStorage.removeItem('roblox_user');
  };

  const value: AuthContextType = {
    user,
    login,
    verifyUser,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Hook to get pending user for verification
export function usePendingUser() {
  const context = useContext(AuthContext);
  return context ? (context as any).pendingUser : null;
}
