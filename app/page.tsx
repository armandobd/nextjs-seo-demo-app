import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Best SEO practices in Next.js",
  description: "This is home page for best SEO practices in Next.js.",
  keywords: ["home", "best SEO practices", "Next.js"],
  openGraph: {
    title: "Home - Best SEO practices in Next.js",
    description: "This is home page for best SEO practices in Next.js.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}`,
    siteName: "Next.js SEO Demo App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/next.svg`,
        width: 1200,
        height: 630,
        alt: "Next.js SEO Demo App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Best SEO practices in Next.js",
    description: "This is home page for best SEO practices in Next.js.",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/next.svg`,
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}`,
  },
};

export default function Home() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Next.js SEO Demo App",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/next.svg`,
    description: "A comprehensive demonstration of SEO best practices in Next.js",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Best SEO practices in Next.js.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              This is demo page for best SEO practices in Next.js.
            </p>
            <Link href="/products">Products</Link>
          </div>
        </main>
      </div>
    </>
  );
}
