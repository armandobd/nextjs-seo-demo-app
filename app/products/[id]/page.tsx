import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { id: string, name: string, description: string, category: string[] } }): Promise<Metadata> {

    const { id, name, description, category } = await params;
    if (!id || !name || !description || !category) {
        return {
            title: "Product - Best SEO practices in Next.js",
            description: "This is product page for best SEO practices in Next.js.",
            keywords: ["product", "best SEO practices", "Next.js"],
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
            },
        };
    }

  return {
    title: `${params.name} - Product - Best SEO practices in Next.js`,
    description: `${description}`,
    keywords: ["product", "best SEO practices", "Next.js"],
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    },
  };
} 

export async function ProductPage({ params }: { params: { id: string, name: string, description: string, category: string[] } }) {

    const { id, name, description, category } = await params;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    category: category.join(", "),
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
  };

  return (
    <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <h1>Product {id}</h1>
        <p>Name: {name}</p>
        <p>Description: {description}</p>
        <p>Category: {category.join(", ")}</p>
        <Link href="/products">Products</Link>
    </>
  );
}
