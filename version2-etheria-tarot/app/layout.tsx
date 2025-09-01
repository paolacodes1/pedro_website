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
  title: "Etheria Tarot - Mystical Guidance for the Awakened Soul",
  description: "Unlock the secrets of the ethereal realm through ancient divination. Experience profound insights with tarot and oracle readings.",
  keywords: ['Etheria Tarot', 'Oráculo de Etherias', 'Tarot de Thoth', 'Mystical Guidance', 'Oracle Readings', 'Spiritual Insights', 'Divination'],
  openGraph: {
    title: 'Etheria Tarot - Mystical Guidance',
    description: 'Mystical guidance for the awakened soul through ancient divination',
    images: ['/etheria-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poiretOne.variable} ${cormorantInfant.variable}`}>
      <body className="font-cormorant-infant antialiased bg-black-pearl text-ivory-light">
        {children}
      </body>
    </html>
  );
}