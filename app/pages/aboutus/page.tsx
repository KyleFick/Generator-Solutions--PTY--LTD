'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-blue-900">
      <div className="text-center mb-12">
        <h5 className="text-red-600 uppercase font-bold tracking-widest">About Us</h5>
        <h1 className="text-4xl font-bold">Who We Are</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Generator Solutions (Pty) LTD is a trusted provider of backup power and solar systems across South Africa. Our mission is to deliver reliable, efficient, and future-ready energy solutions to homes and businesses alike.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* CEO Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Meet Our CEO</h2>
          <p className="mb-4">
            <strong>Terence Carter</strong>, our founder and CEO, brings over a decade of hands-on experience in the energy sector. His leadership, vision, and technical expertise are the driving force behind our commitment to excellence.
          </p>
          <p>
            Terence believes in doing things right the first time and leads with honesty, transparency, and an unwavering focus on customer satisfaction.
          </p>
        </div>

        <div>
          <Image
            src="/ceo.jpg" // replace with your image file
            alt="CEO of Generator Solutions"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Company Values */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {["Integrity", "Safety First", "Customer Satisfaction"].map((value) => (
            <Card key={value} className="text-center border border-blue-200 shadow-sm">
              <CardContent className="py-8">
                <h4 className="text-xl font-semibold">{value}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
