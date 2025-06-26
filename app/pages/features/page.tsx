'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Timer, Flashlight, PlugZap, Wrench, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-blue-900">
      {/* Header */}
      <div className="text-center mb-16">
        <h5 className="text-red-600 uppercase font-bold tracking-widest">Our Features</h5>
        <h1 className="text-4xl font-bold">What Makes Generator Solutions (Pty) LTD Stand Out</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          We combine innovation, reliability, and expert craftsmanship to bring you uninterrupted power and peace of mind.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <ShieldCheck className="text-red-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Built for Reliability</h4>
            <p>Our systems are engineered for long-term use, backed by strong warranties and responsive support.</p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <PlugZap className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Fuel-Efficient Power</h4>
            <p>Our generators are optimized to reduce fuel consumption without compromising performance.</p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <Wrench className="text-red-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Easy Maintenance</h4>
            <p>Routine checks and smart notifications make it simple to keep your system running flawlessly.</p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <Timer className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Fast Response Times</h4>
            <p>We offer 24/7 emergency repairs with a team that’s always ready to assist you on-site or remotely.</p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <RefreshCw className="text-red-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Upgrade-Ready Systems</h4>
            <p>We future-proof your system so you can add solar or smart features when you’re ready.</p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 shadow-md">
          <CardContent className="p-6">
            <Flashlight className="text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Power Monitoring</h4>
            <p>Track usage, battery status, and generator health through mobile-enabled smart dashboards.</p>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
        <p className="mb-6">Let us help you choose the best backup power solution for your needs.</p>
        <Link href="/pages/quote">
          <Button className="bg-red-600 text-white hover:bg-red-700 text-lg px-6 py-4">
            Request a Free Quote
          </Button>
        </Link>
      </div>
    </div>
  );
}
