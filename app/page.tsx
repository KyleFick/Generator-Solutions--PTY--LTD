'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlugZap, ShieldIcon, TruckIcon } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="generator-theme">
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-red-900">
        {/* HERO */}
        <section className="text-center py-24 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <h1 className="text-5xl font-bold mb-4">Power On Demand</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Reliable generators for home, business, and industrial needs. Stay powered through any outage.
          </p>
          <Button className="bg-white text-red-600 hover:bg-red-100 text-lg px-8 py-6 shadow-md">
            Get a Quote
          </Button>
        </section>

        {/* FEATURES */}
        <section className="py-20 px-6 bg-white text-blue-800">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center shadow-xl border-red-200">
              <CardContent className="py-8">
                <PlugZap className="mx-auto text-red-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
                <p>Maximize uptime with powerful, fuel-efficient generators.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-xl border-blue-200">
              <CardContent className="py-8">
                <ShieldIcon className="mx-auto text-blue-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unmatched Reliability</h3>
                <p>Built to last with top-tier materials and tech support.</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-xl border-red-200">
              <CardContent className="py-8">
                <TruckIcon className="mx-auto text-red-600 h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p>We deliver and install generators across the country, fast and safe.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-blue-900 text-white py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Backup Power?</h2>
          <p className="text-lg mb-6">Talk to our experts today and get the right generator for your needs.</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
            Contact Us
          </Button>
        </section>
      </main>
    </ThemeProvider>
  );
}
