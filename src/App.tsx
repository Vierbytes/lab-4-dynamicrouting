/**
 * App Component - Main Application with Routing
 *
 * This component sets up:
 * - React Router with all routes
 * - Page transitions with Framer Motion
 * - Protected routes for admin area
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

/**
 * Page Transition Wrapper
 *
 * Wraps each page with fade animation.
 */
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedRoutes Component
 *
 * Handles route transitions with AnimatePresence.
 * This needs to be inside BrowserRouter to access location.
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <BlogList />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/admin"
          element={
            <PageTransition>
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/**
 * App Component
 */
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
