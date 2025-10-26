import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/src/components/header/Header";
import "../src/style/globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fruškogorac - Hiking i Avanture",
  description: "Avature, hiking, planinarenje",
  icons: {
    icon: "/favicon/favicon.svg",
  },
  openGraph: {
    title: "Fruškogorac - Hiking i Avanture",
    description: "Avature, hiking, planinarenje",
    url: "https://fruskogoracture.com",
    siteName: "Fruskogorac ture",
    images: [],
    locale: "sr_Rs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fruskogorac - Hiking i Avanture",
    description: "Avature, hiking, planinarenje",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="canonical"
          href="https://fruskogoracture.com?=instagram.com"
        />
        <link rel="canonical" href="https://fruskogoracture.com" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon-180.png"
        />
      </head>

      <body className={`${poppins.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
