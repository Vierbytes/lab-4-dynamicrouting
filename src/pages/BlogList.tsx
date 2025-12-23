/**
 * BlogList Page
 *
 * Displays all blog posts as a list with links to individual posts.
 * Route: /blog
 */

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getAllPosts } from '../lib/posts';
import './BlogList.css';

function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="blog-list-page">
      <h1>Blog Posts</h1>
      <p className="subtitle">Explore articles about React and web development</p>

      <div className="posts-grid">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="post-card"
          >
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{post.date}</span>
            </div>
            <h2>{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <span className="read-more">Read more <FaArrowRight className="arrow-icon" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
