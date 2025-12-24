# Lab 4: Dynamic Routing - Blog Application

A full-featured blog application demonstrating React Router's dynamic routing capabilities, authentication, protected routes, and smooth page transitions.

![Blog App Demo](./public/blog.png)

**Live Demo:** https://dynamic-routin.netlify.app/

## Project Overview

This application showcases professional routing patterns with React Router, including dynamic routes, authentication flow, and animated page transitions using Framer Motion. Built with React, TypeScript, and Vite.

## Features

### Core Functionality
- ✓ Mock blog data with 5 sample posts
- ✓ Blog list page showing all posts
- ✓ Dynamic blog post pages using URL slugs
- ✓ Authentication system with login/logout
- ✓ Protected admin route
- ✓ Conditional navbar based on auth status
- ✓ Smooth page transitions with Framer Motion

### User Experience
- Clean, modern design
- Responsive layout for mobile and desktop
- Fade animations between page transitions
- Intuitive navigation
- "Post not found" handling for invalid slugs

## Routes

### Public Routes
- `/` - Home page with feature highlights
- `/blog` - List of all blog posts
- `/blog/:slug` - Individual blog post (dynamic route)
- `/login` - Login page

### Protected Routes
- `/admin` - Admin dashboard (requires authentication)

## Architecture

### React Router Features

**BrowserRouter** - Client-side routing

**Dynamic Routes** - URL parameters for blog posts
```tsx
<Route path="/blog/:slug" element={<BlogPost />} />
```

**Protected Routes** - Authentication-based access control
```tsx
<Route path="/admin" element={
  <ProtectedRoute>
    <Admin />
  </ProtectedRoute>
} />
```

**Navigation** - Programmatic and declarative navigation
```tsx
<Link to="/blog">Blog</Link>
navigate('/admin');
```

### Authentication System

**AuthContext** provides:
- `isAuthenticated` - Current authentication status
- `login()` - Set authenticated state
- `logout()` - Clear authenticated state

**ProtectedRoute Component**:
- Checks authentication status
- Redirects to login if not authenticated
- Renders protected content if authenticated

### Page Transitions

**Framer Motion** with AnimatePresence:
- Fade in/out animations
- Smooth transitions between routes
- Motion div wrapping each page

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

## Project Structure

```
src/
├── lib/
│   └── posts.ts                 # Mock blog data
├── contexts/
│   └── AuthContext.tsx          # Authentication context
├── components/
│   ├── Navbar.tsx               # Navigation with conditional rendering
│   └── ProtectedRoute.tsx       # Route protection wrapper
├── pages/
│   ├── Home.tsx                 # Landing page
│   ├── BlogList.tsx             # All posts list
│   ├── BlogPost.tsx             # Single post (dynamic)
│   ├── Login.tsx                # Login page
│   └── Admin.tsx                # Protected admin page
└── App.tsx                      # Routes and animations
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```
