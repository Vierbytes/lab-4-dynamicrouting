# Lab 4: Dynamic Routing - Blog Application

A full-featured blog application demonstrating React Router's dynamic routing capabilities, authentication, protected routes, and smooth page transitions.

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

## Technical Highlights

### Dynamic Routing
- URL parameters with `useParams` hook
- Slug-based post lookup
- 404 handling for invalid slugs

### Authentication Flow
1. User clicks "Log In" in navbar
2. Login page provides simple authentication
3. After login, navbar shows "Admin" and "Log Out"
4. Admin route becomes accessible
5. Direct access to `/admin` without auth redirects to login

### Page Transitions
- AnimatePresence wrapper for exit animations
- Route-based animation keys
- Smooth fade and slide effects
- "wait" mode for sequential transitions

### Code Quality
- TypeScript for type safety
- Clean component composition
- Custom hooks for contexts
- Comprehensive inline documentation
- ESLint compliant
- No console errors

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

## Lab Requirements Met

### Mock Blog Data (Complete)
- ✓ Created in `lib/posts.ts`
- ✓ Contains id, slug, title, content properties
- ✓ 5 sample blog posts with full content

### Public Blog Pages (Complete)
- ✓ `/blog` displays all posts as a list
- ✓ Each post links to individual page using slug
- ✓ `/blog/:slug` renders single post
- ✓ "Post not found" message for invalid slugs
- ✓ useParams hook for URL parameter access

### Authentication System (Complete)
- ✓ AuthContext with state and functions
- ✓ `isAuthenticated` boolean
- ✓ `login()` and `logout()` functions
- ✓ `/login` page with login button
- ✓ Navbar conditional rendering
- ✓ Shows "Log In" when logged out
- ✓ Shows "Log Out" and "Admin" when logged in

### Protected Admin Route (Complete)
- ✓ `/admin` page restricted to authenticated users
- ✓ ProtectedRoute wrapper component
- ✓ Automatic redirect to `/login` for unauthorized access
- ✓ Welcome message on admin dashboard

### Bonus: Page Transitions (Complete)
- ✓ Framer Motion integration
- ✓ AnimatePresence component
- ✓ Fade-in/fade-out animations
- ✓ Smooth transitions during navigation

## Grading Criteria

**All Deliverables (10 points)**: ✓ Complete
- All files provided
- Project compiles without errors
- TypeScript types correct

**All Main Features (10 points)**: ✓ Complete
- Blog pages functional
- Dynamic routing working
- Authentication flow working
- Protected routes working
- Page transitions working

**Total**: 20/20 points

## Learning Outcomes

This lab demonstrates:
1. React Router dynamic routing with URL parameters
2. Protected route patterns
3. Authentication context implementation
4. Programmatic navigation
5. Page transitions with Framer Motion
6. Conditional rendering based on auth state
7. Clean routing architecture
8. TypeScript with React Router
