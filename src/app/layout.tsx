import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { SmoothScroll } from "@/components/smooth-scroll";

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
    default: "Saasible — GTM Agency for AI-era B2B SaaS Founders in India",
    template: "%s | Saasible",
  },
  description:
    "Saasible builds WhatsApp and Voice AI outbound systems for Indian B2B SaaS founders. Go from zero GTM to first revenue in 30 days.",
  keywords: [
    "GTM agency India",
    "WhatsApp outbound B2B",
    "Voice AI GTM",
    "SaaS go-to-market India",
    "outbound system builder India",
    "B2B SaaS founder GTM",
    "conversational GTM",
    "WhatsApp Business API",
    "India B2B SaaS",
  ],
  authors: [{ name: "Vinod Yadav", url: "https://saasible.in" }],
  metadataBase: new URL("https://saasible.in"),
  alternates: { canonical: "https://saasible.in" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasible.in",
    title: "Saasible — GTM Agency for AI-era B2B SaaS Founders in India",
    description:
      "Saasible builds WhatsApp and Voice AI outbound systems for Indian B2B SaaS founders. Go from zero GTM to first revenue in 30 days.",
    siteName: "Saasible",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saasible — GTM Agency for AI-era B2B SaaS Founders in India",
    description:
      "Saasible builds WhatsApp and Voice AI outbound systems for Indian B2B SaaS founders. Go from zero GTM to first revenue in 30 days.",
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

      {/* Datafast Analytics */}
      <Script
        src="https://datafa.st/js/script.js"
        data-website-id="dfid_Cyet9KSRTG1cTeIEHUWcN"
        data-domain="saasible.in"
        strategy="afterInteractive"
      />

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
        <SmoothScroll>
          <main className="min-h-screen">{children}</main>
        </SmoothScroll>
        <Footer />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
