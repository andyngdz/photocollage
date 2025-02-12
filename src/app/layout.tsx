import { UIProvider } from "@/app/ui-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

const fontMain = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Collage Maker",
  description: "Photo Collage Maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${fontMain.variable} antialiased`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
