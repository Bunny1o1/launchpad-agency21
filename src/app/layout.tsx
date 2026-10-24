import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { SmoothScroll } from "@/components/smooth-scroll";
import { LeadWidget } from "@/components/lead-widget";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Saasible | AI Growth Agency for Consumer Brands",
    template: "%s | Saasible",
  },
  description:
    "Saasible builds AI agents and CRM lifecycle systems for consumer brands worldwide. Lead generation, WhatsApp, SMS, RCS, email and voice AI, led by enterprise lifecycle experience.",
  keywords: [
    "AI growth agency",
    "AI agency for consumer brands",
    "CRM lifecycle marketing agency",
    "customer retention agency",
    "lead generation agency",
    "WhatsApp marketing agency",
    "AI agents for ecommerce",
    "WhatsApp AI agent",
    "voice AI agent for business",
    "SMS and email lifecycle marketing",
  ],
  authors: [{ name: "Vinod Yadav", url: "https://saasible.in" }],
  metadataBase: new URL("https://saasible.in"),
  // No site-wide canonical: a shared one told Google every page was a copy of the homepage.
  // Pages that need an explicit canonical set it in their own metadata.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasible.in",
    title: "Saasible | AI Growth Agency for Consumer Brands",
    description:
      "Saasible builds AI agents and CRM lifecycle systems for consumer brands worldwide. Lead generation, WhatsApp, SMS, RCS, email and voice AI, led by enterprise lifecycle experience.",
    siteName: "Saasible",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saasible | AI Growth Agency for Consumer Brands",
    description:
      "Saasible builds AI agents and CRM lifecycle systems for consumer brands worldwide. Lead generation, WhatsApp, SMS, RCS, email and voice AI, led by enterprise lifecycle experience.",
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
  jobTitle: "Customer Lifecycle and AI Growth Consultant",
  description:
    "8+ years running WhatsApp, RCS, SMS and conversational AI lifecycle programs for global enterprise brands. Founder of Saasible, an AI growth agency for consumer brands.",
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
    "CRM Lifecycle Marketing",
    "Lead Generation",
    "AI Agents",
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
  name: "Saasible",
  description:
    "AI growth agency for consumer brands. AI agents, CRM lifecycle journeys and lead generation across WhatsApp, SMS, RCS, email and voice, with human consulting on strategy.",
  url: "https://saasible.in",
  provider: { "@type": "Person", name: "Vinod Yadav" },
  areaServed: "Worldwide",
  serviceType: [
    "CRM Lifecycle Marketing",
    "Lead Generation",
    "AI Agent Development",
    "WhatsApp and SMS Marketing",
    "Customer Retention Consulting",
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
    <html lang="en">
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
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans`}
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
        <LeadWidget />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
