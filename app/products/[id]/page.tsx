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
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            Product Not Found
                        </h1>
                        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            The product you are looking for does not exist.
                        </p>
                        <nav aria-label="Navigation">
                            <Link href="/products">Back to Products</Link>
                        </nav>
                    </div>
                </main>
            </div>
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
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                    <nav aria-label="Breadcrumb" className="w-full">
                        <ol className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>/</li>
                            <li aria-current="page" className="text-black dark:text-zinc-50">{product.name}</li>
                        </ol>
                    </nav>
                    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                        <article className="w-full">
                            <header>
                                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                                    {product.name}
                                </h1>
                            </header>
                            <section aria-label="Product details" className="mt-8 space-y-4">
                                <h2 className="text-xl font-semibold text-black dark:text-zinc-50">Product Information</h2>
                                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <strong>Description:</strong> {product.description}
                                </p>
                                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <strong>Category:</strong> {product.category.join(", ")}
                                </p>
                                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <strong>Price:</strong> {product.currency} {product.price.toFixed(2)}
                                </p>
                                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <strong>Brand:</strong> {product.brand}
                                </p>
                                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                    <strong>Availability:</strong> {product.availability}
                                </p>
                                {product.rating && product.reviewCount && (
                                    <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                                        <strong>Rating:</strong> {product.rating} ({product.reviewCount} reviews)
                                    </p>
                                )}
                            </section>
                        </article>
                        <nav aria-label="Navigation">
                            <Link href="/products">Back to Products</Link>
                        </nav>
                    </div>
                </main>
            </div>
        </>
    );
}
