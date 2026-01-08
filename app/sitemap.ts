import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { getBaseUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();
    const products = getAllProducts();

    const productEntries = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...productEntries,
    ];
}