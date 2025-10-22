import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Junior Hack 7.0 - Intra-University Hackathon 2025",
    template: "%s | Junior Hack 7.0",
  },
  description: "Join Junior Hack 7.0, Sri Lanka's premier Intra-University hackathon organized by SESA UoK & IEEE Student Branch UoK. Compete for Rs. 150,000+ in prizes, showcase your innovation, and solve real-world challenges. Register your team of 3-4 members now!",
  keywords: [
    "Junior Hack 7.0",
    "JuniorHack",
    "hackathon Sri Lanka",
    "UoK hackathon",
    "SESA UoK",
    "IEEE UoK",
    "Intra-University hackathon",
    "coding competition",
    "programming contest",
    "student hackathon",
    "tech competition Sri Lanka",
    "innovation challenge",
    "software development",
    "University of Kelaniya",
    "2025 hackathon",
  ],
  authors: [
    { name: "SESA UoK", url: "https://www.facebook.com/sesauok" },
    { name: "IEEE Student Branch UoK", url: "https://www.instagram.com/sesa_uok" },
  ],
  creator: "SESA UoK & IEEE Student Branch UoK",
  publisher: "SESA UoK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://junior-hack.sesa.lk"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://junior-hack.sesa.lk",
    title: "Junior Hack 7.0 - Intra-University Hackathon 2025",
    description: "Join Junior Hack 7.0, Sri Lanka's premier Intra-University hackathon. Compete for Rs. 50,000+ in prizes, showcase your innovation, and solve real-world challenges. Register now!",
    siteName: "Junior Hack 7.0",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Junior Hack 7.0 - Intra-University Hackathon 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Hack 7.0 - Intra-University Hackathon 2025",
    description: "Join Junior Hack 7.0, Sri Lanka's premier Intra-University hackathon. Compete for Rs. 150,000+ in prizes. Register your team now!",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@SESA_UoK", // Update with actual Twitter handle
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="WtQmgNW3CwWwlfP-vSVtfTRxXTLafQ539ZQANU9y2KM" />

        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SESA UoK",
              "url": "https://www.facebook.com/sesauok",
              "logo": "https://junior-hack.sesa.lk/logo.png",
              "sameAs": [
                "https://www.facebook.com/sesauok",
                "https://www.instagram.com/sesa.UoK",
                "https://www.linkedin.com/company/sesa-UoK",
                "https://www.youtube.com/@sesaUoK"
              ]
            })
          }}
        />
        
        {/* Structured Data - Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Junior Hack 7.0",
              "description": "Intra-University Hackathon organized by SESA UoK & IEEE Student Branch UoK",
              "startDate": "2025-11-08T08:00:00+05:30",
              "endDate": "2025-11-08T18:00:00+05:30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "University of Kelaniya",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Kelaniya",
                  "addressLocality": "Kelaniya",
                  "addressRegion": "Western Province",
                  "postalCode": "11600",
                  "addressCountry": "LK"
                }
              },
              "image": "https://junior-hack.sesa.lk/_next/image?url=%2Fassets%2Fimages%2Fsoftwareenginneringlogo2.png&w=1920&q=75",
              "organizer": [
                {
                  "@type": "Organization",
                  "name": "SESA UoK",
                  "url": "https://www.facebook.com/sesauok"
                },
                {
                  "@type": "Organization",
                  "name": "IEEE Student Branch UoK",
                  "url": "https://www.instagram.com/sesa_uok"
                }
              ],
              "offers": {
                "@type": "Offer",
                "url": "https://junior-hack.sesa.lk",
                "price": "0",
                "priceCurrency": "LKR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-10-22T00:00:00+05:30"
              }
            })
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${audiowide.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
