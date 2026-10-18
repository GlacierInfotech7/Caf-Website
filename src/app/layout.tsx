import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ember & Bloom — Neighbourhood Café",
  description:
    "A warm neighbourhood café for thoughtfully brewed coffee, fresh bakes, and slow mornings.",
  keywords: [
    "artisan coffee",
    "coffee roastery",
    "specialty coffee",
    "café",
    "single-origin",
    "Ember & Bloom",
  ],
  authors: [{ name: "Glacier InfoTech" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Ember & Bloom — Neighbourhood Café",
    description:
      "Thoughtfully brewed coffee, fresh bakes, and a welcoming place to linger.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
