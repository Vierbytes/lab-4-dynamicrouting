/**
 * BlogPost Page
 *
 * Displays a single blog post using dynamic routing.
 * Route: /blog/:slug
 */

import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../lib/posts';
import './BlogPost.css';

function BlogPost() {
  /**
   * Get the slug from URL parameters
   *
   * useParams is a React Router hook that gives us access
   * to dynamic segments in the URL.
   */
  const { slug } = useParams<{ slug: string }>();

  /**
   * Find the post by slug
   */
  const post = slug ? getPostBySlug(slug) : undefined;

  /**
   * Handle post not found
   */
  if (!post) {
    return (
      <div className="blog-post-page not-found">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  /**
   * Render the blog post
   */
  return (
    <div className="blog-post-page">
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>

      <article className="post-content">
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="author">By {post.author}</span>
            <span className="date">{post.date}</span>
          </div>
        </header>

        <div className="post-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
