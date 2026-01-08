import type { Metadata } from "next";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { getBaseUrl } from "@/lib/url";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = getProductById(id);
    const baseUrl = getBaseUrl();

    if (!product) {
        return {
            title: "Product Not Found - Best SEO practices in Next.js",
            description: "The requested product could not be found.",
            keywords: ["product", "best SEO practices", "Next.js"],
            alternates: {
                canonical: `${baseUrl}/products/${id}`,
            },
        };
    }

    return {
        title: `${product.name} - Product - Best SEO practices in Next.js`,
        description: product.description,
        keywords: ["product", "best SEO practices", "Next.js", ...product.category],
        openGraph: {
            title: `${product.name} - Product - Best SEO practices in Next.js`,
            description: product.description,
            url: `${baseUrl}/products/${id}`,
            siteName: "Next.js SEO Demo App",
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: `${baseUrl}${product.image}`,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} - Product - Best SEO practices in Next.js`,
            description: product.description,
            images: [`${baseUrl}${product.image}`],
        },
        alternates: {
            canonical: `${baseUrl}/products/${id}`,
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);
    const baseUrl = getBaseUrl();

    if (!product) {
        return (
            <main>
                <h1>Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
                <nav aria-label="Navigation">
                    <Link href="/products">Back to Products</Link>
                </nav>
            </main>
        );
    }

    const productStructuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category.join(", "),
        url: `${baseUrl}/products/${id}`,
        image: `${baseUrl}${product.image}`,
        brand: {
            "@type": "Brand",
            name: product.brand,
        },
        sku: product.sku,
        offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: product.currency,
            availability: `https://schema.org/${product.availability}`,
            url: `${baseUrl}/products/${id}`,
        },
        ...(product.rating && product.reviewCount
            ? {
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: product.rating,
                    reviewCount: product.reviewCount,
                },
            }
            : {}),
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: `${baseUrl}/products`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `${baseUrl}/products/${id}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />
            <nav aria-label="Breadcrumb">
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li aria-current="page">{product.name}</li>
                </ol>
            </nav>
            <main>
                <article>
                    <header>
                        <h1>{product.name}</h1>
                    </header>
                    <section aria-label="Product details">
                        <h2>Product Information</h2>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Category:</strong> {product.category.join(", ")}</p>
                        <p><strong>Price:</strong> {product.currency} {product.price.toFixed(2)}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>SKU:</strong> {product.sku}</p>
                        <p><strong>Availability:</strong> {product.availability}</p>
                        {product.rating && product.reviewCount && (
                            <p>
                                <strong>Rating:</strong> {product.rating} ({product.reviewCount} reviews)
                            </p>
                        )}
                    </section>
                </article>
                <nav aria-label="Navigation">
                    <Link href="/products">Back to Products</Link>
                </nav>
            </main>
        </>
    );
}
