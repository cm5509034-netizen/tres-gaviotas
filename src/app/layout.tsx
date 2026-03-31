import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tres Gaviotas | Joyería Oro 18k",
  description: "Exclusivas joyas de oro 18k. Collares, anillos, pulseras y aretes de la más alta calidad. Elegancia y distinción en cada pieza.",
  keywords: ["joyería", "oro 18k", "anillos", "collares", "pulseras", "aretes", "lujo", "Tres Gaviotas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${cormorant.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
