# Next.js SEO Demo App

A demo app for SEO best practices in Next.js.

## About

This demo app serves as a reference implementation to optimize a Next.js applications for search engines. It explore features and best practices that can be applied to production applications.

## Features

- Comprehensive metadata configuration with Open Graph and Twitter Cards
- Dynamic sitemap generation
- Robots.txt configuration
- Structured data (JSON-LD) for rich snippets
- Image optimization with Next.js Image component
- Font optimization with Next.js font system
- Semantic HTML and accessibility best practices
- Dynamic metadata generation for dynamic routes
- Canonical URLs for all pages

## Tech Stack

- **Next.js** 16.1.1
- **React** 19.2.3
- **TypeScript** 5
- **Tailwind CSS** 4

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

## Project Structure

```
app/
  ├── layout.tsx           # Root layout with default metadata configuration
  ├── page.tsx             # Home page with SEO practices
  ├── sitemap.ts           # Dynamic sitemap generation
  ├── robots.ts            # Robots.txt configuration
  ├── products/
  │   ├── page.tsx         # Products listing page with CollectionPage schema
  │   └── [id]/
  │       └── page.tsx     # Dynamic product pages with Product schema
  └── globals.css          # Global styles
```

### Key Files

- **`app/layout.tsx`**: Root layout with comprehensive default metadata configuration including Open Graph, Twitter Cards, robots directives, and viewport settings.
- **`app/page.tsx`**: Home page demonstrating SEO practices with Organization structured data, metadata overrides, and optimized images.
- **`app/sitemap.ts`**: Dynamic sitemap generation that includes all static and dynamic routes with appropriate priorities and change frequencies.
- **`app/robots.ts`**: Robots.txt configuration that controls search engine crawling and references the sitemap.
- **`app/products/page.tsx`**: Products listing page with CollectionPage structured data and proper metadata.
- **`app/products/[id]/page.tsx`**: Dynamic product pages with generateMetadata function, Product and Breadcrumb structured data.

## SEO Best Practices Demonstrated

### 1. Metadata Configuration

The app implements comprehensive metadata configuration at both the root layout and page levels:

#### Root Layout Metadata (`app/layout.tsx`)
- **Title Template**: Uses a template pattern (`%s | Next.js SEO Demo App`) for consistent title formatting across pages
- **Metadata Base URL**: Configurable base URL using environment variables
- **Keywords**: Relevant keywords array for better search engine understanding
- **Authors & Creator**: Proper attribution metadata
- **Open Graph Tags**: Complete Open Graph implementation for social media sharing
  - Type, locale, URL, site name, title, description
- **Twitter Cards**: Twitter-specific metadata with `summary_large_image` card type
- **Viewport Configuration**: Responsive viewport settings with proper scaling
- **Theme Color**: Support for light and dark mode themes
- **Robots Directives**: Granular control over search engine indexing
  - Index/follow settings
  - Google-specific bot directives (max-snippet, max-image-preview, max-video-preview)

#### Page-Level Metadata
- **Page-Specific Titles**: Each page overrides the default title
- **Unique Descriptions**: Tailored descriptions for each page
- **Canonical URLs**: Prevents duplicate content issues by specifying canonical URLs
- **Dynamic Metadata**: Product pages use `generateMetadata` function for dynamic metadata generation based on route parameters

### 2. Structured Data (JSON-LD)

The app implements Schema.org structured data for rich snippets in search results:

- **Organization Schema** (`app/page.tsx`): Defines the organization with name, URL, logo, and description
- **Product Schema** (`app/products/[id]/page.tsx`): Complete product information including:
  - Product name, description, category
  - Brand information
  - Pricing and availability
  - SKU
  - Ratings and reviews (when available)
  - Product images
- **Breadcrumb Schema** (`app/products/[id]/page.tsx`): Navigation breadcrumbs for better user experience and search understanding
- **CollectionPage Schema** (`app/products/page.tsx`): Defines the products listing page with ItemList structure

### 3. Sitemap Generation

The app includes dynamic sitemap generation (`app/sitemap.ts`):

- **Automatic Route Discovery**: Dynamically includes all product pages
- **Priority Configuration**: Different priorities for different page types (home: 1.0, products: 0.8, individual products: 0.7)
- **Change Frequency**: Specifies how often content is updated (weekly)
- **Last Modified Dates**: Tracks when pages were last updated

### 4. Robots.txt Configuration

The app provides a robots.txt file (`app/robots.ts`):

- **Crawl Directives**: Allows all user agents to crawl the site
- **Disallow Rules**: Blocks crawling of API routes
- **Sitemap Reference**: Points search engines to the sitemap location

### 5. Image Optimization

- **Next.js Image Component**: Uses the optimized `next/image` component for automatic image optimization
- **Priority Loading**: Critical images use the `priority` prop for above-the-fold content
- **Alt Text**: All images include descriptive alt text for accessibility and SEO
- **Responsive Images**: Automatic responsive image generation
- **Open Graph Images**: Properly sized images (1200x630) for social media sharing

### 6. Font Optimization

- **Next.js Font System**: Uses `next/font/google` for automatic font optimization
- **Subset Loading**: Only loads necessary character subsets (latin)
- **Font Display**: Optimized font loading strategy
- **CSS Variables**: Fonts are exposed as CSS variables for easy theming

### 7. Semantic HTML & Accessibility

- **Semantic Elements**: Proper use of `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`
- **ARIA Labels**: Navigation and sections include ARIA labels for screen readers
- **Breadcrumb Navigation**: Accessible breadcrumb navigation with proper markup
- **Language Attribute**: HTML lang attribute set to "en" for proper language declaration

### 8. URL Structure

- **Clean URLs**: SEO-friendly URL structure (`/products/[id]`)
- **Canonical URLs**: Every page specifies its canonical URL to prevent duplicate content issues
- **Environment-Based URLs**: Uses environment variables for base URL configuration

### 9. Dynamic Metadata Generation

- **generateMetadata Function**: Product pages use Next.js `generateMetadata` to dynamically generate metadata based on route parameters
- **Error Handling**: Proper metadata for 404 pages
- **Product-Specific Metadata**: Each product page gets unique title, description, and Open Graph images

### 10. Social Media Optimization

- **Open Graph Protocol**: Complete OG tags for Facebook, LinkedIn, and other platforms
- **Twitter Cards**: Optimized Twitter Card metadata with large image support
- **Social Images**: Properly sized and optimized images for social sharing (1200x630px)

## Environment Variables

Create a `.env.local` file with the following variable:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

This is used for:
- Generating absolute URLs in metadata
- Sitemap generation
- Structured data
- Canonical URLs

