/**
 * Admin Page
 *
 * Protected admin dashboard - only accessible when authenticated.
 * Route: /admin (protected)
 */

import { FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import './Admin.css';

function Admin() {
  const { logout } = useAuth();

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>You have successfully accessed the protected admin area!</p>

        <div className="admin-info">
          <h2>Admin Features</h2>
          <ul>
            <li><FaCheckCircle className="check-icon" /> Authenticated access only</li>
            <li><FaCheckCircle className="check-icon" /> Protected route implementation</li>
            <li><FaCheckCircle className="check-icon" /> Automatic redirect for unauthorized users</li>
          </ul>
        </div>

        <button onClick={logout} className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Admin;
