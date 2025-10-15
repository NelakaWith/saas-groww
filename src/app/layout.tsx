import type { Metadata } from "next";
import Header from "@/components/common/header";
import HeroSection from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import WhyUs from "@/components/sections/whyUs";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Groww - Invest, Save &amp; Learn",
  description: "AI Driven Universal Finance tool you need",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="antialiased bg-black relative">
        <Header />
        <HeroSection />
        <Partners />
        <WhyUs />
      </body>
    </html>
  );
}
