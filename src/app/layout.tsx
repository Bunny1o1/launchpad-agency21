import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Vinod Yadav — Conversational AI Growth Expert",
    template: "%s | Vinod Yadav",
  },
  description:
    "8+ years managing WhatsApp Business for Netflix, Google, Bosch. Helping enterprises drive adoption, engagement, and revenue through conversational AI.",
  keywords: [
    "conversational AI",
    "WhatsApp Business",
    "RCS",
    "messaging strategy",
    "enterprise growth",
    "customer success",
  ],
  authors: [{ name: "Vinod Yadav" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vinod Yadav — Conversational AI Growth Expert",
    description:
      "Helping enterprises drive adoption and revenue through WhatsApp Business, RCS, and conversational AI.",
    siteName: "Vinod Yadav",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod Yadav — Conversational AI Growth Expert",
    description:
      "Helping enterprises drive adoption and revenue through WhatsApp Business, RCS, and conversational AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
