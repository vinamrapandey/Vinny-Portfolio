import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

// TODO: switch to the custom domain (e.g. vinamrapandey.com) once one is wired up.
const siteUrl = `https://vinamrapandey.github.io${
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
}`;
const title = "Vinamra Pandey — Four products. One person. Every layer.";
const description =
  "Product manager, brand strategist, AI consultant, and full-stack builder. I take AI products from blueprint to shipped — alone.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.png` },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Vinamra Pandey",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-body bg-canvas text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
