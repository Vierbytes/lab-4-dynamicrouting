/**
 * Mock Blog Data
 *
 * This file contains in-memory blog post data.
 * In a real application, this would come from an API or database.
 *
 * Each post has:
 * - id: unique identifier
 * - slug: URL-friendly identifier used in routes
 * - title: post title
 * - content: post content (can be markdown or plain text)
 * - excerpt: short preview of the post
 * - author: post author
 * - date: publication date
 */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
}

/**
 * Mock blog posts array
 *
 * I'm creating several sample posts to demonstrate the blog functionality.
 * The slug is used in the URL (e.g., /blog/getting-started-with-react)
 */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to build your first component.',
    author: 'Kayla Knight',
    date: '2024-01-15',
    content: `
# Getting Started with React

React is a powerful JavaScript library for building user interfaces. In this post, we'll explore the fundamentals of React and how to get started.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."

## Key Concepts

1. **Components**: The building blocks of React applications
2. **Props**: How we pass data to components
3. **State**: How components remember things
4. **Hooks**: Functions that let you use React features

## Your First Component

Here's a simple example of a React component:

\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

This is just the beginning of your React journey!
    `.trim(),
  },
  {
    id: 2,
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks',
    excerpt: 'A deep dive into React Hooks and how they simplify state management.',
    author: 'Thierno Bah',
    date: '2024-01-20',
    content: `
# Understanding React Hooks

React Hooks revolutionized how we write React components. Let's explore the most commonly used hooks.

## useState

The useState hook lets you add state to functional components:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

useEffect lets you perform side effects in your components:

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

Hooks make React code more readable and maintainable!
    `.trim(),
  },
  {
    id: 3,
    slug: 'react-router-guide',
    title: 'React Router: A Complete Guide',
    excerpt: 'Master client-side routing in React applications with React Router.',
    author: 'Homam Zituni',
    date: '2024-01-25',
    content: `
# React Router: A Complete Guide

React Router is the standard routing library for React. It keeps your UI in sync with the URL.

## Basic Routing

Set up routes using the BrowserRouter and Route components:

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## Dynamic Routes

Use URL parameters for dynamic content:

\`\`\`jsx
<Route path="/blog/:slug" element={<BlogPost />} />
\`\`\`

Access the parameter in your component:

\`\`\`jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { slug } = useParams();
  return <div>Post: {slug}</div>;
}
\`\`\`

## Navigation

Use the Link component for navigation:

\`\`\`jsx
<Link to="/about">About</Link>
\`\`\`

React Router makes building single-page applications easy!
    `.trim(),
  },
  {
    id: 4,
    slug: 'typescript-with-react',
    title: 'TypeScript with React',
    excerpt: 'Add type safety to your React applications with TypeScript.',
    author: 'Christian Blunt',
    date: '2024-02-01',
    content: `
# TypeScript with React

TypeScript adds static typing to JavaScript, making your React code more robust and maintainable.

## Why TypeScript?

- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Improved autocomplete in your IDE
- **Refactoring**: Rename variables with confidence
- **Documentation**: Types serve as inline documentation

## Component Props

Define props with interfaces:

\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
\`\`\`

## State with TypeScript

Type your state for safety:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
\`\`\`

TypeScript makes React development more predictable and enjoyable!
    `.trim(),
  },
  {
    id: 5,
    slug: 'context-api-patterns',
    title: 'Context API Design Patterns',
    excerpt: 'Learn best practices for using React Context API in large applications.',
    author: 'Magali Lapu',
    date: '2024-02-05',
    content: `
# Context API Design Patterns

The Context API is powerful, but it's important to use it correctly. Here are some best practices.

## When to Use Context

Context is ideal for:
- Theme preferences
- User authentication
- Language settings
- Global UI state

## Pattern 1: Custom Provider Components

Wrap your context logic in a custom provider:

\`\`\`tsx
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

## Pattern 2: Custom Hooks

Create a custom hook for consuming context:

\`\`\`tsx
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
\`\`\`

## Optimization

Use useMemo and useCallback to prevent unnecessary re-renders:

\`\`\`tsx
const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
\`\`\`

These patterns help you build scalable React applications!
    `.trim(),
  },
];

/**
 * Helper function to get a post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Helper function to get all posts
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
