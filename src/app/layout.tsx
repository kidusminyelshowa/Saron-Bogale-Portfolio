import type { Metadata } from "next";
import { Cabin, Mea_Culpa } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cabin",
});

const meaCulpa = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mea-culpa",
});

export const metadata: Metadata = {
  title: "Saron Bogale - Portfolio",
  description: "The digital portfolio of Saron Bogale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${meaCulpa.variable} h-full antialiased w-full max-w-[100vw] overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col w-full max-w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
