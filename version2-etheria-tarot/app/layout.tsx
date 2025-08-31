import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Tisott - Reiki & Tarot | Urban Spirit",
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
      <body className="font-cormorant-infant antialiased bg-black-pearl text-ivory-light">
        {children}
      </body>
    </html>
  );
}
