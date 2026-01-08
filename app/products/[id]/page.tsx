import type { Metadata } from "next";
import Link from "next/link";
import { getProductById } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return {
            title: "Product Not Found - Best SEO practices in Next.js",
            description: "The requested product could not be found.",
            keywords: ["product", "best SEO practices", "Next.js"],
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
            },
        };
    }

    return {
        title: `${product.name} - Product - Best SEO practices in Next.js`,
        description: product.description,
        keywords: ["product", "best SEO practices", "Next.js", ...product.category],
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return (
            <div>
                <h1>Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
                <Link href="/products">Back to Products</Link>
            </div>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category.join(", "),
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Category: {product.category.join(", ")}</p>
            <Link href="/products">Back to Products</Link>
        </>
    );
}
