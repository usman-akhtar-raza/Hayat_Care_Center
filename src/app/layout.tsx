import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEffects from "@/components/MotionEffects";

export const metadata: Metadata = {
  title: "Hayat Care Center | Assisted Support & Senior Community Living",
  description:
    "Explore assisted support, amenities, dining, life enrichment, and floor plans at Hayat Care Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionEffects />
        <Header />
        <main id="main-content" className="relative flex-1">
          {children}
        </main>
        <div className="relative z-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
