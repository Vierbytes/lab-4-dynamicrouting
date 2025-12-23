/**
 * ProtectedRoute Component
 *
 * This component wraps routes that require authentication.
 * If the user is not authenticated, they're redirected to the login page.
 *
 * Key learning points:
 * - Route protection pattern
 * - Conditional rendering based on auth state
 * - Programmatic navigation with Navigate
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * ProtectedRoute Component
 *
 * Checks if user is authenticated before rendering children.
 * If not authenticated, redirects to login page.
 */
function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  /**
   * If not authenticated, redirect to login page
   *
   * The Navigate component from React Router performs the redirect.
   * The 'replace' prop replaces the current entry in history,
   * so pressing back won't go to the protected route.
   */
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  /**
   * If authenticated, render the protected content
   */
  return <>{children}</>;
}

export default ProtectedRoute;
