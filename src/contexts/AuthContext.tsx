/**
 * AuthContext - Authentication State Management
 *
 * This context manages authentication state for the application.
 * It provides login/logout functionality and tracks authentication status.
 *
 * Key learning points:
 * - Context for global authentication state
 * - Protected routes pattern
 * - Simple authentication simulation
 */

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Context Value Interface
 */
interface AuthContextValue {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

/**
 * Create Context
 */
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * Provider Props
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider Component
 *
 * Provides authentication state to the entire application.
 * In a real app, this would integrate with an actual auth service.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  /**
   * State: Authentication status
   *
   * I'm starting with false (logged out).
   * In a real app, you'd check for a token or session.
   */
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /**
   * Login Function
   *
   * Sets authentication to true.
   * In a real app, this would:
   * - Send credentials to a server
   * - Receive and store an auth token
   * - Handle errors
   */
  const login = () => {
    setIsAuthenticated(true);
  };

  /**
   * Logout Function
   *
   * Sets authentication to false.
   * In a real app, this would:
   * - Clear auth token
   * - Clear user data
   * - Redirect to login page
   */
  const logout = () => {
    setIsAuthenticated(false);
  };

  /**
   * Context Value
   */
  const value: AuthContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom Hook: useAuth
 *
 * Makes it easy to consume the auth context.
 *
 * Usage in components:
 * const { isAuthenticated, login, logout } = useAuth();
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
