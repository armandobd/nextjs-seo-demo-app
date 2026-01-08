import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products - Best SEO practices in Next.js",
  description: "This is products page for best SEO practices in Next.js.",
  keywords: ["products", "best SEO practices", "Next.js"],
  openGraph: {
    title: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    siteName: "Best SEO practices in Next.js",
    locale: "en_US",
    type: "website",
    images: [
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/products.jpg` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    creator: "@armnd87",
    images: [
      { url: `${process.env.NEXT_PUBLIC_BASE_URL}/products.jpg` },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
  },
};

const products = [
  { id: 1, name: "Product 1", description: "This is product 1", category: "Category 1" },
  { id: 2, name: "Product 2", description: "This is product 2", category: "Category 2" },
  { id: 3, name: "Product 3", description: "This is product 3", category: "Category 3" },
];

export function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <p>This is products page for best SEO practices in Next.js.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}