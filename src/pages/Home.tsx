/**
 * Home Page
 *
 * The landing page of the blog application.
 */

import { Link } from 'react-router-dom';
import { FaBook, FaRocket, FaLightbulb } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to the React Blog</h1>
        <p>Exploring React, TypeScript, and modern web development</p>
        <Link to="/blog" className="cta-button">
          Read the Blog
        </Link>
      </div>

      <div className="features">
        <div className="feature">
          <h3><FaBook className="feature-icon" /> Learn React</h3>
          <p>Comprehensive guides on React fundamentals and advanced topics</p>
        </div>
        <div className="feature">
          <h3><FaRocket className="feature-icon" /> Modern Patterns</h3>
          <p>Explore best practices and design patterns for React applications</p>
        </div>
        <div className="feature">
          <h3><FaLightbulb className="feature-icon" /> Practical Examples</h3>
          <p>Code examples you can use in your own projects</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
