/**
 * Navbar Component
 *
 * Navigation bar with conditional rendering based on authentication status.
 * Shows different links depending on whether user is logged in or out.
 */

import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          React Blog
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
              <li>
                <button onClick={logout} className="nav-button">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="nav-link">
                Log In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
