import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etheria Tarot - Mystical Guidance | TEST FONTS WORKING",
  description: "Contemporary metropolitan wellness. Professional energy healing and spiritual guidance in an urban sanctuary.",
  keywords: ['Reiki', 'Tarot', 'Spiritual Healing', 'Energy Work', 'Pedro Tisott', 'Urban Spirit', 'Wellness'],
  openGraph: {
    title: 'Pedro Tisott - Urban Spirit',
    description: 'Contemporary metropolitan wellness sanctuary',
    images: ['/urban-og.jpg'],
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Cormorant+Infant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-cormorant-infant antialiased bg-black-pearl text-ivory-light" style={{fontFamily: 'Cormorant Infant, serif', backgroundColor: '#1C1C1C', color: '#F9F7F4'}}>
        {children}
      </body>
    </html>
  );
}
