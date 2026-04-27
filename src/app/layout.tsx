import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

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
    "8+ years managing WhatsApp Business and conversational AI for Netflix, Google, Bosch, and HSBC at Gupshup. Consulting enterprises on messaging strategy, customer adoption, and revenue growth.",
  keywords: [
    "conversational AI consultant India",
    "WhatsApp Business strategy",
    "WhatsApp Business expert",
    "RCS messaging consultant",
    "enterprise messaging strategy",
    "CPaaS growth consultant",
    "customer success consultant",
    "WhatsApp marketing",
    "Gupshup",
    "messaging channel adoption",
    "WhatsApp Business API",
    "AEO consultant",
  ],
  authors: [{ name: "Vinod Yadav", url: "https://saasible.in" }],
  metadataBase: new URL("https://saasible.in"),
  alternates: { canonical: "https://saasible.in" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasible.in",
    title: "Vinod Yadav — Conversational AI Growth Expert",
    description:
      "Helping enterprises drive adoption and revenue through WhatsApp Business, RCS, and conversational AI. 8+ years at Gupshup managing Netflix, Google, Bosch.",
    siteName: "Vinod Yadav",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod Yadav — Conversational AI Growth Expert",
    description:
      "Helping enterprises drive adoption and revenue through WhatsApp Business, RCS, and conversational AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinod Yadav",
  jobTitle: "Conversational AI Growth Expert",
  description:
    "8+ years managing WhatsApp Business and conversational AI for Netflix, Google, Bosch, and HSBC at Gupshup. Consulting enterprises on messaging strategy and customer adoption.",
  url: "https://saasible.in",
  email: "yuvinod@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/yuvinod/",
    "https://github.com/Bunny1o1",
    "https://vinod820.substack.com/",
  ],
  knowsAbout: [
    "WhatsApp Business API",
    "Conversational AI",
    "RCS Messaging",
    "Customer Success",
    "Enterprise Growth",
    "CPaaS",
    "Messaging Strategy",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Gupshup",
    url: "https://www.gupshup.io",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vinod Yadav — Conversational AI Consulting",
  description:
    "Expert consulting on WhatsApp Business strategy, RCS messaging, and conversational AI for enterprise brands.",
  url: "https://saasible.in",
  provider: { "@type": "Person", name: "Vinod Yadav" },
  areaServed: "Worldwide",
  serviceType: [
    "WhatsApp Business Strategy",
    "Conversational AI Consulting",
    "Messaging Channel Audit",
    "Customer Engagement Growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className="dark">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}

      {/* Google Ads Conversion Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17421464447"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17421464447');
        `}
      </Script>

      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
