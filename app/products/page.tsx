import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import { getBaseUrl } from "@/lib/url";

export const metadata: Metadata = {
  title: "Products - Best SEO practices in Next.js",
  description: "This is products page for best SEO practices in Next.js.",
  keywords: ["products", "best SEO practices", "Next.js"],
  openGraph: {
    title: "Products - Best SEO practices in Next.js",
    description: "This is products page for best SEO practices in Next.js.",
    url: `${getBaseUrl()}/products`,
    siteName: "Next.js SEO Demo App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${getBaseUrl()}/next.svg`,
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
      `${getBaseUrl()}/next.svg`,
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
    canonical: `${getBaseUrl()}/products`,
  },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const baseUrl = getBaseUrl();

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
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
            <header>
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Products
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-4">
                This is products page for best SEO practices in Next.js.
              </p>
            </header>
            <section aria-label="Product list" className="w-full mt-8">
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">Available Products</h2>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}