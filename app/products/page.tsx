import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products - Best SEO practices in Next.js",
  description: "This is products page for best SEO practices in Next.js.",
  keywords: ["products", "best SEO practices", "Next.js"],
  openGraph: {
    title: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/products`,
    siteName: "Next.js SEO Demo App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/next.svg`,
        width: 1200,
        height: 630,
        alt: "Products - Next.js SEO Demo App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/next.svg`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/products`,
  },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const collectionPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    url: `${baseUrl}/products`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          "@id": `${baseUrl}/products/${product.id}`,
          name: product.name,
          description: product.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageStructuredData) }}
      />
      <main>
        <header>
          <h1>Products</h1>
          <p>This is products page for best SEO practices in Next.js.</p>
        </header>
        <section aria-label="Product list">
          <h2>Available Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}