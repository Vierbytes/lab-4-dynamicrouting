/**
 * Login Page
 *
 * Simple login page with a button to authenticate.
 * Route: /login
 */

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  /**
   * Handle login button click
   */
  const handleLogin = () => {
    login();
    // Redirect to admin page after login
    navigate('/admin');
  };

  /**
   * If already authenticated, show a message
   */
  if (isAuthenticated) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>Already Logged In</h1>
          <p>You are already authenticated!</p>
          <button onClick={() => navigate('/admin')} className="login-button">
            Go to Admin
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <p>Click the button below to authenticate</p>
        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
        <p className="login-note">
          Note: This is a demo - no credentials required
        </p>
      </div>
    </div>
  );
}

export default Login;
