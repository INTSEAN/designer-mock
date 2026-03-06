import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { menuItems } from "@/components/layout/MenuItems";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AstraBadge } from "@/components/layout/AstraBadge";
import PageTransition from "@/components/animations/PageTransition";
import AuthProvider from "@/components/auth/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description:
    "A world-class landing page template. Next.js, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
          <AuthProvider>
            <Navbar menuItems={menuItems} />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <AstraBadge />
            <Toaster />
          </AuthProvider>
        </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
