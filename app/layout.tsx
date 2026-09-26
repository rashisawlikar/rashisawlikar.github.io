import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Playfair_Display, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rashi Rahul Sawlikar - Project & Transformation",
  description: "Portfolio and professional profile of Rashi Rahul Sawlikar, a project coordination and transformation professional.",
  keywords: [
    "Rashi Rahul Sawlikar",
    "Project coordination",
    "Change management",
    "Business transformation",
    "Portfolio",
  ],
  authors: [{ name: "Rashi Rahul Sawlikar" }],
  creator: "Rashi Rahul Sawlikar",
  publisher: "Rashi Rahul Sawlikar",
  icons: {
    icon: "/flavicon/favicon.ico",
    apple: "/flavicon/apple-touch-icon.png",
  },
  manifest: "/flavicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rashi Rahul Sawlikar - Project & Transformation",
    description: "Project coordination, change management, transformation, and business strategy.",
    siteName: "Rashi Rahul Sawlikar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashi Rahul Sawlikar - Project & Transformation",
    description: "Project coordination, change management, transformation, and business strategy.",
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
