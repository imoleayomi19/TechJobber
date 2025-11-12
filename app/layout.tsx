import type { Metadata } from "next";
import "./globals.css";
import {Inter }from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechJobber",
  description: "'A job board for developers, engineers, designers, and tech talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
