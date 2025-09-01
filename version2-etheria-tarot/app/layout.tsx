import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
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
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans antialiased bg-black-pearl text-ivory-light">
        {children}
      </body>
    </html>
  );
}