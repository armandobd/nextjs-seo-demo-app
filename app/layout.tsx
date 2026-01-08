import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getBaseUrl } from "@/lib/url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Next.js SEO Demo App",
    template: "%s | Next.js SEO Demo App",
  },
  description:
    "A comprehensive demonstration of SEO best practices in Next.js, including metadata, structured data, Open Graph tags, and more.",
  keywords: [
    "Next.js",
    "SEO",
    "Search Engine Optimization",
    "React",
    "Web Development",
    "Metadata",
    "Open Graph",
    "Structured Data",
  ],
  authors: [
    {
      name: "Next.js SEO Demo",
    },
  ],
  creator: "Next.js SEO Demo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseUrl(),
    siteName: "Next.js SEO Demo App",
    title: "Next.js SEO Demo App",
    description:
      "A comprehensive demonstration of SEO best practices in Next.js, including metadata, structured data, Open Graph tags, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js SEO Demo App",
    description:
      "A comprehensive demonstration of SEO best practices in Next.js, including metadata, structured data, Open Graph tags, and more.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
