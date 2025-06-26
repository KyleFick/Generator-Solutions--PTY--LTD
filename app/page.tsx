'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlugZap,
  ShieldIcon,
  TruckIcon,
  Wrench,
  Sun,
  AlertCircle,
  RefreshCw,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="generator-theme">
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-red-900">

        {/* HERO */}
        <section className="text-center py-24 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Power On Demand</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Reliable generators and solar systems for home, business, and industrial use.
            Stay powered through any outage with expert service and fast support.
          </p>
          <Link href="/pages/quote">
            <Button className="bg-white text-red-600 hover:bg-red-100 text-lg px-8 py-6 shadow-md">
              Get a Quote
            </Button>
          </Link>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 px-6 bg-white text-blue-800">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-xl border-red-200">
              <CardContent className="py-8">
                <PlugZap className="mx-auto text-red-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
                <p>Fuel-efficient, high-performance systems designed to minimize downtime and save costs.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-xl border-blue-200">
              <CardContent className="py-8">
                <ShieldIcon className="mx-auto text-blue-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unmatched Reliability</h3>
                <p>Built with premium components and backed by 24/7 emergency support.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-xl border-red-200">
              <CardContent className="py-8">
                <TruckIcon className="mx-auto text-red-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nationwide Delivery</h3>
                <p>We deliver and install generators and solar systems across South Africa, fast and safely.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SERVICES SNAPSHOT */}
        <section className="py-20 px-6 bg-blue-50 text-blue-900">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border border-blue-200 shadow">
              <CardContent className="py-8">
                <Wrench className="mx-auto text-red-600 h-10 w-10 mb-4" />
                <h4 className="text-lg font-bold mb-2">Generator Installation</h4>
                <p>Professional installation for backup power at homes and businesses.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-blue-200 shadow">
              <CardContent className="py-8">
                <Sun className="mx-auto text-blue-600 h-10 w-10 mb-4" />
                <h4 className="text-lg font-bold mb-2">Solar Systems</h4>
                <p>Custom solar panel installations for energy independence and efficiency.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-blue-200 shadow">
              <CardContent className="py-8">
                <AlertCircle className="mx-auto text-red-600 h-10 w-10 mb-4" />
                <h4 className="text-lg font-bold mb-2">Emergency Repairs</h4>
                <p>24/7 repair services to resolve issues fast and restore your power.</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-blue-200 shadow">
              <CardContent className="py-8">
                <RefreshCw className="mx-auto text-blue-600 h-10 w-10 mb-4" />
                <h4 className="text-lg font-bold mb-2">System Upgrades</h4>
                <p>Boost your current system’s efficiency and integrate smart tech.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/pages/services">
              <Button variant="outline" className="text-blue-800 border-blue-600 hover:bg-blue-100">
                View All Services
              </Button>
            </Link>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-blue-900 text-white py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Free Quote?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Call us anytime, or request a quote online. We’ll respond within 24 hours and help you get the power you need.
          </p>
          <div className="flex flex-col items-center gap-4">
            <PhoneCall className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-semibold">+27 73 653 4344</h3>
          </div>
          <div className="mt-8">
            <Link href="/pages/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
