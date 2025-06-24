import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Sun,
  Wrench,
  AlertCircle,
  RefreshCw,
  PhoneCall
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-blue-900">
      <div className="text-center">
        <h5 className="text-primary uppercase font-bold text-red-600 tracking-wider">
          Services That We Provide
        </h5>
        <h1 className="text-4xl font-bold mt-2">24-Hour Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Generator Installation */}
        <Card className="shadow-lg border border-blue-100">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="bg-red-600 p-3 rounded-full mb-4 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Generator Installation</h4>
            <p className="mb-4">
              Professional installation of high-quality generators to ensure reliable backup power for your home or business.
            </p>
            <Button variant="link" className="text-blue-600 p-0">Learn More</Button>
          </CardContent>
        </Card>

        {/* Solar System Installation */}
        <Card className="shadow-lg border border-blue-100">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="bg-blue-600 p-3 rounded-full mb-4 text-white">
              <Sun className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Solar System Installation</h4>
            <p className="mb-4">
              Expert installation of solar panels and systems, designed to maximize energy efficiency and sustainability.
            </p>
            <Button variant="link" className="text-blue-600 p-0">Learn More</Button>
          </CardContent>
        </Card>

        {/* Routine Maintenance */}
        <Card className="shadow-lg border border-blue-100">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="bg-red-600 p-3 rounded-full mb-4 text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Routine Maintenance</h4>
            <p className="mb-4">
              Regular maintenance services for both generators and solar systems to ensure optimal performance and longevity.
            </p>
            <Button variant="link" className="text-blue-600 p-0">Learn More</Button>
          </CardContent>
        </Card>

        {/* Emergency Repairs */}
        <Card className="shadow-lg border border-blue-100">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="bg-blue-600 p-3 rounded-full mb-4 text-white">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Emergency Repairs</h4>
            <p className="mb-4">
              Prompt and efficient repair services available 24/7 to quickly address any issues with your generator or solar system.
            </p>
            <Button variant="link" className="text-blue-600 p-0">Learn More</Button>
          </CardContent>
        </Card>

        {/* System Upgrades */}
        <Card className="shadow-lg border border-blue-100">
          <CardContent className="p-6 flex flex-col items-start">
            <div className="bg-red-600 p-3 rounded-full mb-4 text-white">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">System Upgrades</h4>
            <p className="mb-4">
              Upgrading existing generator and solar systems to enhance performance, improve energy efficiency, and integrate the latest technology.
            </p>
            <Button variant="link" className="text-blue-600 p-0">Learn More</Button>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 rounded-2xl p-10 text-center text-white shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <PhoneCall className="w-10 h-10" />
          <h3 className="text-2xl font-semibold">Call Us For a Quote</h3>
          <p className="max-w-2xl">
            Get in touch with us today for a personalized quote! Our team is available 24/7 to provide you with the best solutions and support. Call us now and discover how we can meet your generator and solar needs.
          </p>
          <h2 className="text-3xl font-bold mt-2">+27 73 653 4344</h2>
        </div>
      </div>
    </div>
  );
}
