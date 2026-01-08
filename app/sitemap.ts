import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not set");
    }

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
        {
            url: `${baseUrl}/products/1`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/products/2`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/products/3`,
            lastModified: new Date(),
        },
    ];
}