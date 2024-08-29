import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/topHeader"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CostaCruz Serviços de Construção e Engenharia",
  description: "Serviços de Construção e Engenharia",
  keywords: ["Engenharia Civil", "construção", "obras", "projetos", "material de construção", "construção civil"],
  openGraph: {
    title: "CostaCruz Serviços de Construção e Engenharia",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        {children}
      </body>
    </html>
  );
}
