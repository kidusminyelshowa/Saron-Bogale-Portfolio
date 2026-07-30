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
  title: "Saron Bogale | Architect & Muralist",
  description: "Saron Bogale is an architect, muralist and set designer based in Addis Ababa, Ethiopia. Founder of JONIYA Studio.",
  openGraph: {
    title: "Saron Bogale",
    description: "Architect, muralist and set designer based in Addis Ababa, Ethiopia.",
    siteName: "Saron Bogale",
    type: "website",
    images: "/og.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saron Bogale",
  "jobTitle": "Architect, Muralist, and Set Designer",
  "description": "Architect, muralist and set designer based in Addis Ababa, Ethiopia. Founder of JONIYA Studio.",
  "url": "https://saronbogale.com" // You can update this to the final domain if different
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col w-full max-w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
