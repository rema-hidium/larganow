import type { Metadata } from "next";
import { Alata, Almarai } from "next/font/google";
import "./globals.css";

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alata',
});

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-almarai',
});

export const metadata: Metadata = {
  title: "LargaNow - Online Booking",
  description: "Book your ferry tickets online with LargaNow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${alata.variable} ${almarai.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
