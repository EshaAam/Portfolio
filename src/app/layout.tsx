import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { SITE } from "@/data/site";
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

const title = `${SITE.name} | ${SITE.role}`;
const description =
  "Portfolio of Ekramul Esham, a full stack software engineer building scalable backends, polished Next.js frontends and LLM-powered systems, and co-author of research on LLM evaluation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "Ekramul Esham",
    "Ekramul Alam Esham",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "LLM",
    "RAG",
    "IUT",
    "Portfolio",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title,
    description,
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
