import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import PWAWrapper from "@/components/pwa/PWAWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FS University - Excellence in Education",
  description:
    "Welcome to FS University, where innovation meets tradition. Join our community of learners, researchers, and leaders shaping the future. Access programs, apply online, and stay connected with our Progressive Web App.",
  applicationName: "FS University",
  authors: [{ name: "FS University Development Team" }],
  generator: "Next.js",
  keywords: [
    "FS University",
    "education",
    "university",
    "academic programs",
    "higher education",
    "progressive web app",
    "PWA",
  ],
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B0000" },
    { media: "(prefers-color-scheme: dark)", color: "#8B0000" },
  ],
  colorScheme: "light",
  creator: "FS University",
  publisher: "FS University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FS University",
    startupImage: [
      {
        url: "/icons/icon-512x512.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "FS University",
    title: "FS University - Excellence in Education",
    description:
      "Progressive Web App for FS University - Access education resources anywhere, anytime",
    url: "https://fs-university.netlify.app",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "FS University Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "FS University",
    description: "Excellence in Education - Progressive Web App",
    images: ["/icons/icon-512x512.png"],
  },
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B0000" },
    { media: "(prefers-color-scheme: dark)", color: "#8B0000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FS University" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="mask-icon" href="/icons/icon-512x512.png" color="#8B0000" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <PWAWrapper />
      </body>
    </html>
  );
}
