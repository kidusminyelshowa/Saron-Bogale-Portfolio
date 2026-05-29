import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cabin = localFont({
  src: [
    {
      path: "../../public/Burbank Big Regular Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Burbank Big Regular Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Burbank Big Regular Medium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cabin",
});

const meaCulpa = localFont({
  src: "../../public/Brick.ttf",
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
