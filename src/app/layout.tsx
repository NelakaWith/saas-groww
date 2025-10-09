import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Groww - Invest, Save &amp; Learn",
  description: "AI Driven Universal Finance tool you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
