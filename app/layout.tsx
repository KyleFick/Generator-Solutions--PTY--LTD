import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Nav/NavBar";
import Footer from "@/components/Nav/Footer";
import { ModeToggle } from "@/components/Theme-Toggle";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Generator Solutions (pty) LTD",
  description: "Create by Hack Bolt Studios",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          {/* <div className="fixed bottom-6 right-6 z-50">
            <ModeToggle />
          </div> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
