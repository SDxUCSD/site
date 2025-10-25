import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "SDxUCSD - UCSD's Premier Builder Community | SDX UCSD",
  description:
    "SDxUCSD (SDX UCSD) is the premier community for technologists, creatives, startup founders, and builders at UC San Diego. Join hackathons, talks, and networking events.",
  keywords: "SDX UCSD, SDxUCSD, UCSD builders, UCSD startups, UCSD hackathons, UC San Diego tech community, UCSD entrepreneurs, San Diego tech events",
  authors: [{ name: "SDxUCSD Team" }],
  creator: "SDxUCSD",
  publisher: "SDxUCSD",
  metadataBase: new URL('https://sdxucsd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SDxUCSD - UCSD's Premier Builder Community",
    description: "SDxUCSD (SDX UCSD) is the premier community for technologists, creatives, startup founders, and builders at UC San Diego.",
    url: 'https://sdxucsd.com',
    siteName: 'SDxUCSD',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/sdx-v2.png',
        width: 1200,
        height: 630,
        alt: 'SDxUCSD - UCSD Builder Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SDxUCSD - UCSD's Premier Builder Community",
    description: "SDxUCSD (SDX UCSD) is the premier community for technologists, creatives, startup founders, and builders at UC San Diego.",
    images: ['/sdx-v2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
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
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
