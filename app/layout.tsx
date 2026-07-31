import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "Sabah Industrial Group | گروه صنعتی صباح",
      template: "%s | Sabah Industrial Group",
    },
    description:
      "Sabah Industrial Group is an integrated food industry ecosystem spanning supply, manufacturing, packaging, logistics, distribution and commerce.",
    icons: {
      icon: "/sabah-logo.png",
      shortcut: "/sabah-logo.png",
    },
    openGraph: {
      title: "Sabah Industrial Group",
      description: "An integrated industrial ecosystem — from supply to market.",
      type: "website",
      locale: "fa_IR",
      alternateLocale: "en_US",
      images: [{ url: `${origin}/og.png`, width: 1735, height: 909, alt: "Sabah Industrial Group" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sabah Industrial Group",
      description: "An integrated industrial ecosystem — from supply to market.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
