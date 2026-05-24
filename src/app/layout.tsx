import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Bharadwaj — IS @ SMU",
  description:
    "Information Systems student at SMU (Business Analytics & FinTech). Building at the intersection of technology and business. Open to internships in technology and financial services.",
  keywords: [
    "Akash Bharadwaj",
    "SMU",
    "Information Systems",
    "Business Analytics",
    "FinTech",
    "Singapore",
    "software engineer",
    "internship",
  ],
  authors: [{ name: "Akash Bharadwaj" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Akash Bharadwaj — IS @ SMU",
    description:
      "Information Systems student at SMU (Business Analytics & FinTech). Building at the intersection of technology and business.",
    type: "website",
    locale: "en_SG",
  },
  twitter: {
    card: "summary",
    title: "Akash Bharadwaj — IS @ SMU",
    description:
      "Information Systems student at SMU (Business Analytics & FinTech). Open to internships in technology and financial services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
