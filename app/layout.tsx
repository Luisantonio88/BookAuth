import type { Metadata } from "next";
import {
  Babylonica,
  Bonheur_Royale,
  Estonia,
  Inter,
  Italianno,
} from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookJourney",
  description: "Your books organized with you always",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
