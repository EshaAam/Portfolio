import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ekramul Esham | Full Stack Developer",
  description:
    "Portfolio of Ekramul Esham - A full stack developer specializing in Next.js, Laravel, and scalable system architecture.",
  keywords: [
    "Ekramul Esham",
    "Full Stack Developer",
    "Backend Developer",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ekramul Esham" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ekramul Esham | Full Stack Developer",
    description:
      "Portfolio of Ekramul Esham - A full stack developer.",
    siteName: "Ekramul Esham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekramul Esham | Full Stack Developer",
    description:
      "Portfolio of Ekramul Esham - A full stack developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
