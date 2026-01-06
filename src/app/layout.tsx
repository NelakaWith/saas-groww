import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/common/header";
import HeroSection from "@/components/sections/heroSection";
import Partners from "@/components/sections/partnersSection";
import WhyUsInsights from "@/components/sections/whyUsInsights";
import WhyUsBeyondLimits from "@/components/sections/whyUsBeyondLimits";
import WhyUsCommunity from "@/components/sections/whyUsCommunity";
import WhyUsPlans from "@/components/sections/whyUsPlans";
import Integrations from "@/components/sections/integrationsSection";
import Pricing from "@/components/sections/pricingSection";
import FaqSection from "@/components/sections/faqSection";
import LetsTalk from "@/components/sections/letsTalk";
import Footer from "@/components/common/appFooter";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Groww - Invest, Save &amp; Learn",
  description: "AI Driven Universal Finance tool you need",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black relative`}>
        <Header />
        <HeroSection />
        <Partners />
        <WhyUsInsights />
        <WhyUsBeyondLimits />
        <WhyUsCommunity />
        <WhyUsPlans />
        <Integrations />
        <Pricing />
        <FaqSection />
        <LetsTalk />
        <Footer />
      </body>
    </html>
  );
}
