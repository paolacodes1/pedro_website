import type { Metadata } from "next";
import { Poiret_One, Cormorant_Infant } from "next/font/google";
import "./globals.css";

const poiretOne = Poiret_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poiret-one'
});

const cormorantInfant = Cormorant_Infant({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-infant'
});

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
    <html lang="en" className={`${poiretOne.variable} ${cormorantInfant.variable}`}>
      <body className="font-cormorant-infant antialiased bg-gradient-to-br from-slate-50 to-stone-100">
        {children}
      </body>
    </html>
  );
}
