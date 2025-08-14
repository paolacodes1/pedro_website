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
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans antialiased bg-gradient-to-br from-slate-50 to-stone-100">
        {children}
      </body>
    </html>
  );
}
