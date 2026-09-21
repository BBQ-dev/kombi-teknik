import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "İstanbul Kombi Teknik Servisi",
  description: "İstanbul genelinde güvenilir, hızlı ve garantili kombi ve beyaz eşya teknik servis hizmetleri.",
  verification: {
    google: "ZV77UAhsws9W0OjPfoCzcbI_YkqOBEkH5Pjd75RQJ1U",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "İstanbul Kombi Teknik Servisi",
    "image": "https://istanbulkombiteknik.com.tr/icon.svg",
    "@id": "https://istanbulkombiteknik.com.tr/#organization",
    "url": "https://istanbulkombiteknik.com.tr",
    "telephone": "+905367499349",
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sancaktepe",
      "addressRegion": "İstanbul",
      "streetAddress": "Meclis, Semih Sancar Cd. No:15",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.012950,
      "longitude": 29.205023
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Çekmeköy" },
      { "@type": "AdministrativeArea", "name": "Sancaktepe" },
      { "@type": "AdministrativeArea", "name": "Sultanbeyli" },
      { "@type": "AdministrativeArea", "name": "Ümraniye" },
      { "@type": "AdministrativeArea", "name": "Kadıköy" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kombi ve Petek Temizliği Hizmetleri",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kombi Tamiri ve Onarım" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Periyodik Kombi Bakımı" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Makineli Petek Temizliği" } }
      ]
    }
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="application/vnd.google-earth.kml+xml"
          href="https://istanbulkombiteknik.com.tr/geo.kml"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}